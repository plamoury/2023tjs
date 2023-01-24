import React, { useEffect, useState } from "react";
import style from "./FlexHLayout.module.css";
import PropTypes from "prop-types";

interface IFlexHLayoutProps {
  myStyle?: {};
  children: Array<React.ReactElement>;
}
export interface IFlexHLayoutState {}
export const initialState: IFlexHLayoutState = {};
const FlexHLayout: React.FC<IFlexHLayoutProps> = (props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    //cmpdidmount
  }, []);
  return (
    <div
      className={style.FlexHLayout}
      style={props.myStyle}
      data-testid="FlexHLayout"
    >
      {props.children}
    </div>
  );
};

FlexHLayout.propTypes = {
  myStyle: PropTypes.object,
  children: PropTypes.any.isRequired,
};
FlexHLayout.defaultProps = {};
export default FlexHLayout;
