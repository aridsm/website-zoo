import React, { useRef } from "react";
import useSlider from "../../hooks/useSlider";
import classes from "./Slider.module.css";

const Slider = ({ children, className }) => {
  const refContainerSlider = useRef();
  const refSlider = useRef();

  const { starDragHandler, finishDragging, draggingHandler } = useSlider({
    container: refContainerSlider,
    slider: refSlider,
  });
  return (
    <div
      className={`${classes.containerSlider} ${className}`}
      ref={refContainerSlider}
      onMouseDown={starDragHandler}
      onMouseMove={draggingHandler}
      onMouseUp={finishDragging}
    >
      <ul className={classes.itemsList} ref={refSlider}>
        {children}
      </ul>
    </div>
  );
};

export default Slider;
