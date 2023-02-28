import { useState } from 'react'
import CourseInfo from '../components/CourseInfo'
import Footer from '../components/Footer'
import Menu from "../components/Menu"
import style from '../styles/menu.module.css'
import coursePicture from '../img/course5.jpg'

const InglesParaNegocios = () => {

    const [menu, setMenu] = useState(style.menuOff)

  const GrupalCourseInfo = {
      courseName : 'Ingles para Negocios',
      courseData : {
          Modalidad: 'Aprende el vocabulario y expresiones necesarias para hablar inglés fluido en un contexto laboral. Nuestras clases son 100% Online', 
          Edades: 'Tenemos cursos para todas las edades', 
          Horarios: 'No te preocupes por el tiempo! Tenemos varios horarios disponibles desde las 7AM hasta las 10PM',
          Material: 'Todos los recursos, ejercicios, videos y textos ya vienen incluidos!', 
          Niveles: 'Puedes tomar este curso aunque no tengas conocimiento previo del ingles o puedes iniciar en un nivel intermedio o avanzado', 
          Profesores: 'Nuestros profesores son nativos o cuentan concertificación de Cambridge!'}
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
export default InglesParaNegocios