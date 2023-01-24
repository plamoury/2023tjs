import React,  { useEffect, useState } from 'react'
import style from './Navbar.module.css'
import PropTypes from 'prop-types'

interface INavbarProps{
    myStyle?:{}
}
export interface INavbarState { }
export const initialState: INavbarState = {}
const Navbar: React.FC<INavbarProps> = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        //cmpdidmount
    }, []);
    return (
    <div className={style.Navbar}
      style={props.myStyle}
      data-testid="Navbar">
        navbar
    </div>)
};

Navbar.propTypes = {
    myStyle: PropTypes.object,
}
Navbar.defaultProps = {

}
Navbar.defaultProps = {}
export default Navbar;