import React,  { useEffect, useState } from 'react'
import style from './MemeSvgViewer.module.css'
import PropTypes from 'prop-types'

interface IMemeSvgViewerProps{
    myStyle?:{}
}
export interface IMemeSvgViewerState { }
export const initialState: IMemeSvgViewerState = {}
const MemeSvgViewer: React.FC<IMemeSvgViewerProps> = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        //cmpdidmount
    }, []);
    return (
    <div className={style.MemeSvgViewer}
      style={props.myStyle}
      data-testid="MemeSvgViewer">
        memeSvgViewer
    </div>)
};

MemeSvgViewer.propTypes = {
    myStyle: PropTypes.object,
}
MemeSvgViewer.defaultProps = {

}
MemeSvgViewer.defaultProps = {}
export default MemeSvgViewer;