import styles from "./Footer.module.css"

export default function FooterIndex () {
    return (
        <footer className={`${styles.footerIndex} ${styles.flex}`}>
            <div className={`${styles.iconsContainer}`}>
                <i className={`fa-brands fa-php ${styles.icon}`}></i>
                <i className={`fa-brands fa-react ${styles.icon}`}></i>
                <i className={`fa-brands fa-js ${styles.icon}`}></i>
                <i className={`fa-brands fa-java ${styles.icon}`}></i>
                <i className={`fa-brands fa-html5 ${styles.icon}`}></i>
                <i className={`fa-brands fa-css3-alt ${styles.icon}`}></i>
                <i className={`fa-brands fa-android ${styles.icon}`}></i>
            </div>
            <p className={`${styles.paragraph}`}>Powered by Pixart | © Copyright All Rights Reserved.</p>
        </footer>
    )
}