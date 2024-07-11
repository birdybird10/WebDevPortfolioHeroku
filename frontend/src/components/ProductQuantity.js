import React, { useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { HiOutlineMinusCircle } from "react-icons/hi";

function ProductQuantity(){
    const [quantity, setQuantity] = useState(0);
    const increaseQuantity = () => {
        if(quantity < 10){
            setQuantity(quantity+1)
        }
    }
    const decreaseQuantity = () => {
        if(quantity > 0){
            setQuantity(quantity-1)
        }
    }
    return(
        <>
        <div>
        <HiOutlineMinusCircle size={20} onClick={decreaseQuantity} />
        <span id="orderQuantity" >{quantity}</span>
        <IoMdAddCircleOutline size={20} onClick={increaseQuantity} />
        </div>
        </>
    )
}

export default ProductQuantity;