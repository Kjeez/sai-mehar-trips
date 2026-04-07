import { useEffect } from 'react';
import type { RefObject } from 'react';

export function useDragScroll<T extends HTMLElement>(ref: RefObject<T | null>) {
  useEffect(() => {
    const ele = ref.current;
    if (!ele) return;

    let pos = { top: 0, left: 0, x: 0, y: 0 };
    let hasDragged = false;

    const mouseDownHandler = function (e: MouseEvent) {
      // Don't start dragging if we clicked a scrollbar or something else
      ele.style.cursor = 'grabbing';
      ele.style.userSelect = 'none';

      pos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        x: e.clientX,
        y: e.clientY,
      };

      hasDragged = false;

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e: MouseEvent) {
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;
      
      // If the user moved more than 5px, we consider it a deliberate drag
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        hasDragged = true;
      }

      ele.scrollTop = pos.top - dy;
      ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
      ele.style.cursor = 'grab';
      ele.style.userSelect = 'auto';

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      
      // Keep hasDragged true for a tiny bit so the click handler can catch it
      setTimeout(() => {
        hasDragged = false;
      }, 50);
    };

    const clickHandler = (e: MouseEvent) => {
      // If we genuinely dragged, prevent the click event from bubbling or doing its default action (like navigating links)
      if (hasDragged) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Initially grab cursor
    ele.style.cursor = 'grab';
    
    // Listen for mousedown to start dragging
    ele.addEventListener('mousedown', mouseDownHandler);
    
    // Listen for click in the capture phase to intercept it before child links process it
    ele.addEventListener('click', clickHandler, { capture: true });

    return () => {
      ele.style.cursor = 'auto';
      ele.removeEventListener('mousedown', mouseDownHandler);
      ele.removeEventListener('click', clickHandler, { capture: true });
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };
  }, [ref]);
}
