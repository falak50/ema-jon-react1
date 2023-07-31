import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleAddToCard = (product) => {
        console.log(product)
        const newCart = [...cart,product];
        setCart(newCart);
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
                <h4>Oder summary</h4>
                <h2>Selected Items: {cart.length}</h2>
            </div>
        </div>
    );
};

export default Shop;