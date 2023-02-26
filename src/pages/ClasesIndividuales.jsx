import { useState } from 'react'
import CourseInfo from '../components/CourseInfo'
import Footer from '../components/Footer'
import Menu from "../components/Menu"
import style from '../styles/menu.module.css'
import coursePicture from '../img/course2.jpg'


const ClasesIndividuales = () => {

  const [menu, setMenu] = useState(style.menuOff)
  const GrupalCourseInfo = {
      courseName : 'Clases Individuales',
      courseData : {
          Modalidad: 'Clases individuales. Ideal para personas que no tienen un horario fijo por su trabajo.', 
          Edades: 'Tenemos cursos para todas las edades', 
          Horarios: 'No te preocupes por el tiempo! Puedes armar tu propio horario de acuerdo a tu tiempo disponible',
          Material: 'Todos los recursos, ejercicios, videos y textos ya vienen incluidos!', 
          Niveles: 'A1, A2, B1, B2; Inglés para Negocios; Preparación para entrevistas', 
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
export default ClasesIndividuales
