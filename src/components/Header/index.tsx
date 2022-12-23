import styles from './Header.module.css'

import rocketLogo from '../../assets/rocket-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocketLogo} alt="Logotipo Todo List" />
            <h1 className={styles.title}>to<span>do</span></h1>
        </header>
    )
}