import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons'
import'./Cart.css'

const Cart = (props) => {

    const {cart}= props || {}
  
let totalQuantity = 0;
    let total = 0;
    for (const donate of cart) {
        if (!donate.quantity) {
            donate.quantity = 1; // by defult 1 dile NaN dekabena
        }
        total = total + donate.donate * donate.quantity;
        totalQuantity = totalQuantity + donate.quantity;
    }

    const grandTotal = total;

    // console.log(cart)
    const element = <FontAwesomeIcon icon={faHandHoldingUsd} />
    return (
            <div className="cart my-3">

                    <h2>Donation Summary</h2>
                    <hr />
                    <div className="order_price">
                        <p>Items Donate:</p>
                        <h4>{element} {cart.length}</h4>
                    </div>
                    <div className="order_price">
                        <p>Add summary</p>
                        <h4>£ {total.toFixed(2)}</h4>
                    </div>
                    <hr />
                    <div className="order_total">
                        <p>Grand-Total Amount</p>
                        <h4>£ {grandTotal.toFixed(2)}</h4>
                    </div>
                    <hr />
               <ul>
                    <div className="order_total">
                        <p>Founder Name List</p>
                    </div>
            <hr />
                   {
                       cart.map( product=> <div className="d-flex jusitfy-content-between align-items-center pt-3 pb-2 border-bottom">
                    <div className="item pr-2"> 
                    <img src={product.img} alt="" width="80" height="80"/>
                        
                    </div>
                    <div className="d-flex flex-column px-3"><h6>{product.name}</h6></div>
                    
                    </div>
                           
                           
                           
                           )
                   }
               </ul>
        </div>
    );
};

export default Cart;