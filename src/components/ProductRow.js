import React from "react";
import ProductQuantity from "./ProductQuantity";

function ProductRow({product}){
    return (
        <>
            <tr>
                <td>{product.company}</td>
                <td >{product.product}</td>
                <td className="number-cell">{product.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
                <td><ProductQuantity/></td>
            </tr>
        </>
    )
}

export default ProductRow;