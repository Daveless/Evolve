import { useState } from 'react'
import CourseInfo from '../components/CourseInfo'
import Footer from '../components/Footer'
import Menu from "../components/Menu"
import style from '../styles/menu.module.css'
import coursePicture from '../img/course3.jpg'

const PreparacionCambridge = () => {

    const [menu, setMenu] = useState(style.menuOff)

  const GrupalCourseInfo = {
      courseName : 'Preparación para Exámenes Cambridge',
      courseData : {
          Modalidad: 'Curso preparatorio para tomar examenes de certifición de Cambridge', 
          Edades: 'Tenemos cursos para todas las edades', 
          Horarios: 'No te preocupes por el tiempo! Tenemos varios horarios disponibles desde las 7AM hasta las 10PM',
          Material: 'Todos los recursos, ejercicios, videos y textos ya vienen incluidos!', 
          Niveles: 'Preparación para rendir examenes de Cambridge PET (B1), FCE (B2), CAE (C1)', 
          Profesores: 'Nuestros profesores son nativos o cuentan concertificación de Cambridge!', 
          Precio: 'Todo por tan solo $100 mensuales'}
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
export default PreparacionCambridge