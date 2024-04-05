import React, { useContext, useEffect } from "react";
import { userContext } from "../../App";
import pic from '../../fonts/chiken.png'
// import Чикен from '../../fonts/chiken.png'
// import Студенческая from '../../fonts/student.png'
// import Машрум from '../../fonts/mashroom.png'
// import Ливанская from '../../fonts/livanskaya.png'
// import Мексиканская from '../../fonts/mexican.png'
// import Арабская from '../../fonts/arab.png'
// import Турецкая from '../../fonts/turkey.png'
// import Чику from '../../fonts/chiku.png'
// import Итальянская from '../../../fonts/italy.png'
// import govno from '../../../fonts/govno.png'
// import falafel from '../../../fonts/falafel.png'
// import Барбекю from '../../../fonts/barbeku.png'
import s from './form.module.css'
import { useNavigate } from "react-router-dom";

const Form = () => {

    const navigate = useNavigate()
    const {order, setOrder} = useContext(userContext)

    const decrement = (index: number) => {
        const updatedOrder = [...order]
        if (updatedOrder[index].quantity > 1) {
            updatedOrder[index].quantity--
            setOrder(updatedOrder)
        } else {
            updatedOrder.splice(index, 1)
        }
        setOrder(updatedOrder)
    }

    const increment = (index: number) => {
        const updatedOrder = [...order]
        updatedOrder[index].quantity++
        setOrder(updatedOrder)
    }

    useEffect(() => {
        if (order.length === 0) {
            navigate('/')
        }
    }, [navigate, order, setOrder])

    const toMenu = () => {
        navigate('/')
    }

    return (
        <>
         <div className={s.header}>
            <h1>Ваш заказ:</h1>
            <p onClick={toMenu}>в меню</p>
         </div>
         {order.map((item: any, index: any) => (
            <div className={s.item} key={index}>
                <div className={s.img}>
                    <img src={pic} alt={item.name}/>
                </div>
                <h2>{item.name}</h2>
                <h4>{item.options[item.optionIndex].name}<br/>{item.options[item.optionIndex].weight}г</h4>
                <div className={s.bot}>
                    <div className={s.leftbot}>
                        <button onClick={() => decrement(index)}>-</button>
                        <h5>{item.quantity}</h5>
                        <button onClick={() => increment(index)}>+</button>
                    </div>
                    <h6 className={s.coast}>{item.quantity * item.options[item.optionIndex].coast} р</h6>
                </div>
            </div>
            
        ))}
        <hr />
        </>
    )
}

export default Form