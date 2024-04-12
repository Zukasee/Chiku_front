import React, { useContext, useEffect, useState } from 'react'
import s from './form.module.css'
import { userContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import Timer from './timer/timer'

const Form = () => {

    const [comment, setComment] = useState<string>()
    const [userPhone, setUserPhone] = useState<string>()
    const [userName, setUserName] = useState<string>()
    const navigate = useNavigate()
    const {order, setOrder} = useContext(userContext)
    setOrder(order)

    const onChangeUserName = (e: any) => {
        setUserName(e.target.value)
    }

    const onChangeUserPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cleanedValue: string = e.target.value.replace(/[^0-9+]/g, '');
        setUserPhone(cleanedValue);
    }

    const onChangeComment = (e: any) => {
        setComment(e.target.value)
    }

    useEffect(() => {
        console.log(userPhone)
    }, [userPhone])


    const toOrder = () => {
        navigate('/order')
    }

    return (
        <>
            <div className={s.header}>
                <h2>Заполните данные:</h2>
                <h4 onClick={toOrder}>редактировать заказ</h4>
            </div>
            <form className={s.form}>
                <label className={s.field_item}>
                    <input type='text' value={userName} onChange={onChangeUserName} required />
                    <span>Имя</span>
                    <div className={s.line}></div>
                </label>
                <label className={s.field_item}>
                    <input type='text' value={userPhone} onChange={onChangeUserPhone} required />
                    <span>Телефон</span>
                    <div className={s.line}></div>
                </label>
                <Timer />
                <label className={s.field_item}>
                    <input type='text' value={comment} onChange={onChangeComment} required />
                    <span>Комментарии к заказу</span>
                    <div className={s.line}></div>
                </label>
            </form>            
            
        </>
    )
}

export default Form;