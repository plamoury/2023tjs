import React, { useState, useEffect } from 'react'
import style from "./Button.module.css"

/**
 * simple button
 * @returns react component structure
 */
const Button = (props) => {
    // valeur etatique pour function
    const [isClicked, setIsClicked] = useState(false);
    //hook d'effet de cycle de vie d'une valeur (et pas de composant)
    useEffect(() => {
        if (isClicked) { setTimeout(() => setIsClicked(false), 300); }
    }, [isClicked])

    console.log(props);
    return <button className={
        `${style.Button}${isClicked ? ' ' + style.clicked : ''}`}
        onClick={(arg) => {
            setIsClicked(true);
            console.log(arg);
            props.onButtonClick();
        }}>
        {props.children}
    </button>
}

//function Button() {
//    return <button className='Button'>BenjaminB</button>
//}

export default Button;