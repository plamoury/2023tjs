import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import style from "./Button.module.css";
import { type } from 'os';

interface IButtonProps{
    onButtonClick:Function
    myStyle?:{}
    myType:"submit"|"reset"|"button"
    bgColor?:string
    children:string|React.ReactElement|Array<React.ReactElement|string>
}
/**
 * simple button
 * @returns react component structure
 */
const Button = (props:IButtonProps) => {
    // valeur etatique pour function
    const [isClicked, setIsClicked] = useState(false);
    //hook d'effet de cycle de vie d'une valeur (et pas de composant)
    useEffect(() => {
        if (isClicked) { setTimeout(() => setIsClicked(false), 300); }
    }, [isClicked])

    console.log(props);
    return <button className={
        `${style.Button}${isClicked ? ' ' + style.clicked : ''}`}
        style={{ backgroundColor: props.bgColor, ...props.myStyle }}
        onClick={(arg) => {
            setIsClicked(true);
            console.log(arg);
            props.onButtonClick();
        }}
        type={props.myType}
        >
        {props.children}
    </button>

}
Button.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
    myStyle: PropTypes.object,
    bgColor: PropTypes.string,
    myType: PropTypes.oneOf(['submit','reset','button']).isRequired
};
Button.defaultProps = {
    onButtonClick: (arg:string) => { console.log(arg); },
    myType: 'button',
};
export default Button;