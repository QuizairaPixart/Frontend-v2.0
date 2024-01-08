import Btn from "../../../../Components/Generals/Button/Button"
import styles from "./Login.module.css"

export default function Login() {
    return(
        <div className={`${styles.loginContainer}`}>
            <div className={`${styles.logoMdm}`}></div>
            <div className={`${styles.inputsContainer}`}>
                <label className={`${styles.labels}`}>Nombre de usuario:</label>
                <div className={`${styles.inputs}`}>
                    <i className={`fa-solid fa-user ${styles.icons} ${styles.left}`}></i>
                    <input
                        className={`${styles.input}`}
                        type="text"
                    />
                </div>
                <label className={`${styles.labels}`}>Contraseña:</label>
                <div className={`${styles.inputs}`}>
                    <i className={`fa-solid fa-key ${styles.icons} ${styles.left}`}></i>
                    <input 
                        type="password"
                        className={`${styles.input}`}
                    />
                    <i className={`fa-solid fa-eye ${styles.icons} ${styles.right}`}></i>
                    <i className={`fa-solid fa-eye-slash ${styles.icons} ${styles.right}`}></i>
                </div>
            </div>
            <Btn
                label="Ingresar"
                className={`${styles.loginBtn}`}
            />
        </div>
    )
}