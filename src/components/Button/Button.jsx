import { useState } from "react";
import "./Button.css"


const Button = () => {
    const [text, setText] = useState("Сохранить воспоминание :)")



    const clicked = () => {
        console.log("Ты нажал на меня !")
        setText("Сохранено!")
    }
    return (
        <button className="button accent" onClick={clicked} >{text}</button>
    );
};

export default Button;
