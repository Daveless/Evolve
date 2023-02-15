

const externalLinkButton = ({link, buttonColor, text}) => {
  return (
    <a target='_blank' href={link} >
        <button className={buttonColor}>
            <p>{text}</p>
        </button>
    </a>
  )
}
export default externalLinkButton