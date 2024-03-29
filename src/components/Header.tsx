import styles from './Headers.module.css'

import igniteLogo from '../assets/Ignite-logo.svg'

export function Headers(){


    return (
    <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo do ignite" />
    </header>
    )
} 
