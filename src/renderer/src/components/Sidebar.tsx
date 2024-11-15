import {
  FaHome,
  FaClock,
  FaChartBar,
  FaFolder,
  FaUser,
  FaUsers,
  FaTags,
  FaCog
} from 'react-icons/fa'
import Timerdisplay from './Timer/Timerdisplay'

const Sidebar = (): JSX.Element => {
  return (
    <div className="sidebar">
      <div>
        <div className="timer">
          <Timerdisplay />
        </div>
        <div className="nav">
          <a href="#">
            <FaHome className="icon" /> Dashboard
          </a>
          <a href="#">
            <FaClock className="icon" /> Time
          </a>
          <a href="#">
            <FaChartBar className="icon" /> Reporting
          </a>
        </div>
        <div className="nav">
          <a href="#">
            <FaFolder className="icon" /> Projects
          </a>
          <a href="#">
            <FaUser className="icon" /> Clients
          </a>
          <a href="#">
            <FaUsers className="icon" /> Team
          </a>
          <a href="#">
            <FaTags className="icon" /> Tags
          </a>
        </div>
      </div>
      <div className="footer">
        <a href="#">
          <FaCog className="icon" /> Settings
        </a>
      </div>
    </div>
  )
}

export default Sidebar
