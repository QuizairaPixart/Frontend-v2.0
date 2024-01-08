import FooterIndex from "../Components/Footer/Footer";
import HeaderIndex from "../Components/Header/Header";
import Login from "../Components/Login/Login";
import styles from "../Css/Index.module.Css"

const Index = () => {
  return (
    <div className={`${styles.indexContainer}`}>
        <HeaderIndex />
        <h1 className={`${styles.title}`}>Mobile Device Management</h1>
        <p className={`${styles.paragraph}`}>Administra dispositivos móviles sin importar el operador de telefonía.</p>
        <Login />
        <FooterIndex />
    </div>
  )
}

export default Index;