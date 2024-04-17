import { useState, useEffect } from 'react';
import s from './timer.module.css';

interface TimerProps {
    handleSelectedTime: (timeIndex: any) => void;
}

const Timer: React.FC<TimerProps> = ({ handleSelectedTime }) => {
    const [selectedTime, setSelectedTime] = useState<any>(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000); // Обновление каждую минуту

        return () => clearInterval(interval);
    }, []);

    const times = [
        {
            newTime: new Date(currentTime.getTime() + 15 * 60000)
        },
        {
            newTime: new Date(currentTime.getTime() + 20 * 60000)
        },
        {
            newTime: new Date(currentTime.getTime() + 30 * 60000)
        }
    ];

    const formatTime = (date: any) => {
        return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
    };

    const handleClickTime = (index: any) => {
        if (index === selectedTime) {
            setSelectedTime(null);
            handleSelectedTime(null);
        } else {
            setSelectedTime(index);
            handleSelectedTime(formatTime(times[index].newTime));

            setTimeout(() => {
                setSelectedTime(null);
                handleSelectedTime(null);
            }, 60000)
        }
    };

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
    );
};

export default Timer;
