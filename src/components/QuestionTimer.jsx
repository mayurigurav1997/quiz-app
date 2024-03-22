import React, { useEffect, useState } from 'react'

const QuestionTimer = ({ timeout, onTimeout }) => {
    const [remainingTime, setRemainingTime] = useState(timeout)

    useEffect(() => {
        const timer = setTimeout(() => {
            onTimeout()
        }, timeout)

        return () => {
            clearTimeout(timer)
        }

    }, [timeout, onTimeout])

    useEffect(() => {
        const timerId = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
        }, 100)

        return () => {
            clearInterval(timerId)
        }
    }, [])

    return (
        <progress id="qusetion-time" value={remainingTime} max={timeout} />
    )
}

export default QuestionTimer
