import React, { useContext } from 'react'
import s from './form.module.css'
import { userContext } from '../../App'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const navigate = useNavigate()
    const {order, setOrder} = useContext(userContext)
    setOrder(order)


    const toOrder = () => {
        navigate('/order')
    }

    return (
        <>
            <div className={s.header}>
                <h2>Запоните данный:</h2>
                <h4 onClick={toOrder}>редактировать заказ</h4>
            </div>
            <form className={s.form}>
                <label className={s.field_item}>
                    <input type='text' required />
                    <span>Имя</span>
                    <div className={s.line}></div>
                </label>
                <label className={s.field_item}>
                    <input type='text' required />
                    <span>Телефон</span>
                    <div className={s.line}></div>
                </label>
                <label className={s.field_item}>
                    <input type='text' required />
                    <span>Комментарии к заказу</span>
                    <div className={s.line}></div>
                </label>
            </form>            
            {/* <input>Ваше имя</input>
            <input>Ваш номер телефона</input>
            через сколько заберете
            <input>Комментарии к заказу</input> */}
        </>
    )
}

export default Form;