import React from "react";
import s from './others.module.css'
import hotdog1 from '../../../fonts/hotdog1.png'
import hotdog2 from '../../../fonts/hotdog2.png'
import kvas from '../../../fonts/kvas.png'
import sprite from '../../../fonts/sprite.png'
import fanta from '../../../fonts/fanta.jpg'
import cola from '../../../fonts/cola.jpg'

const Others = () => {

    const others = [
        {
            name: 'Хотдог с курицей',
            pic: hotdog1,    
            coast: 5.50,
            weight: '240г',
        },
        {
            name: 'Хотдог с говядиной',
            pic: hotdog2,
            coast: 5.50,
            weight: '240г',
        },
        {
            name: 'Квас',
            pic: kvas,
            coast: 2,
            weight: '0.5л',
        },
        {
            name: 'Кола',
            pic: cola,
            coast: 2,
            weight: '0.5л',
        },
        {
            name: 'Фанта',
            pic: fanta,
            coast: 2,
            weight: '0.5л',
        },
        {
            name: 'Спрайт',
            pic: sprite,
            coast: 2,
            weight: '0.5л',
        },
    ]

    return (
        <div className={s.main}>
            {
                others.map((item) => (
                    <div className={s.mainItem}>
                        <h2>{item.name}</h2>
                        <img src={item.pic} alt={item.name} />
                        <button className={s.button}>
                            <h3>{item.coast}</h3>
                            <h4>{item.weight}</h4>
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default Others