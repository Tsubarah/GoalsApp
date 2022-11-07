import ConsultantProfile from './ConsultantProfile'
import { Link } from 'react-router-dom'

type sidebarProps ={
  show: boolean | null,
  setShow: (show: boolean) => void,
}

const RightSidebar = ({show, setShow}: sidebarProps) => {
  console.log('show', show)
  
  return (
    <div className='rightSidebar-wrapper'>
      <div className="rightSidebar-placeholder"></div>
        
      <div className={`${show === true
                        ? "slide-in-right" 
                        : show === false ? "slide-out-right" : ""} rightSidebar`}
      >
                        
        <ConsultantProfile />

        <div className='consultant-buttons-container'>
          <Link to="/goals">
            <button className='button goals-btn'>Goals</button>
          </Link>

          <Link to="/history">
            <button className='button history-btn'>History</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default RightSidebar