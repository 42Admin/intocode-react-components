import styles from './Footer.module.css';
import logo from '../../assets/Logo-footer.jpg'

 function Footer() {
    return (
        <div className={styles.footer_container}>
            <ul className={styles.footer_menu}>
                <li><a href='#'>
                    <div className={styles.footer_logo}>
                        <img alt='logo' src={logo} />
                    </div></a></li>
                <li><a href='#'>Партнерам</a></li>
                <li><a href='#'>Разработчикам</a></li>
                <li><a href='#'>Вакансии</a></li>
            </ul>
            <div>ООО “интукод”, 2020г.</div>
        </div>
    )
}

export default Footer