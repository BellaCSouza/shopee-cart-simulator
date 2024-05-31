// Adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// Deletar item do carrinho
async function deleteItem(userCart, itemName) {
    const index = userCart.findIndex((item) => item.name == itemName);

    if(index != -1) {
        userCart.splice(i, 1);
    }
}

// Remover item do carrinho
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((product) => product.name == item.name);
    
    if(indexFound == -1) {
        console.log("Item not found.");
        return;
    }

    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    if(userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

async function displayCart(userCart) {
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
    });
}

// Calcular total do carrinho
async function calculateTotal(userCart) {
    const total = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\n🛍️ Total Shopee Cart: ${total}`);
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
};

