import React,  { useEffect, useState } from 'react'
import style from './TemplateName.module.css'
import PropTypes from 'prop-types'

interface ITemplateNameProps{
    myStyle?:{}
}
export interface ITemplateNameState { }
export const initialState: ITemplateNameState = {}
const TemplateName: React.FC<ITemplateNameProps> = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        //cmpdidmount
    }, []);
    return (
    <div className={style.TemplateName}
      style={props.myStyle}
      data-testid="TemplateName">
        templateName
    </div>)
};

TemplateName.propTypes = {
    myStyle: PropTypes.object,
}
TemplateName.defaultProps = {

}
TemplateName.defaultProps = {}
export default TemplateName;