import styles from "./Topo.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";

export default function Topo() {
    return (
        <header className={styles.topo}>
            <div className={styles.logoContainer}>
                <Image src={logo} alt="Logo da empresa" className={styles.logo} priority />
            </div>
            <nav className={styles.nav}>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/" className={styles.link}>Sobre</Link>
                <Link href="/" className={styles.link}>Serviços</Link>
                <Link href="/" className={styles.link}>Contato</Link>
                <button className={styles.button} role="button">Receba análise gratuita</button>
            </nav>
        </header>
    );
}
