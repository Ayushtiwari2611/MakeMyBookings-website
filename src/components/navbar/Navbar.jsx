import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">MakeMyBookings</span>
        <div className="navItems">

          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>

          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar