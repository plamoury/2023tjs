import React,  { useEffect, useState } from 'react'
import style from './MemeForm.module.css'
import PropTypes from 'prop-types'

interface IMemeFormProps{
    myStyle?:{}
}
export interface IMemeFormState { }
export const initialState: IMemeFormState = {}
const MemeForm: React.FC<IMemeFormProps> = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        //cmpdidmount
    }, []);
    return (
    <div className={style.MemeForm}
      style={props.myStyle}
      data-testid="MemeForm">
        memeForm
    </div>)
};

MemeForm.propTypes = {
    myStyle: PropTypes.object,
}
MemeForm.defaultProps = {

}
MemeForm.defaultProps = {}
export default MemeForm;