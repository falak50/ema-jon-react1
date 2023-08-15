import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
const Cart = ({cart,handleClearCart,children}) => {
    // const cart = props.cart;
    // console.log(cart);
    let  total = 0, totalShipping = 0 ,quantity=0;
    for(const product of cart ){
        // if(!product.quantity)product.quantity=1;
        total=total+ (product.price*product.quantity);
        totalShipping=totalShipping+(product.shipping*product.quantity);
        quantity = quantity + product.quantity;
    }
    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax ;
    // console.log(total);
    return (
        <div className='cart'>
             <h4>Oder summary</h4>
             <p>Selected Items: {quantity}</p>
             <p>Total Price: ${total}</p>
             <p>Total shipping : ${totalShipping}</p>
             <p>Tax: ${tax.toFixed(2)}</p>
             <h3>Grand Total : ${grandTotal.toFixed(2)} </h3>
             <button onClick={handleClearCart} className='btn-clear-cart'>
             <span className='text'>Clear Cart</span> 
             <FontAwesomeIcon className='delete-icon2' icon={faTrashAlt} />
             </button>
             {
                children
             }
        </div>
    );
};

export default Cart;