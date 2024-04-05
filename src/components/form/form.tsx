import React, { useContext } from "react";
import { userContext } from "../../App";
import pic from '../../fonts/chiken.png'
import s from './form.module.css'

const Form = () => {

    const {order, setOrder} = useContext(userContext)
    setOrder(order)


    return (
        <>
         form
         {order.map((item: any, index: any) => (
            <div className={s.item} key={index}>
                <div className={s.img}>
                    <img src={pic} alt={item.name}/>
                </div>
                <h2>{item.name}</h2>
                <h4>{item.options[item.optionIndex].name}<br/>{item.options[item.optionIndex].weight}г</h4>
                <div className={s.bot}>
                    <div className={s.leftbot}>
                        <button>-</button>
                        <h5>{item.quantity}</h5>
                        <button>+</button>
                    </div>
                    <h6 className={s.coast}>{item.quantity * item.options[item.optionIndex].coast}р</h6>
                </div>
                {/* <p>Name: {item.name}</p>
                <p>Option: {item.options[item.optionIndex].name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price per piece: {item.options[item.optionIndex].coast}р</p>
                <p>Weight per piece: {item.options[item.optionIndex].weight}г</p> */}
            </div>
        ))}
        </>
    )
}

export default Form