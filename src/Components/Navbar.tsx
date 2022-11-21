import logo from '../Assets/Images/geshdo-logo.png'
import { useAuthContext } from '../Contexts/AuthContext';

const Navbar = () => {
    const { currentUser } = useAuthContext()
    
    return (
        <nav className="navbar">
            <div className='navbar-logo'>
              <a href="/">
                <img src={logo} className="logo" alt="" />
              </a>
            </div>
            <div className="navbar-menu">
                <a href="/manager">Consultants</a>
                <a href={`/goals/${currentUser?.id}`}>Goals</a>
                <a href="/logout">Logout</a>
            </div>
        </nav>
    )
}

export default Navbar