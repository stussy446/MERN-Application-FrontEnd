import React, {useState} from "react";
import { SlArrowUpCircle, SlArrowDownCircle } from "react-icons/sl";

function ProductQuantity(){
    let [quantity, setQuantity] = useState(0);

    let increaseOrder = () => setQuantity(quantity + 1);
    let decreaseOrder = () => setQuantity(quantity - 1);

    return (
        <>
            <SlArrowUpCircle id="upArrow" onClick={increaseOrder} />
            <SlArrowDownCircle onClick={decreaseOrder} />
            <p>{quantity}</p>
        </>
    )
}

export default ProductQuantity;