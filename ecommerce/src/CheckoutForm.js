import React from 'react';
import './CheckoutForm.css';

function CheckoutForm() {

    function submitHandler() {
        alert("Order Successfully placed");
    }

    return (
        <div className="checkoutForm">
            <h1 className="checkoutForm_header">ORDER FORM</h1>
            <form>
            <div className="checkoutForm_info">
                <b>Your name  <input type="text" required/></b><br></br>
                <b>Your Email <input type="text" required/></b><br></br>
            
                <div>
                    <b>Credit card No.</b> <input className="checkoutForm_creditCard" name="credit-number" class="cc-number" type="tel" pattern="\d*" maxlength="19" placeholder="Card Number" required/>
                    <input className="checkoutForm_creditCard" name="credit-expires" class="cc-expires" type="tel" maxlength="7" placeholder="MM / YY" required/>
                    <input className="checkoutForm_creditCard" name="credit-cvc" class="cc-cvc" type="tel" pattern="\d*" maxlength="4" placeholder="CVC" required/><br></br>
                </div>

                <b><label for="phone">Mobile number:</label></b>
                <input type="tel" name="telphone" placeholder="888 888 8888" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="10"  title="Ten digits code" required/><br></br>

                <button className="checkoutForm_button" onClick={submitHandler}> SUBMIT </button>
                </div>

                </form>    
        </div>
    )
}

export default CheckoutForm;
