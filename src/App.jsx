import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import style from './styles/menu.module.css'
import Section1 from './components/Section1'
import Testimonies from './components/Testimonies'
import Section2 from './components/Section2'
import Section4 from './components/Section4'
import Footer from './components/Footer'




function App() {
const [menu, setMenu] = useState(style.menuOff)




const menuHandler = () => menu===style.menuOn? setMenu(style.menuOff) : setMenu(style.menuOn)

  return (
    <div className="App">
      <Menu menu={menu} menuHandler={menuHandler}></Menu>
      <Section1></Section1>
      <Section2></Section2>
      <Testimonies></Testimonies>
      <Section4></Section4>
      <Footer></Footer>
    </div>
  )
}

export default App
