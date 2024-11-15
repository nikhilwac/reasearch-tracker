import { useEffect, useState } from 'react'
let prevTime: number = 0
const useTimer = (): {
  timer: string
  toggleTimer: () => void
  isRunning: boolean
} => {
  const [timer, setTime] = useState('00:00:00') // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false) // Timer state: running or stopped

  // Update the timer every second when running
  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        prevTime = prevTime + 1000
        formatTime(prevTime)
        setTime(formatTime(prevTime)) // Increment time by 1 second
      }, 1000)
    } else {
      clearInterval(interval) // Clear interval when stopped
    }
    return (): void => clearInterval(interval) // Cleanup on unmount
  }, [isRunning])

  const formatTime = (ms): string => {
    const seconds = Math.floor((ms / 1000) % 60)
    const minutes = Math.floor((ms / (1000 * 60)) % 60)
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24)

    const formattedHours = hours < 10 ? '0' + hours : hours
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds

    return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds
  }

  // Toggle between Start and Stop
  const toggleTimer = (): void => {
    setIsRunning(!isRunning)
  }

  return { timer, toggleTimer, isRunning }
}

export default useTimer
