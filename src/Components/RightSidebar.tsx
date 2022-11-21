import ConsultantProfile from './ConsultantProfile'
import { Link } from 'react-router-dom'

type sidebarProps ={
  show: boolean | null,
}

const RightSidebar = ({show}: sidebarProps) => {
    let targets: any = window.localStorage.getItem('target')
    let target = JSON.parse(targets)

  return (
    <div className='rightSidebar-wrapper'>

      <div className={`${show === null ? "hidden" : show 
        ? "slide-in-right rightSidebar" 
        : "slide-out-right rightSidebar"
        }`}
      >
                        
        <ConsultantProfile />

        <div className='consultant-buttons-container'>
          <Link to={`/goals/${target?.id}`}>
            <button className='button goals-btn'>Goals</button>
          </Link>

          <Link to={`/goals/history/${target?.id}`}>
            <button className='button history-btn'>History</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default RightSidebar