import styles from './Header.module.css';

function Header() {
    return (
        <header>
            <div className={styles.header }>
            <h1>Захаров Пфейфер</h1>
                <nav className={styles.header__nav }>
                    <ul className={styles.header__navlink }>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;