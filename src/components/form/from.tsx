import React, { useContext } from 'react'
import s from './form.module.css'
import { userContext } from '../../App'

const Form = () => {

    const {order, setOrder} = useContext(userContext)
    setOrder(order)

    return (
        <>
            <input>Ваше имя</input>
            <input>Ваш номер телефона</input>
            через сколько заберете
            <input>Комментарии к заказу</input>
        </>
    )
}

export default Form;