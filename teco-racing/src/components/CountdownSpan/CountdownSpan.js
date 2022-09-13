import './_countdownSpan.scss'
import { useEffect, useState } from 'react'
import { MdOutlineTimer } from 'react-icons/md'
import { getRemainingTimeUntilMsTimestamp } from './Utils/CountdownTimerUtil'
const defaultRemaingTime = {
    sec : "00",
    min : "00",
    hr : "00",
    days : "00"
}

export const CountdownSpan = ({fecha}) => {
    const [ remainingTime, setRemainingTime] = useState(defaultRemaingTime)
    useEffect(()=>{
        const intervalId = setInterval(()=> {
            updateRemaingingTime(fecha)
        }, 1)
        return () => clearInterval(intervalId)
    }, [fecha])
    const updateRemaingingTime = (countdown) => {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
    }

    return(
        <div className='spanCountdown'>
            <span><MdOutlineTimer/></span>
            <span>{remainingTime.days}</span>
            <span>D</span>
            <span>{remainingTime.hr}</span>
            <span>H</span>
            <span>{remainingTime.min}</span>
            <span>M</span>
            <span>{remainingTime.sec}</span>
            <span>S</span>
        </div>
    )
}