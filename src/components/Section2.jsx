import ScrollSnapSlider from "./ScrollSnapSlider"
import imgCourse1 from '../img/course1.jpg'
import imgCourse2 from '../img/course2.jpg'
import imgCourse3 from '../img/course3.jpg'
import imgCourse4 from '../img/course4.jpg'
import imgCourse5 from '../img/course5.jpg'
import style from '../styles/section2.module.css'
import { useEffect, useRef } from "react"

const coursesList = [
    {name: 'Clases grupales',
    imgRoute: imgCourse1,
    ventajas: ['Grupos reducidos', 'Material incluido', 'Descuentos todo el año!'],
    route: '/clase-grupal'},

    {name: 'Clases Individuales',
    imgRoute: imgCourse2,      
    ventajas: ['Clases 1:1', 'Horarios a convenir', 'avanzas a tu ritmo'],
    route: '/clase-individual'},

    {name: 'Preparacion Cambridge',
    imgRoute: imgCourse3,
    ventajas: ['Obtén tu certificación de Cambridge', 'Simuladores cada mes'],
    route: '/preparacion-cambridge'},

    {name: 'Nivelaciones',
    imgRoute: imgCourse4,
    ventajas: ['Mejora tus calificaciones', 'Despeja tus dudas sobre cualquier tema', 'Obtén ayuda en tus tareas'],
    route: '/nivelaciones'},

    {name: 'Inglés para negocios',
    imgRoute: imgCourse5,
    ventajas: ['Aprende el vocabulario y frases más útiles en el mundo de los negocios'],
    route: '/ingles-para-negocios'}
];




const Section2 = () => {

 
  return (
    <div className={style.section2Container}>
      <h2>¡Tenemos el curso perfecto para ti!</h2>
      <ScrollSnapSlider hasPictures={true} coursesList={coursesList} informationButton={true} ></ScrollSnapSlider>
    </div>
  )
}
export default Section2