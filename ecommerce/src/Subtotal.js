import React from 'react';
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { Link, useHistory } from 'react-router-dom';
import checkoutForm from './CheckoutForm';

function Subtotal() {

    const [{ basket },dispatch] = useStateValue();
    let history = useHistory();

    function checkoutFormHandler() {
        history.push("/form"); 
    } 

    return (
        <div className = "subTotal">
            <CurrencyFormat 
                renderText= {(value) => (
                    <>
                        <p>Subtotal ({basket.length} items) : <strong>{getBasketTotal(basket)}</strong></p>
                    </>
                )}
            
                decimalScale= {2}
                value = {getBasketTotal(basket)}
                displayType = {"text"}
                thousandSeparator = {true}
                prefix = {"$"}
            />
            <button className= "subTotal_proceed" onClick={checkoutFormHandler} >Proceed to checkout</button>
        </div>
    )
}

export default Subtotal;
