
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Oders.css'
import { useState } from 'react';
import { removeFromDb } from '../../utilities/fakedb';
/// but we do not inpuit shop-container how it  work 
const Orders = () => {
    const savedCart  = useLoaderData();
    const [cart,setCart] = useState(savedCart);
    
    const handleRoveFromCart = (id) => {
       const ramaining  = cart.filter(pd => pd.id !== id )
       setCart(ramaining);
       removeFromDb(id);
    }
    
    return (
        <div className='shop-container'>
           <div className='review-container'>
           {
             cart.map(product => <ReviewItem
             key={product.id}
             product={product}
             handleRoveFromCart={handleRoveFromCart}
             ></ReviewItem>)
           }

           </div>
           <div className='cart-container'>
            <Cart cart={cart}></Cart>
           </div>

        </div>
        
    );
};

export default Orders;