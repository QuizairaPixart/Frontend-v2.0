import styles from "./Header.module.css";

export default function HeaderIndex () {
    return (
        <header className={`${styles.headerIndex} ${styles.flex}`}>
          <div className={`${styles.logoMdm}`}></div>
        </header>
    )
}