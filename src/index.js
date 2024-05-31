import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const cart = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("Flower Knows Palette", 100, 2);
const item2 = await createItem("Luminaire", 49.90, 1);

await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

await cartService.removeItem(cart, item1);

await cartService.displayCart(cart);

// await cartService.deleteItem(cart, item2.name);

await cartService.calculateTotal(cart);
