import { memo } from "react";
import styles from "./Logo.module.css"

const Logo = ({ image }) => {
    return (
        <img className={styles.logo} src={image} alt="" />
    );
};

export default memo(Logo) ;