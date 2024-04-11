import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
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
import s from './order.module.css'
import { useNavigate } from "react-router-dom";

const Order = () => {

    const tg = (window as any).Telegram.WebApp;
    const navigate = useNavigate()
    const {order, setOrder} = useContext(userContext)
    const [totalPrice, setTotalPrice] = useState<number>()
    const [checked, setChecked] = useState()

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

    useEffect(() => {
        if (checked !== false) {
            tg.MainButton.show();
        } else {
            tg.MainButton.hide();
        }
    }, [checked, setChecked, tg.MainButton])

    useEffect(() => {
        let totalPrice = 0 
        order.forEach((item:any) => {
            const option = item.options[item.optionIndex]
            totalPrice += option.coast * item.quantity
        })
        setTotalPrice(totalPrice)
        console.log(order)
    }, [order])

    return (
        <>
         <div className={s.header}>
            <h2>Ваш заказ:</h2>
            <h4 onClick={toMenu}>вернуться к меню</h4>
         </div>
         {order.map((item: any, index: any) => (
            <div className={s.item} key={index}>
                <div className={s.img}>
                    <img src={item.pic} alt={item.name}/>
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
        <div className={s.finalCoast}>
            <h2>Итого:</h2>
            <h4>{totalPrice} р</h4>
        </div>
        {/* <input className={s.comment}>
        </input> */}
        <input type="checkbox" checked={checked}></input>
        </>
    )
}

export default Order