import { useState } from "react"
import img1 from '../img/1.svg'
import img2 from '../img/2.svg'
import img3 from '../img/3.svg'
import style from '../styles/slider.module.css'
import CalltoAction from "./CalltoAction"
const Slider = () => {
    const [imgIndex, setimgIndex] = useState(0)

    const sliderContent = [{
        imgRounte: img1,
        text: '¿Tus horarios son complicados? Tenemos Cursos con horarios flexibles!'
    }, {
        imgRounte: img2,
        text: 'Acabamos de abrir nuestro curso de inglés para negocios!'
    }, {
        imgRounte: img3,
        text: 'Aprende inglés desde 0'
    }]
    const nextSlide = () => imgIndex > sliderContent.length-2 ? setimgIndex(0) : setimgIndex(imgIndex+1)
    const previousSlide = () => imgIndex === 0 ? setimgIndex(sliderContent.length-1) : setimgIndex(imgIndex-1)

  return (
    <div className={style.sliderContainer}>
        <div className={style.illustContainer}>
          <img src={sliderContent[imgIndex].imgRounte} alt="" />
        </div>
        
        <button className={style.nextButton} onClick={nextSlide}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="9 6 15 12 9 18" />
</svg></button>
       
        
          <button className={style.previousButton} onClick={previousSlide}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <polyline points="15 6 9 12 15 18" />
            </svg>
          </button>
        
        <div className={style.magnetContainer}>
        <div className={style.sliderPhrase}>
        <p>{sliderContent[imgIndex].text}</p>
        </div>
        <CalltoAction></CalltoAction>
        </div>
    </div>
  )
}
export default Slider