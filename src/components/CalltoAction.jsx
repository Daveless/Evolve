import style from '../styles/calltoAction.module.css';
import ExternalLinkButton from './ExternalLinkButton';
import buttonStyle from '../styles/externalLinkButton.module.css'

const CalltoAction = () => {
  return (
    <div className={style.calltoAction}>
        <ExternalLinkButton link="https://api.whatsapp.com/send?phone=593984463104&text=Hello!" buttonColor={buttonStyle.primaryColor} text='Contactanos'></ExternalLinkButton>
        <ExternalLinkButton link="#" buttonColor={buttonStyle.secondaryColor} text='Cursos'></ExternalLinkButton>
    </div>
  )
}
export default CalltoAction