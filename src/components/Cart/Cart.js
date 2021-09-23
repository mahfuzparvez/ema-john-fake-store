import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    let items = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {props.cart.lenght}</h5>
            <p>Total: {total}</p>
            <p>Shipping Cost: {shipping}</p>
        </div>
    );
};
export default Cart;