import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  const imgLogo = "public/logo.png"

  return (
    <header>

        <Link to="/"><img className="imgLogo" src={imgLogo} alt="logo" /></Link>

        <nav>
            <ul>
                <li><NavLink to="/">Todos</NavLink></li>
                <li><NavLink to="categoria/1">He-Man</NavLink></li>
                <li><NavLink to="categoria/2">tortugas Ninja</NavLink></li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar