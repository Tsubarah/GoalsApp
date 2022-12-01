import logo from '../Assets/Images/geshdo-logo.png'
import { useAuthContext } from '../Contexts/AuthContext';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { currentUser,  isManager } = useAuthContext()
    
  return (
    <nav className="navbar">
      <div className='navbar-logo'>
        <a href="/">
          <img src={logo} className="logo" alt="" />
        </a>
      </div>
      <div className="navbar-menu">
        {isManager 
          ? <a href="/manager">Consultants</a> 
          : ""}
            <Link to={`/goals/${currentUser?.id}`}>Goals</Link>
            <a href="/logout">Logout</a>
      </div>
    </nav>
  )
}

export default Navbar