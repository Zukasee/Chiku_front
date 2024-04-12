import React, { useCallback, useContext, useEffect, useState } from 'react'
import s from './form.module.css'
import { userContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import Timer from './timer/timer'

const Form = () => {

    const tg = (window as any).Telegram.WebApp;
    const queryId = tg.initDataUnsafe?.query_id
    const [comment, setComment] = useState<string>('')
    const [userPhone, setUserPhone] = useState<string>('')
    const [userName, setUserName] = useState<string>('')
    const [totalPrice, setTotalPrice] = useState<number>()
    const navigate = useNavigate()
    const {order, setOrder} = useContext(userContext)
    setOrder(order)

    const onSendData = useCallback(() => {
        const data = {
            userName,
            userPhone,
            comment,
            order,
            queryId
        }
        tg.MainButton.setParams({
            text: `Обработка заказа`,
        });
        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        tg.sendData(JSON.stringify(data))
    }, [userName, userPhone, comment, order, queryId, tg])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData, tg])

    useEffect(() => {
        if (!userName || !userPhone) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [tg, userName, userPhone])

    useEffect(() => {
        tg.MainButton.setParams({
            text: `Далее ${totalPrice} p`
        })
    }, [totalPrice, order, tg.MainButton])

    useEffect(() => {
        let totalPrice = 0 
        order.forEach((item:any) => {
            const option = item.options[item.optionIndex]
            totalPrice += option.coast * item.quantity
        })
        setTotalPrice(totalPrice)
        console.log(order)
    }, [order])

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