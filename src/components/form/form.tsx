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
        <p>Quantity: {item.quantity}</p>
        {/* Вывод других свойств объекта */}
    </div>
))}
        </>
    )
}

export default Form