import './Cart.css'
const Cart = ({cart}) => {
    // const cart = props.cart;
    console.log(cart);
    let  total = 0, totalShipping = 0 ;
    for(const product of cart ){
        total=total+product.price;
        totalShipping=totalShipping+product.shipping;
    }
    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax ;
    console.log(total);
    return (
        <div className='cart'>
             <h4>Oder summary</h4>
             <p>Selected Items: {cart.length}</p>
             <p>Total Price: ${total}</p>
             <p>Total shipping : ${totalShipping}</p>
             <p>Tax: ${tax.toFixed(2)}</p>
             <h3>Grand Total : ${grandTotal.toFixed(2)} </h3>
        </div>
    );
};

export default Cart;