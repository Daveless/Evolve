import style from '../styles/footer.module.css'
const Footer = () => {
  return (
    <div className={style.footerContainer}>
        <div className={style.footer}>
        <div className={style.footerTitle}>
        <h4>Evolve</h4>
        <p>English for Everyone</p>
        </div>

        <div className={style.contact}>
            <h4>Contacto</h4>
        <p><a href="mailto:evolveacademyonline@gmail.com">evolveacademyonline@gmail.com</a></p>
        <p><a href="https://api.whatsapp.com/send?phone=593984463104&text=Hello!">+593984463104</a></p>
        </div>
        <div className={style.externalLinks}>
        <ul>
            <li>
                <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFC45B" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
                </a>
            </li>

            <li>
                <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFC45B" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
                </a>
            </li>

            <li>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tiktok" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFC45B" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
                </svg>
                </a>
            </li>
        </ul>
        </div>

        
        
        
        <div className={style.credits}>
        <p>Website developed by <a target='_blank' href="https://www.linkedin.com/in/dave-rojas-villacreses/">David Rojas</a></p>
        </div>
        
    </div>
    </div>
  )
}
export default Footer