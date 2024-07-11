import React from 'react';
import ProductRow from '../components/ProductRow.js'; 
import products from '../data/products.js';

function OrderPage(){
    return(
        <>
        <h2>Order</h2>
        <p>Place an order from the given products.</p>
        <article>
                    <fieldset>
                        <legend>Products available for purchase</legend>
                        <table id="orderingTable">
                            <caption>Select between 0-10 for each item:</caption>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Product</th>
                                    <th id="price">Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => <ProductRow singleProduct={product} key={index} /> )}
                            </tbody>
                        </table>
                
                    </fieldset>
             
            </article>
        </>
    )
}

export default OrderPage;
      