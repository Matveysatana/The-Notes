import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import styles from './SelectUser.module.css'

const SelectUser = () => {
    const { userId, setUserId } = useContext(UserContext)

    const chengeUser = (e) => {
        setUserId(Number(e.target.value))
    }

    return (
        <select className={styles["select"]} name="name" id="user" value={userId} onChange={chengeUser}>
            <option className={styles["option"]} value="1">Матвей</option>
            <option className={styles["option"]} value="2">Даша</option>
        </select>
    );
};

export default SelectUser;