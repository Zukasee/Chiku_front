import React, { useCallback, useContext, useEffect, useState } from 'react'
import s from './form.module.css'
import { userContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import Timer from './timer/timer'

const Form = () => {

    const tg = (window as any).Telegram.WebApp;
    const queryId = tg.initDataUnsafe?.query_id
    const [comment, setComment] = useState<string>('')
    const [userPhone, setUserPhone] = useState<string>('+375')
    const [userName, setUserName] = useState<string>('')
    const [totalPrice, setTotalPrice] = useState<number>()
    const [selectedTime, setSelectedTime] = useState<any>(null)
    const navigate = useNavigate()
    const {order, setOrder} = useContext(userContext)
    setOrder(order)

    const handleSelectedTime = (timeIndex: number) => {
        setSelectedTime(timeIndex);
    }

    const onSendData = useCallback(() => {
        const data = {
            userName,
            userPhone,
            comment,
            order,
            queryId,
            selectedTime
        }
        tg.MainButton.setParams({
            text: `Обработка заказа`,
        });
        // https://chiku-back.onrender.com/ 
        fetch('https://morning-scrubland-61652-88f7afd9cea2.herokuapp.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        tg.sendData(JSON.stringify(data))
    }, [userName, userPhone, comment, order, queryId, tg, selectedTime])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData, tg])

    useEffect(() => {
        if (!userName || userPhone.length!==13 || selectedTime == null) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
        console.log(selectedTime)
    }, [selectedTime, tg, userName, userPhone])

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
    }, [order])

    const onChangeUserName = (e: any) => {
        setUserName(e.target.value)
    }

    const onChangeUserPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        let cleanedValue: string = e.target.value.replace(/[^0-9+]/g, '');
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
                <Timer handleSelectedTime={handleSelectedTime}/>
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