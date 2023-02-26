import { useState } from 'react'
import CourseInfo from '../components/CourseInfo'
import Footer from '../components/Footer'
import Menu from "../components/Menu"
import style from '../styles/menu.module.css'
import coursePicture from '../img/course1.jpg'

const ClasesGrupales = () => {

    const [menu, setMenu] = useState(style.menuOff)
    const GrupalCourseInfo = {
        courseName : 'Clases Grupales',
        courseData : {
            Modalidad: 'Estudia desde la comodidad de tu casa. Nuestras clases son 100% Online', 
            Edades: 'Tenemos cursos para todas las edades', 
            Horarios: 'No te preocupes por el tiempo! Tenemos varios horarios disponibles desde las 7AM hasta las 10PM',
            Material: 'Todos los recursos, ejercicios, videos y textos ya vienen incluidos!', 
            Niveles: 'Niveles disponibles: A1, A2, B1, B2', 
            Profesores: 'Nuestros profesores son nativos o cuentan concertificación de Cambridge!', 
            Precio: 'Todo por tan solo $45 mensuales'}
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
export default ClasesGrupales