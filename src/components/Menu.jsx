import React from 'react'
import style from '../styles/menu.module.css'

const Menu = () => {
  return (
    <div className={style.navContainer}>
        <nav className={style.navMenu}>
            <div className={style.menuLogo}>
              <p>EVOLVE</p>
            </div>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Cursos</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Menu