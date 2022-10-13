import logo from '../Assets/Images/geshdo-logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='navbar-logo'>
                <img src={logo} className="logo" alt="" />
            </div>
            <div className="navbar-menu">
                <a href="#">Konsulter</a>
                <a href="#">Logout</a>
            </div>
        </nav>
    )
}

export default Navbar