import React, { useCallback, useContext, useEffect, useState } from "react";
import s from './shawarma.module.css'
import shawermaImg from '../../../fonts/chiken.png'
import student from '../../../fonts/student.png'
import mashroom from '../../../fonts/mashroom.png'
import livanskaya from '../../../fonts/livanskaya.png'
import mexican from '../../../fonts/mexican.png'
import arab from '../../../fonts/arab.png'
import turkey from '../../../fonts/turkey.png'
import chiky from '../../../fonts/chiku.png'
import italy from '../../../fonts/italy.png'
import govno from '../../../fonts/govno.png'
import falafel from '../../../fonts/falafel.png'
import barbeku from '../../../fonts/barbeku.png'

import { userContext } from "../../../App";
import { useNavigate } from "react-router-dom";

interface MenuItem {
    name: string;
    pic: string;
    ingridients: string;
    options: {
        name: string;
        weight: number;
        coast: number;
    }[];
}

interface OrderItem extends MenuItem {
    quantity: number;
    optionIndex: number;
}

const Shawarma = () => {

    const shawarmaMenu: MenuItem[] = [
        {
            name: 'Чикен',
            pic: shawermaImg,
            ingridients: `Лаваш, курица, капуста, помидоры, соленый огурец, соус`,
            options: [
                {
                    name: 'мини',
                    weight: 400,
                    coast: 6
                },
                {
                    name: 'стандарт',
                    weight: 450,
                    coast: 7
                },
                {
                    name: 'делюкс',
                    weight: 500,
                    coast: 8
                },
            ]
        },
        {
            name: 'Студенческая',
            pic: student,
            ingridients: 'Лаваш, курица, капуста, помидоры, соленый огурец, соус',
            options: [
                {
                    name: 'студент',
                    weight: 400,
                    coast: 5
                }
            ]
        },
        {
            name: 'Машрум',
            pic: mashroom,
            ingridients: 'Лаваш, курица, капуста, помидоры, соленый огурец, кетчуп, соус сырный, сыр, грибы, майонез',
            options: [
                {
                    name: 'стандарт',
                    weight: 500,
                    coast: 8
                }
            ]
        },
        {
            name: 'Ливанская',
            pic: livanskaya,
            ingridients: 'Лаваш, курица, соленый огурец, соус, картошка',
            options: [
                {
                    name: 'мини',
                    weight: 500,
                    coast: 9
                },
                {
                    name: 'стандарт',
                    weight: 600,
                    coast: 11
                },
            ]
        },
        {
            name: 'Арабская',
            pic: arab,
            ingridients: 'Лаваш, курица, помидоры, соленый огурец, соус, картошка',
            options: [
                {
                    name: 'мини',
                    weight: 500,
                    coast: 9
                },
                {
                    name: 'стандарт',
                    weight: 600,
                    coast: 11
                },
            ]
        },
        {
            name: 'Мексиканская',
            pic: mexican,
            ingridients: 'Лаваш, курица, капуста, помидоры, соленый огурец, соус чесночный, соус острый, лук',
            options: [
                {
                    name: 'мини',
                    weight: 500,
                    coast: 8.50
                },
                {
                    name: 'стандарт',
                    weight: 600,
                    coast: 11
                },
            ]
        },
        {
            name: 'Барбекю',
            pic: barbeku,
            ingridients: 'Лаваш, курица, капуста, помидоры, соленый огурец, соус барбекю, чесночный соус',
            options: [
                {
                    name: 'мини',
                    weight: 500,
                    coast: 8
                },
                {
                    name: 'стандарт',
                    weight: 600,
                    coast: 10
                },
            ]
        },
        {
            name: 'Арабская Х',
            pic: arab,
            ingridients: 'Лаваш, говядина, помидоры, соленый огурец, соус, картошка',
            options: [
                {
                    name: 'стандарт',
                    weight: 500,
                    coast: 12.50
                }
            ]
        },
        {
            name: 'Турецкая',
            pic: turkey,
            ingridients: 'Лаваш, курица, капуста, помидоры, соленый огурец, соус турецкий, соус чесночный',
            options: [
                {
                    name: 'мини',
                    weight: 500,
                    coast: 8.50
                },
                {
                    name: 'стандарт',
                    weight: 600,
                    coast: 10
                },
            ]
        },
        {
            name: 'Чику',
            pic: chiky,
            ingridients: 'Супер вкусный и супер секретный состав',
            options: [
                {
                    name: 'стандарт',
                    weight: 700,
                    coast: 13
                }
            ]
        },
        {
            name: 'Итальянская',
            pic: italy,
            ingridients: 'Лаваш, курица, капуста, помидоры, соленый огурец, соус томатный, соус чесночный, сыр, грибы',
            options: [
                {
                    name: 'мини',
                    weight: 500,
                    coast: 9
                },
                {
                    name: 'стандарт',
                    weight: 600,
                    coast: 11
                },
            ]
        },
        {
            name: 'с говядиной',
            pic: govno,
            ingridients: 'Говядина блядь, какая нахуй говядина, где нормальное описание',
            options: [
                {
                    name: 'стандарт',
                    weight: 400,
                    coast: 9
                },
                {
                    name: 'делюкс',
                    weight: 500,
                    coast: 11
                },
                {
                    name: 'чику',
                    weight: 700,
                    coast: 18
                },
            ]
        },
        {
            name: 'Фалафель',
            pic: falafel,
            ingridients: 'Лаваш, котлета из нута, капуста, помидоры, соленый огурец, соус',
            options: [
                {
                    name: 'стандарт',
                    weight: 400,
                    coast: 5
                },
                {
                    name: 'сирийски',
                    weight: 500,
                    coast: 6
                }
            ]
        },
    ]

    const tg = (window as any).Telegram.WebApp;
    const navigate = useNavigate()
    const {order, setOrder} = useContext(userContext)
    const [totalPrice, setTotalPrice] = useState<number>(0)

    const openForm = useCallback(() => {
        tg.MainButton.hide();
        navigate('/form')
    }, [tg.MainButton, navigate])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', openForm)
        return () => {
            tg.offEvent('mainButtonClicked', openForm)
        } 
    }, [tg, openForm])

    useEffect(() => {
        if (totalPrice !== 0) {
            tg.MainButton.show();
        } else {
            tg.MainButton.hide();
        }
    })

    useEffect(() => {
        let totalPrice = 0
        order.forEach((item: OrderItem) => {
            const option = item.options[item.optionIndex]
            totalPrice += + option.coast * item.quantity
        })
        setTotalPrice(totalPrice)
    }, [order])

    useEffect(() => {
        tg.MainButton.setParams({
            text: `Далее ${totalPrice} p`
        })
    }, [totalPrice, order, tg.MainButton])

    const handleAddToOrder = (item: MenuItem, optionIndex: number) => {
        // Проверка, является ли order массивом
        if (!Array.isArray(order)) {
            // Если order не является массивом, установите его в пустой массив
            setOrder([]);
            return;
        }
    
        const existingItem = order.find((orderItem: OrderItem) => orderItem.name === item.name && orderItem.optionIndex === optionIndex) as OrderItem | undefined;
        if (existingItem) {
            const updatedOrder = order.map((orderItem: OrderItem) => {
                if (orderItem.name === item.name && orderItem.optionIndex === optionIndex) {
                    return { ...orderItem, quantity: orderItem.quantity + 1};
                }
                return orderItem;
            });
            setOrder(updatedOrder);
        } else {
            setOrder([...order, { ...item, optionIndex, quantity: 1 }]);
        }

        console.log(order)
    };
    

        return (
            <>
            {
                shawarmaMenu.map((item: MenuItem, index: number) => (
                    <div key={index} className={s.mainShawa}> 
                        <div className={s.img}>
                            <img src={item.pic} alt={item.name}/>
                        </div>
                        <h1 className={s.mainShawaName}>Шаурма "{item.name}"</h1>
                        <div className={s.testForIngridients}>
                            <h3 className={s.mainShawaIngridients}>{item.ingridients}</h3>
                        </div>
                        <div className={s.buttonDiv}>
                            {item.options.map((buttons, buttonIndex) => (
                                <button
                                    key={buttonIndex}
                                    className={`${s.buttonShava} ${s[`buttonColor${buttonIndex}`]}`}
                                    onClick={() => handleAddToOrder(item, buttonIndex)}
                                >
                                    <p>{buttons.name}</p>
                                    <h4>{buttons.coast}р</h4>
                                    <h5>{buttons.weight}г</h5>
                                </button>
                            ))}
                        </div>
                    </div>
                ))
            }
            <button onClick={openForm}>form</button>
        </>
    )
}

export default Shawarma