import React, { useContext } from 'react'
import s from './form.module.css'
import { userContext } from '../../App'

const Form = () => {

    const {order, setOrder} = useContext(userContext)
    setOrder(order)

    return (
        <>
            Form
            
        </>
    )
}

export default Form;