import React,  { useEffect, useState } from 'react'
import style from './FlexHLayout.module.css'
import PropTypes from 'prop-types'

interface IFlexHLayoutProps{
    myStyle?:{}
}
export interface IFlexHLayoutState { }
export const initialState: IFlexHLayoutState = {}
const FlexHLayout: React.FC<IFlexHLayoutProps> = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        //cmpdidmount
    }, []);
    return (
    <div className={style.FlexHLayout}
      style={props.myStyle}
      data-testid="FlexHLayout">
        flexHLayout
    </div>)
};

FlexHLayout.propTypes = {
    myStyle: PropTypes.object,
}
FlexHLayout.defaultProps = {

}
FlexHLayout.defaultProps = {}
export default FlexHLayout;