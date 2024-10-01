/**
 * Iterates the page's buy list product divs, evaluating if each product should be added to the list (based
 * on the product availability, quantity selected, and if it is selected on the checkbox).
 */
 function buyBoxGetProductsAndQuantities() {
    const selectedButton = document.querySelector('[buybox-select-button][selected]');
    const productVariantId = selectedButton.value;

    const selectedOfferOptions = document.querySelector(`[data-buybox-product-variant-id="${productVariantId}"]`);
    const quantity = selectedOfferOptions.querySelector('[product-quantity]').value

    let input = [];
    input.push({
        productVariantId: Number(productVariantId),
        quantity: Number(quantity)
    })

    return input;
}

/**
 * Handles the buy button click event by retrieving the selected products and quantities,
 * and processes the checkout request. Redirects the user to the checkout page if successful.
 * 
 * @param {HTMLElement} button - The clicked buy button element.
 */
async function buyBoxBuyClick(button) {
    const input = buyBoxGetProductsAndQuantities(button);
    const success = await addOrCreateCheckout(input);
    if (success && checkoutUrl != "") {
        window.location = checkoutUrl;
    }
}

/**
 * Handles the add-to-cart button click event. Retrieves selected products and quantities,
 * adds them to the cart, and displays a success overlay if the operation is successful.
 * 
 * @param {HTMLElement} button - The clicked add-to-cart button element.
 */
async function buyBoxAddToCartClick(button) {
    const input = buyBoxGetProductsAndQuantities(button);
    const success = await addOrCreateCheckout(input);
    if (success){
        showOverlay('Produto adicionado!', 'Produto adicionado ao carrinho')
        await loadMiniCart();
    }
}

/**
 * Product attribute selection function.
 * @param {HTMLElement} element - Attribute element from HTML.
 */
async function buyBoxSelectAttribute(element){
    const attrId = element.getAttribute("attribute-id");
    const productId = element.getAttribute("product-id");
	const attributeDiv = element.closest('[attribute-selections]');
    let attributeList = getSelectedAttributes(attributeDiv, attrId, element.value.trim());
    await buyboxRenderAttributes(attributeList, productId);
}

/**
 * Renders the attributes according to the product and the selected attributes.
 * @param {string} attributeList - List of product selected attributes .
 * @param {string} productId - Product ID.
 */
async function buyboxRenderAttributes(attributeList, productId){
    const variables = {
        productId: Number(productId),
        selections: attributeList
    };
    const elementId = `product-view-div-${productId}`;
    const response = await client.snippet.render("buy_box_product_view_snippet.html", "buy_box_product.graphql", variables);
    setInnerHtmlById(response, elementId);
    handleDataLayerAttributeSelection();
}

/**
 * Handles the click event for selecting a product offer.
 * Updates the button to show the selected state and renders the appropriate offer options.
 * @param {HTMLElement} buttonElement - The button element clicked to select the product offer.
 */
function buyBoxSelectOfferClick(buttonElement) {
    const productVariantId = buttonElement.value;

    const buyboxButtons = document.querySelectorAll('[buybox-select-button]');
    for (let button of buyboxButtons) {
        button.innerHTML = 'SELECIONAR';
        button.removeAttribute('selected');
        button.classList.remove('bg-primary-900');
    }

    buttonElement.innerHTML = 'SELECIONADO';
    buttonElement.setAttribute('selected', "");
    buttonElement.classList.add('bg-primary-900');

    const buyboxOptions = document.getElementsByClassName('buybox-options');
    for (let option of buyboxOptions) {
        option.classList.remove('flex');
        option.classList.add('hidden');
    }

    const selectedOfferOption = document.querySelector(`[data-buybox-product-variant-id="${productVariantId}"]`);
    if (selectedOfferOption) {
        selectedOfferOption.classList.remove('hidden');
        selectedOfferOption.classList.add('flex');
    }
}

/**
 * Submits the shipping quote request for the selected product offer.
 * @param {Event} e - The event triggered by the form submission.
 */
async function buyBoxShippingQuoteSubmit(e) {    
    e.preventDefault();
    
    const selectedButton = document.querySelector('[buybox-select-button][selected]');
    const productVariantId = selectedButton.value;
    const selectedOfferOption = document.querySelector(`[data-buybox-product-variant-id="${productVariantId}"]`);
    const cep = selectedOfferOption.querySelector('#shipping-quote-cep').value;
    const snippetDiv = selectedOfferOption.querySelector('#shipping-quotes-snippet-div');

    let input = {
        cep,
        productVariantId: Number(productVariantId)
    }

    await fetchAndRenderShippingQuote(input, snippetDiv);
}