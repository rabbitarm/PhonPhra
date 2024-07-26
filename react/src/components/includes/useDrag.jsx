import { useCallback, useEffect, useState } from "react";

export const useDrag = ({ ref, calculateFor = "topLeft" }) => {

  /* https://codesandbox.io/p/sandbox/draggable-div-element-react-hook-56xrm?file=%2Fsrc%2FuseDrag.js%3A1%2C1-128%2C1 */

  const [dragInfo, setDragInfo] = useState();
  const [finalPosition, setFinalPosition] = useState({});
  const [isDragging, setIsDragging] = useState(false);

  const updateFinalPosition = useCallback(
    (width, height, x, y) => {
      if (calculateFor === "bottomRight") {
        setFinalPosition({
          x: Math.max(
            Math.min(
              window.innerWidth - width,
              window.innerWidth - (x + width)
            ),
            0
          ),
          y: Math.max(
            Math.min(
              window.innerHeight - height,
              window.innerHeight - (y + height)
            ),
            0
          )
        });
        return;
      }
      setFinalPosition({
        x: Math.min(Math.max(0, x), window.innerWidth - width),
        y: Math.min(Math.max(0, y), window.innerHeight - height)
      });
    },
    [calculateFor]
  );

  const handleDragMouseUp = (evt) => {
    evt.preventDefault();
    setIsDragging(false);
  };

  const handleDragMouseDown = (evt) => {
    evt.preventDefault();
    const { clientX, clientY } = evt;
    const { current: draggableElement } = ref;
    if (!draggableElement) {
      return;
    }
    const {
      top,
      left,
      width,
      height
    } = draggableElement.getBoundingClientRect();
    setIsDragging(true);
    setDragInfo({
      startX: clientX,
      startY: clientY,
      top,
      left,
      width,
      height
    });
  };

  const handleDragMouseMove = useCallback(
    (evt) => {
      const { current: draggableElement } = ref;
      if (!isDragging || !draggableElement) return;
      evt.preventDefault();
      const { clientX, clientY } = evt;
      const position = {
        x: dragInfo.startX - clientX,
        y: dragInfo.startY - clientY
      };
      const { top, left, width, height } = dragInfo;
      updateFinalPosition(width, height, left - position.x, top - position.y);
    },
    [isDragging, dragInfo, ref, updateFinalPosition]
  );

  const recalculate = (width, height) => {
    const { current: draggableElement } = ref;
    const {
      top,
      left,
      width: boundingWidth,
      height: boundingHeight
    } = draggableElement.getBoundingClientRect();
    updateFinalPosition(
      width ?? boundingWidth,
      height ?? boundingHeight,
      left,
      top
    );
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleDragMouseMove);
    document.addEventListener("mouseup", handleDragMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleDragMouseMove);
      document.removeEventListener("mouseup", handleDragMouseUp);
    };
  }, [handleDragMouseMove]);

  return {
    position: finalPosition,
    handleDragMouseDown,
    recalculate
  };

};