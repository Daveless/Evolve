import React from 'react'
import style from '../styles/menu.module.css'
import logoPNG from '../img/favIcon/logoNavBar.png'
import { Link } from 'react-router-dom'

const Menu = ({menu, menuHandler, section2ref}) => {
  return (
    <div className={style.navContainer}>
        <nav className={style.navMenu}>
            <div className={style.menuLogo}>
              <img src={logoPNG} alt="" />
              <h1>Evolve English Academy</h1>

            </div>

            <button onClick={menuHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="4" y1="18" x2="20" y2="18" />
</svg>
            </button>

        <div className={menu}>
        <ul>
                <li><Link to='/'>Inicio</Link></li>                
                
            
        </ul>
        </div>

            
        </nav>
    </div>
  )
}

export default Menu