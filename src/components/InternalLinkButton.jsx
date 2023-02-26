import { Link } from "react-router-dom"


const internalLinkButton = ({link, buttonColor, text}) => {
  return (
    <Link  to={link} >
        <button className={buttonColor}>
            <p>{text}</p>
        </button>
    </Link>
  )
}
export default internalLinkButton