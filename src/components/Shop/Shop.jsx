import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from './../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    useEffect(()=>{
        // console.log('product-----> ',products);
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1 : get id;
        for(const id in storedCart){
            // console.log(id);
        // step 2 : get the product by using id 
            const   addedProduct= products.find(product => product.id === id);
        //  console.log('before ->(why is quantity update befor set)',addedProduct); 
        // step 3 : get quantity of the product
        if(addedProduct){
            const quantity = storedCart[id];
             addedProduct.quantity = quantity;
        // step 4:add the added Product to the save cart
             savedCart.push(addedProduct);
            //   console.log('after ->',addedProduct);
        }


        }
       setCart(savedCart);

    },[products])
    const handleAddToCard = (product) => {
        // console.log(product)
        let newCart = [];
        // const newCart = [...cart,product];
    // ifproduct does not exist in the cart , then set quantity = 1
    // if exist update quantity by 1
        const exists = cart.find(pd => pd.id ===  product.id);
        // console.log(exists); if not exist then undefine value
        if(!exists){
            product.quantity=1;
            newCart=[...cart,product];
        }else{
           exists.quantity = exists.quantity + 1;
           const remaining = cart.filter(pd => pd.id !== product.id);
           newCart = [...remaining,exists];
        }
        setCart(newCart);
        addToDb(product.id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
      }
    return (
        <div className='shop-container'>
            <div className="products-container">
              {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCard={handleAddToCard}
                    ></Product>)
                }
            
          
            </div>
            <div className="card-container">
               <Cart 
               handleClearCart={handleClearCart}
               cart={cart}>
                <Link className='proceed-link' to="/orders"> <button className='btn-proceed'>Review Order</button></Link>   
               
               </Cart>
            </div>
        </div>
    );
};

export default Shop;