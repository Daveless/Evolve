import { useState } from 'react'
import CourseInfo from '../components/CourseInfo'
import Footer from '../components/Footer'
import Menu from "../components/Menu"
import style from '../styles/menu.module.css'
import coursePicture from '../img/course4.jpg'

const Nivelaciones = () => {

    const [menu, setMenu] = useState(style.menuOff)

  const GrupalCourseInfo = {
      courseName : 'Nivelaciones',
      courseData : {
          Modalidad: 'Ayuda academica cuando la necesites. Puedes solicitar explicacion de cualquier tema, ayuda con tareas o plataformas de ingles.', 
          Edades: 'Tenemos cursos para todas las edades', 
          Horarios: 'No te preocupes por el tiempo! Tenemos varios profesores disponibles desde las 7AM hasta las 10PM',
          Material: 'Recursos de refuerzo incluidos', 
          Niveles: 'Ayuda para cualquier nivel de inglés. Desde básico hasta avanzado', 
          Profesores: 'Nuestros profesores son nativos o cuentan concertificación de Cambridge!', 
          Precio: '$6 la hora'}
  }

  const menuHandler = () => menu===style.menuOn? setMenu(style.menuOff) : setMenu(style.menuOn)

  return (
    <div>
        <Menu menu={menu} menuHandler={menuHandler}></Menu>
        <CourseInfo courseName={[GrupalCourseInfo.courseName]} courseData={GrupalCourseInfo.courseData} coursePicture={coursePicture}/>
        <Footer></Footer>
    </div>
  )
}
export default Nivelaciones