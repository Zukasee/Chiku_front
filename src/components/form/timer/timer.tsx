import { useState } from 'react';
import s from './timer.module.css'

interface TimerProps {
    handleSelectedTime: (timeIndex: any) => void;
}

const Timer:React.FC<TimerProps> = ({handleSelectedTime}) => {

    const [selectedTime, setSelectedTime] = useState<any>(null)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [time, setTime] = useState(new Date())

    const times = [
        {
            newTime: new Date(time.getTime() + 15 * 60000)
        },
        {
            newTime: new Date(time.getTime() + 20 * 60000)
        },
        {
            newTime: new Date(time.getTime() + 30 * 60000)
        }
    ];

    const formatTime = (date: any) => {
        return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
    };

    const handleClickTime = (index: any) => {
        if (index === selectedTime) {
            setSelectedTime(null)
            handleSelectedTime(null)
        } else {
            setSelectedTime(index)
            handleSelectedTime(formatTime(times[index].newTime))
        }
    }

    return (
        <>
            <h2 className={s.topTimer}>Выберите время выдачи заказа</h2>
            <div className={s.times}>
                {times.map((timeObject, index) => (
                    <div key={index} className={`${s.time} ${index === selectedTime ? s.selectedTime : ''}`} onClick={() => handleClickTime(index)}>
                        {`${formatTime(timeObject.newTime)}`}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Timer;