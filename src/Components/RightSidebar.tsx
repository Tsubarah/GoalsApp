import ConsultantProfile from './ConsultantProfile'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../Contexts/AuthContext'

type sidebarProps ={
  show: boolean | null,
}

const RightSidebar = ({show}: sidebarProps) => {
  const { targetedUser } = useAuthContext()
  
  return (
    <div className='rightSidebar-wrapper'>

      <div className={`${show === null
                          ? "hidden" 
                            : show 
                            ? "slide-in-right rightSidebar" 
                          : "slide-out-right rightSidebar"
                      }`}
      >
                        
        <ConsultantProfile />

        <div className='consultant-buttons-container'>
          <Link to={`/goals/${targetedUser?.id}`}>
            <button className='button goals-btn'>Goals</button>
          </Link>

          <Link to={`/goals/history/${targetedUser?.id}`}>
            <button className='button history-btn'>History</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default RightSidebar