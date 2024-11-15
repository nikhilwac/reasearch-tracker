import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
import useTimer from './TimerLogic'

const Timerdisplay = (): JSX.Element => {
  const { timer, toggleTimer, isRunning } = useTimer()
  return (
    <div className="timer-display">
      <div className="timer-content">
        <strong>{timer}</strong>
        {isRunning ? (
          <FaPauseCircle size={28} onClick={toggleTimer} />
        ) : (
          <FaPlayCircle size={28} onClick={toggleTimer} />
        )}
      </div>
    </div>
  )
}

export default Timerdisplay
