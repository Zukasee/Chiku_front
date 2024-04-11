import React, { useContext } from 'react'
import s from './form.module.css'
import { userContext } from '../../App'

const Form = () => {

    const {order, setOrder} = useContext(userContext)
    setOrder(order)

    return (
        <>
            <form className={s.form}>
                <label className={s.field_item}>
                    <input type='text' required />
                    <span>Имя</span>
                    <div className={s.line}></div>
                </label>
                <label className={s.field_item}>
                    <input type='text' required />
                    <span>телефон</span>
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