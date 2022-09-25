import { useEffect, useRef } from "react";

const useSlider = ({ container, slider }) => {
  const isSlidePressed = useRef(false);
  const cursorX = useRef(0);

  const starDragHandler = (e) => {
    isSlidePressed.current = true;
    cursorX.current = e.nativeEvent.offsetX - slider.current.offsetLeft;

    container.current.style.cursor = "grabbing";
  };

  const finishDragging = (e) => {
    container.current.style.cursor = "grab";
  };

  useEffect(() => {
    const endDragHandler = () => {
      isSlidePressed.current = false;
    };

    window.addEventListener("mouseup", endDragHandler);
    return () => window.removeEventListener("mouseup", endDragHandler);
  }, []);

  const draggingHandler = (e) => {
    if (!isSlidePressed.current) return;

    e.preventDefault();
    slider.current.style.left = `${e.nativeEvent.offsetX - cursorX.current}px`;

    boundCards();
  };

  function boundCards() {
    const contaiserSlider = container.current.getBoundingClientRect();
    const listSlider = slider.current.getBoundingClientRect();

    if (parseInt(slider.current.style.left) > 0) {
      slider.current.style.left = 0;
    } else if (listSlider.right < contaiserSlider.right) {
      slider.current.style.left = `-${
        listSlider.width - contaiserSlider.width
      }px`;
    }
  }
  return { starDragHandler, finishDragging, draggingHandler };
};

export default useSlider;
