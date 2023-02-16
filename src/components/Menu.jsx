import React from 'react'
import style from '../styles/menu.module.css'

const Menu = ({menu, menuHandler}) => {
  return (
    <div className={style.navContainer}>
        <nav className={style.navMenu}>
            <div className={style.menuLogo}>
              <h1>Evolve English Academy</h1>
            </div>

            <button onClick={menuHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" viewBox="0 0 24 24" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="4" y1="18" x2="20" y2="18" />
</svg>
            </button>

        <div className={menu}>
        <ul>
                <li><a href="#section1">Inicio</a></li>
                <li><a href="#section2">Cursos</a></li>
            
        </ul>
        </div>

            
        </nav>
    </div>
  )
}

export default Menu