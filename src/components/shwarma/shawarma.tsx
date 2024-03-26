import React from "react";
import s from './shawarma.module.css'
import shawermaImg from '../../fonts/shawarma.png'

const Shawarma = () => {

    const shawarmaMenu = [
        {
            name: 'Чикен',
            pic: shawermaImg,
            ingridients: 'Лаваш, курица, капуста, помидоры, соленый огурец, соус',
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
            name: 'Ливанская',
            pic: shawermaImg,
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
            pic: shawermaImg,
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
            pic: shawermaImg,
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
    ]

        return (
        <>
            {
                shawarmaMenu.map((item) => (
                    <div className={s.mainShawa}> 
                        <div className={s.img}>
                            <img src={item.pic} alt={item.name}/>
                        </div>
                        <h1 className={s.mainShawaName}>Шаурма "{item.name}"</h1>
                        <h3 className={s.mainShawaIngridients}>{item.ingridients}</h3>
                        <div className={s.buttonDiv}>
                            {
                                item.options.map((buttons, buttonIndex) => (
                                    <button className={`${s.buttonShava} ${s[`buttonColor${buttonIndex}`]}`}>
                                        <p>{buttons.name}</p>
                                        <h4>{buttons.coast}р</h4>
                                        <h5>{buttons.weight}г</h5>
                                    </button>    
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Shawarma