import styles from './Header.module.css';
import logo from '../../assets/Logo.jpg'


 function Header() {
    return (
        <div className={styles.header_container}>
            <div className={styles.header_logo}>
                <div className={styles.header_logo_image}>
                    <img alt='logo' src={logo} />
                </div>
                <div>ounter</div>
            </div>
            <ul className={styles.header_menu}>
                <li><a href='/main'>Главная</a></li>
                <li><a href='/about'>О нас</a></li>
                <li><a href='/contacts'>Контакты</a></li>
            </ul>
        </div>
    )
}

export default Header