import SelectUser from "../SelectUser/SelectUser";
import styles from "./Header.module.css"

const Header = ({ chengedUser }) => {
    const chengeUser = (e) => {
        chengedUser(e.target.value)
        console.log(e.target.value)
    }
    return (
        <>
            <img className={styles.logo} src="/logo.svg" alt="" />
            <SelectUser chengedUser={chengeUser} />
        </>
    );
};

export default Header;