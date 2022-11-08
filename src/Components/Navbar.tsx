import logo from '../Assets/Images/geshdo-logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='navbar-logo'>
        <a href="/">
          <img src={logo} className="logo" alt="" />
        </a>
      </div>
      <div className="navbar-menu">
        <a href="/">Consultants</a>
        <a href="/goals">Goals</a>
        <a href="/">Logout</a>
      </div>
    </nav>
  )
}

export default Navbar