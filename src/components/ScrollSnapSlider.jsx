import style from '../styles/courses.module.css'

import ExternalLinkButton from './ExternalLinkButton'
import buttonStyle from '../styles/externalLinkButton.module.css'

const ScrollSnapSlider = ({hasPictures, coursesList, informationButton}) => {



    

  return (
    <div className={style.section2Container}> 
        {
          coursesList.map(course => (
            <div key={course.imgRoute} className={style.courseCards}>
              {hasPictures ? <img src={course.imgRoute} alt="" />:null}
              <div>
                <h4>{course.name}</h4>
                <hr/>
                <ul>
                  {course.ventajas.map(advantage => (<li>{advantage}</li>))}
                </ul>
                {informationButton ? <ExternalLinkButton link={`https://api.whatsapp.com/send?phone=593984463104&text=Hello!%20Quiero%20informaci%C3%B3n%20sobre%20${course.name}`} buttonColor={buttonStyle.primaryColor} text='Mas información'></ExternalLinkButton>:null}
              </div>
            </div>
          ))
        }
    </div>
  )
}
export default ScrollSnapSlider