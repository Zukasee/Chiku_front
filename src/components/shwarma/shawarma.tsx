import React from "react";
import s from './shawarma.module.css'

const Shawarma = () => {

    const shawarmaMenu = [
        {
            name: 'Чикен',
            pic: '',
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
            pic: '',
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
            pic: '',
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
            pic: '',
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
                        <h1 className={s.mainShawaName}>{item.name}</h1>
                        <h3 className={s.mainShawaIngridients}>{item.ingridients}</h3>
                        {
                            item.options.map((buttons) => (
                                <button>
                                    <h4>{buttons.coast}</h4>
                                    <p>{buttons.name}</p>
                                    <h5>{buttons.weight}</h5>
                                </button>    
                            ))
                        }
                    </div>
                ))
            }
        </>
    )
}

export default Shawarma