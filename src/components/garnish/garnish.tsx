import React from "react";
import s from './garnish.module.css'
import pilafPic from '../../fonts/plov2.png'

const Garnish = () => {

    const pilafs = [
        {
            name: 'Плов с курицей',
            pic: pilafPic,
            description: 'Курица, лук, перец, кумин, рис, кориандер',
            weight: 500,
            coast: 10,
        },
        {
            name: 'Плов с говядиной',
            pic: pilafPic,
            description: 'Говядина, лук, перец, кумин, рис, чеснок',
            weight: 500,
            coast: 12.5,
        },
        {
            name: 'Комплекс с курицей',
            pic: pilafPic,
            description: 'Курица, картофель фри, свежие огурцы и помидоры, соус',
            weight: 450,
            coast: 12.5,
        },
    ]

    return (
        <>
            {
                pilafs.map((item) => (
                    <div className={s.mainPilaf}>
                        <div className={s.img}>
                            <img src={item.pic} alt={item.name} />
                        </div>
                        <h2 className={s.mainName}>{item.name}</h2>
                        <div className={s.ingridients}>
                            <h3>{item.description}</h3>
                        </div>
                        <button className={s.button}>
                            <h4>{item.coast}р</h4>
                            <h5>{item.weight}г</h5>
                        </button>
                    </div>
                ))
            }
        </>
    )
}

export default Garnish