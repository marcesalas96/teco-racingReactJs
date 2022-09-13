import dayjs from 'dayjs'

export const getRemainingTimeUntilMsTimestamp = (timestamp) => {
    const timestampDayjs = dayjs(timestamp)
    const nowDayjs = dayjs()
    if (timestampDayjs.isBefore(nowDayjs)) {
        return {
            sec: "00",
            min: "00",
            hr: "00",
            days: "00",
        }
    }
    console.log(getRemainingSeconds(nowDayjs, timestampDayjs))
    return {
        sec: getRemainingSeconds(nowDayjs, timestampDayjs),
        min: getRemainingMinutes(nowDayjs, timestampDayjs),
        hr: getRemainingHours(nowDayjs, timestampDayjs),
        days: getRemainingDays(nowDayjs, timestampDayjs)
    }
}

const getRemainingSeconds = (nowDayjs, timestampDayjs) => {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60
    return padWithZeros(seconds, 2)
}
const getRemainingMinutes = (nowDayjs, timestampDayjs) => {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60
    return padWithZeros(minutes, 2)
}
const getRemainingHours = (nowDayjs, timestampDayjs) => {
    const hour = timestampDayjs.diff(nowDayjs, 'hours') % 24
    return padWithZeros(hour, 2)
}
const getRemainingDays = (nowDayjs, timestampDayjs) => {
    const days = timestampDayjs.diff(nowDayjs, 'days')
    return days.toString()
}
const padWithZeros = (number, minLength) => {
    const numberString = number.toString()
    if (numberString.length >= minLength) return numberString
    return "0".repeat(minLength - numberString.length) + numberString
}