import { getShoppingCart } from "../utilities/fakedb";

//CartProductsLoader.js
const CartProductsLoader = async() => {
    const loadedProducts  = await fetch('products.json');
    const products = await loadedProducts.json();
    // if cart data is in database then you have to use async await 
    const storeCart = getShoppingCart();

    console.log(storeCart);
    const savedCart = [];
    for(const id in storeCart){
        const addedProduct = products.find(pd => pd.id== id);
        if(addedProduct){
            const quantity = storeCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    return savedCart;
}
export default CartProductsLoader;