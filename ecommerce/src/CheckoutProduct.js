import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title, image, price, description, category}) {

    const [{ basket }, dispatch] = useStateValue();
    const removeFomBasket = () => {
        dispatch ({
            type : 'REMOVE_FROM_BASKET',
            id : id,
        });
    }

    
    return (
        <div className = "checkoutProduct">
            <img className="checkoutProduct_image" src= {image} alt="" />
            
            <div className = "checkoutProduct_info">
                <p className= "checkoutProduct_title">{title}</p>

                <p className = "product_prize">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <button className= "checkoutProduct_button" onClick={removeFomBasket}>REMOVE_FROM_CART</button><br></br>
            </div>
        </div>
    );
}

export default CheckoutProduct;
