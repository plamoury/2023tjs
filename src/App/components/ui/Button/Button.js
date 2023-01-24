import React from 'react'
import style from "./Button.module.css"

/**
 * simple button
 * @returns react component structure
 */
const Button = (props) => {
    console.log(props);
    return <button className={style.Button} onClick={(arg) => {
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