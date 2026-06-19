import Link from "next/link";
import styles from "./Header.module.css";


const Header = () =>{

    return(
        <header className={styles.header}>
            <div>
            <h1 className={styles.header_logo}>
                <Link  href="/">Bora Viajar!</Link>
            </h1>
            

            <nav className={styles.header_nav}>
            <Link href="/">Início</Link>    
            <Link href="/destinos/asia">Ásia</Link>
            <Link href="/destinos/europa">Europa</Link>
            <Link href="/destinos/america">América</Link>
            </nav>

            </div>
        </header>
    );
}

export default Header;