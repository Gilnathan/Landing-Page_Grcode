import styles from './Escolha.module.css';
import Image from "next/image";
import logo from "/public/logo.png";


export default function Escolha() {
  return (
    <div className={styles.container}>
      <div className={styles.Escolha} >
        <Image src={logo} alt="Logo da empresa" className={styles.logo} priority />
      </div>
    </div>
  );
}