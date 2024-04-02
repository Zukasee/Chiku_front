import React, { useContext } from "react";
import { userContext } from "../../App";


const Form = () => {

    const {order, setOrder} = useContext(userContext)
    setOrder(order)


    return (
        <>
         form
         {order.map((item: any, index: any) => (
            <div key={index}>
                <p>Name: {item.name}</p>
                <p>Option: {item.options[item.optionIndex].name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price per piece: {item.options[item.optionIndex].coast}р</p>
                <p>Weight per piece: {item.options[item.optionIndex].weight}г</p>
            </div>
        ))}
        </>
    )
}

export default Form