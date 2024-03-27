import React from "react";
import s from './garnish.module.css'
import pilafPic from '../../fonts/plov2.png'
import village from '../../fonts/village2.png'
import onion from '../../fonts/onion.png'
import nuggets from '../../fonts/nuggets.png'

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

    const garnish = [
        {
            name: 'Картофель',
            pic: village,
            description: 'Свежий кортофель на ваш выбор',
            options: [
                {
                   name: 'Фри',
                   coast: 3.50,
                   weight: 150 
                },
                {
                   name: 'По-деревенски',
                   coast: 5,
                   weight: 120 
                }
            ] 
        },
        {
            name: 'Луковые кольца',
            pic: onion,
            description: 'Кольца лука с панировкой, обжаренные во фритюре',
            options: [
                {
                   name: 'стандарт',
                   coast: 3.50,
                   weight: 120 
                }
            ] 
        },
        {
            name: 'Наггетсы',
            pic: nuggets,
            description: 'Кусочки курицы, обжаренные во фритюре',
            options: [
                {
                   name: 'стандарт',
                   coast: 4.50,
                   weight: 100
                }
            ] 
        }
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
            {
                garnish.map((item) => (
                    <div className={s.mainGarnish}>
                        <div className={s.img}>
                            <img src={item.pic} alt={item.name} />
                        </div>
                        <h2 className={s.mainName}>{item.name}</h2>
                        <div className={s.ingridients}>
                            <h3>{item.description}</h3>
                        </div>
                        <div className={s.buttonGarnishDiv}>
                            {
                                item.options.map((button, buttonIndex) => (
                                    <button className={`${s.buttonGarnish} ${s[`buttonColor${buttonIndex}`]}`}>
                                        <p>{button.name}</p>
                                        <h4>{button.coast}р</h4>
                                        <h5>{button.weight}г</h5>
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

export default Garnish