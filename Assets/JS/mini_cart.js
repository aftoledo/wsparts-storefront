window.addEventListener("load", loadMiniCart, false);

/**
 * Loads the minicart component via snippet call, replacing the placeholder's div content with the snippet response.
 */
async function loadMiniCart() {
    try {
        const checkoutId = await client.checkout.getCheckoutId();

        let variables = {
            checkoutId: "",
            hasCheckout: false,
        };

        if (checkoutId && checkoutId != "") {
            variables.checkoutId = checkoutId;
            variables.hasCheckout = true;
        }

        const response = await client.snippet.detailed(
            "mini_cart_snippet.html",
            "SnippetQueries/mini_cart.graphql",
            variables
        );

        if (response == null)
            return;

        const elementId = 'min-cart-items';
        setInnerHtmlById(response.html, elementId);
        updateCartQtyLabel();

        if (response.queryResponse?.data?.checkout != null) {
            await addUtmMetadata(response.queryResponse.data.checkout);
        }
    } catch (error) {
        console.log(error);
    }
}

/**
 * Shows or hides the cart when the mouse moves over or out
 */
function setCartDivVisibility() {
    if(!document.getElementById("side-card-over-list").classList.contains('open')){
        document.getElementById("side-card-over-list").classList.remove('hidden')
        setTimeout(() => {
            document.getElementById("side-card-over-list").classList.remove('opacity-0')        
            document.getElementById("side-card-over-list").classList.add('opacity-100')
            document.getElementById("side-card-over-list").classList.add('open')
            document.getElementById("side-bar-cart").classList.remove('translate-x-full')
            document.getElementById("side-bar-cart").classList.add('translate-x-0') 
        },100)               
        window.dispatchEvent(new Event("cartViewed"));
    }else{
        document.getElementById("side-card-over-list").classList.add('opacity-0')
        document.getElementById("side-card-over-list").classList.remove('opacity-100')
        document.getElementById("side-card-over-list").classList.remove('open')
        document.getElementById("side-bar-cart").classList.add('translate-x-full')
        document.getElementById("side-bar-cart").classList.remove('translate-x-0')
        setTimeout(() => {document.getElementById("side-card-over-list").classList.add('hidden')},200)        
    }
}

/**
 * Associates the current checkout with a partner access
 * @param {string} checkoutUrl - The checkout url the will be broken down to get the checkoutId
 */
async function miniCartPartnerAssociate(checkoutUrl) {
    if (!checkoutUrl) return;
    var checkoutId = checkoutUrl.split("/").at(-1);
    if (checkoutId) await checkoutPartnerAssociate(checkoutId);
}

async function removeProductFromCart(id, qty, customizationId) {
    try {
        const checkoutId = await client.checkout.getCheckoutId();
        const input = getMiniCartAddOrSubtractInput(id, Number(qty), customizationId);        
        const checkoutData = await client.checkout.remove(input, checkoutId);
        await loadMiniCart();
        showOverlay('Produto removido!', 'Produto removido do carrinho');

        window.dispatchEvent(new CustomEvent("productRemovedFromCart", {
            detail: { 
                cart: checkoutData.data,
                products : [{
                    productVariantId: Number(id),
                    quantity: Number(qty)
                }]
            }
        }));
    } catch (error) {
        console.log(error);
        showOverlay('Ocorreu um erro!', 'Erro ao remover o produto do carrinho', true);
    }
}

function updateCartQtyLabel(){
    const qtyInput = document.getElementById("cart-products-qty");
    const qtyLabel = document.getElementById("cart-qty-label");
    
    if (qtyInput && qtyLabel){
        qtyLabel.innerHTML = qtyInput.value;
        const qty = parseInt(qtyInput.value);
        if (qty >= 1){
            qtyLabel.classList.add("bg-primary-600");
            qtyLabel.classList.remove("bg-secondary-600");
        }
        if (qty === 0){
            qtyLabel.classList.add("bg-secondary-600");
            qtyLabel.classList.remove("bg-primary-600");
        }
    }
}

function getMiniCartAddOrSubtractInput(productVariantId, quantity, customizationId){
    const input = [
        {
            productVariantId: Number(productVariantId),
            quantity
        }
    ];

    if (customizationId){
        input[0].customizationId = customizationId;
    }

    return input;
}

async function miniCartAddQuantity(productVariantId, customizationId){
    const input = getMiniCartAddOrSubtractInput(productVariantId, 1, customizationId);
    await client.checkout.add(input);
    await loadMiniCart();
}

async function miniCartSubtractQuantity(productVariantId, customizationId){
    const input = getMiniCartAddOrSubtractInput(productVariantId, 1, customizationId);
    await client.checkout.remove(input);
    await loadMiniCart();
}

async function addUtmMetadata(checkout) {
    const utmSource = "utm_source";
    const utmMedium = "utm_medium";
    const utmCampaign = "utm_campaign";
    const utmTerm = "utm_term";
    const utmContent = "utm_content";

    if (checkout.products?.length > 0){
        const metadataValues = [];

        const utmSourceFromCookie = client.cookie.get(utmSource);
        const utmMediumFromCookie = client.cookie.get(utmMedium);
        const utmCampaignFromCookie = client.cookie.get(utmCampaign);
        const utmTermFromCookie = client.cookie.get(utmTerm);
        const utmContentFromCookie = client.cookie.get(utmContent);

        if (utmSourceFromCookie) {
            metadataValues.push({key: "utmSource", value: utmSourceFromCookie})
            client.cookie.remove(utmSource);
        }

        if (utmMediumFromCookie) {
            metadataValues.push({key: "utmMedium", value: utmMediumFromCookie})
            client.cookie.remove(utmMedium);
        }

        if (utmCampaignFromCookie) {
            metadataValues.push({key: "utmCampaign", value: utmCampaignFromCookie})
            client.cookie.remove(utmCampaign);
        }

        if (utmTermFromCookie) {
            metadataValues.push({key: "utmTerm", value: utmTermFromCookie})
            client.cookie.remove(utmTerm);
        }

        if (utmContentFromCookie) {
            metadataValues.push({key: "utmContent", value: utmContentFromCookie})
            client.cookie.remove(utmContent);
        }

        if (metadataValues.length > 0) {
            await client.checkout.addCheckoutMetadata(metadataValues, checkout.checkoutId);
        }

        return;
    }
    
    const utmSourceFromQueryString = queryStringParams.get(utmSource);
    const utmMediumFromQueryString = queryStringParams.get(utmMedium);
    const utmCampaignFromQueryString = queryStringParams.get(utmCampaign);
    const utmTermFromQueryString = queryStringParams.get(utmTerm);
    const utmContentFromQueryString = queryStringParams.get(utmContent);

    if (utmSourceFromQueryString) {
        client.cookie.set(utmSource, utmSourceFromQueryString);
    }

    if (utmMediumFromQueryString) {
        client.cookie.set(utmMedium, utmMediumFromQueryString);
    }

    if (utmCampaignFromQueryString) {
        client.cookie.set(utmCampaign, utmCampaignFromQueryString);
    }

    if (utmTermFromQueryString) {
        client.cookie.set(utmTerm, utmTermFromQueryString);
    }

    if (utmContentFromQueryString) {
        client.cookie.set(utmContent, utmContentFromQueryString);
    }
}

async function addUtmMetadataIfExists(){
    const checkout = await client.checkout.get();
    if (checkout?.data != null) await addUtmMetadata(checkout.data);
}