import React from 'react';
import ProductQuantity from './ProductQuantity'; 

function ProductRow({singleProduct}){
    return(
        <>
        <tr>
            <td>{singleProduct.company}</td>
            <td>{singleProduct.product}</td>
            <td className="rightAlign">{singleProduct.price.toLocaleString(
                'en-US',{style: 'currency',currency: 'USD', minimumFractionDigits: 2}
                )}
            </td>
            <td> <ProductQuantity /> </td>
        </tr>
        </>
    )
}

export default ProductRow;