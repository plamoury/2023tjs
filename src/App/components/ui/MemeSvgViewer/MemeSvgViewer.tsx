import React, { useEffect, useState } from "react";
import style from "./MemeSvgViewer.module.css";
import PropTypes from "prop-types";
import { MemeSVGViewer } from "orsys-tjs-meme";
import connect from "react-redux/es/components/connect";

function mapDispatchToProps(dispatch: Function) {
  return {};
}
function mapStateToProps(stateStore: any, propsParent: any) {
  return { ...propsParent, meme: stateStore.current };
}
export default connect(mapStateToProps, mapDispatchToProps)(MemeSVGViewer);
