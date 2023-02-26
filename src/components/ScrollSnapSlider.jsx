import style from '../styles/courses.module.css'

import InternalLinkButton from './InternalLinkButton'
import buttonStyle from '../styles/externalLinkButton.module.css'

const ScrollSnapSlider = ({hasPictures, coursesList, informationButton}) => {



    

  return (
    <div className={style.section2Container}> 
        {
          coursesList.map(course => (
            <div className={style.courseCards} key={course.route}>
              {hasPictures ? <img src={course.imgRoute} alt="" />:null}
              <div>
                <h4>{course.name}</h4>
                <hr/>
                <ul>
                  {course.ventajas.map(advantage => (<li>{advantage}</li>))}
                </ul>
                {informationButton ? <InternalLinkButton link={course.route} buttonColor={buttonStyle.secondaryColor} text='Mas información'></InternalLinkButton>:null}
              </div>
            </div>
          ))
        }
    </div>
  )
}
export default ScrollSnapSlider