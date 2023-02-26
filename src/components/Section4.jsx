import ScrollSnapSlider from "./ScrollSnapSlider"
import style from '../styles/secondSlider.module.css'

const Section4 = () => {

    const stepsForStarting = [
        {name: '1: Elige el curso que más te guste',
        ventajas: ['Dale clic al botón "Más información" para ponerte en contacto con un asesor y comenzar el proceso']
      },

        {name: '2: Escoge el horario perfecto para ti',
        ventajas: ['Tenemos horarios desde las 7:00AM hasta las 10PM. ¡Puedes estudiar cuando quieras!']
      },

        {name: '3: Haz el primer pago',
        ventajas: ['Después de hacer el primer pago te enviamos el material y podras comenzar la ruta para dominar el Inglés']
      }
        ]
    
  return (
    <div className={style.secondSlider}>
        <ScrollSnapSlider hasPictures={false} coursesList={stepsForStarting} informationButton={false}></ScrollSnapSlider>
    </div>
  )
}
export default Section4