

const externalLinkButton = ({link, buttonColor, text, opensInAnotherTab}) => {
  return (
    <a target={opensInAnotherTab} href={link} >
        <button className={buttonColor}>
            <p>{text}</p>
        </button>
    </a>
  )
}
export default externalLinkButton