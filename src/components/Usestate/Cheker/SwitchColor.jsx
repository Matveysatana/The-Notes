import React, { useState } from 'react';
import "./SwitchColor.css"


const SwitchColor = () => {

    const [bgColor, setBgColor] = useState("red");

    let toogleColor = () => {
        setBgColor(bgColor => bgColor === "red" ? " #222096" : "red")
    }


    return (
        <div>
            <div className="block" style={{ background: bgColor }}></div>
                <button onClick={toogleColor} className='switcher'>Поменять цвет</button>
        </div >
    );
};

export default SwitchColor;