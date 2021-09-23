import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const { name, price, seller, img, stock } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>By: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="regular-btn"
                >{element}Add to Cart</button>
            </div>
        </div>
    );
};

export default Product; <h1>uncle toh auntyre dore felse</h1>