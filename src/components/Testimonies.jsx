import ico1 from '../img/benefits/teachers.svg'
import ico2 from '../img/benefits/methodology.svg'
import ico3 from '../img/benefits/courses.svg'
import ico4 from '../img/benefits/discounts.svg'
import style from '../styles/testimonies.module.css'

const testimonies = () => {

    const reasons = [
        {
        icon: ico1,
        title: 'Los mejores profesionales',
        description: 'Todos nuestros profesores tienen amplia experiencia en la enseñanza del idioma inglés y trabajan cada día para mejorar nuestra metodología.'
    },
        {
        icon: ico2,
        title: 'Metodología práctica',
        description: 'En cada unidad vas a ver una forma de aplicar lo aprendido en un contexto diario.'
    },
        {
        icon: ico3,
        title: 'Variedad de cursos',
        description: 'Tenemos cursos para profesionales que tienen poco tiempo a la semana, y también tenemos cursos para personas que quieren aprender inglés a un ritmo más lento. Existe un curso para cada tipo de persona'
    },
        {
        icon: ico4,
        title: 'Descuentos todo el año',
        description: 'Todos los meses tenemos una promoción diferente. Consultanos!'
    },
]

  return (
    <div className={style.section3}>
        <h3>¿Por qué escoger Evolve English Academy?</h3>
    {reasons.map(reason => (
        <div key={reason.title} className={style.reasonCard}>
            <hr />
            <img src={reason.icon} alt="" />
            <h4>{reason.title}</h4>
            <p>{reason.description}</p>
        </div>
    ))}
    </div>
    
  )
}
export default testimonies