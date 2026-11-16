import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">FOOD LAB</span>
      <div className="nav-links">
        <NavLink to="/" end>Главная</NavLink>
        <NavLink to="/catalog">Каталог</NavLink>
        <NavLink to="/planner">Рацион</NavLink>
      </div>
    </nav>
  )
}