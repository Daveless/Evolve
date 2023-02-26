import ExternalLinkButton from '../components/ExternalLinkButton'
import buttonStyle from '../styles/externalLinkButton.module.css'
import style from '../styles/courseinfo.module.css'
const CourseInfo = ({courseName, courseData, coursePicture}) => {

    let keys = Object.keys(courseData)
    let values = Object.values(courseData)
    

    

  return (
    <div className={style.courseInfoContainer}>
        <h2>{courseName}</h2>
        <div className={style.pictureAndTextContainer}>
            <img src={coursePicture} alt="" />
            <div>
                <ul>
                   {keys.map((x, i) => (
                    <li><hr/><p>{x}</p><br/> {values[i]} </li>
                   ))}
                                     
                </ul>
            </div>
        <ExternalLinkButton link={`https://api.whatsapp.com/send?phone=593984463104&text=${'Necesito%20informacion%20sobre'+courseName}`} buttonColor={buttonStyle.primaryColor} text='Contactanos' opensInAnotherTab='_blank'/>
        </div>
    </div>
  )
}
export default CourseInfo