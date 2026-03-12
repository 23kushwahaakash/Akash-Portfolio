import { useEffect, useRef } from "react";

const Cursor = () => {
  const dot  = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (dot.current) {
        dot.current.style.left = e.clientX + "px";
        dot.current.style.top  = e.clientY + "px";
      }
      if (ring.current) {
        ring.current.style.left = e.clientX + "px";
        ring.current.style.top  = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move); // cleanup
  }, []);

  return (
    <>
      <div ref={dot}  className="cursor" style={{ pointerEvents: "none" }}/>
      <div ref={ring} className="cursor-ring" style={{ pointerEvents: "none" }}/>
    </>
  );
};

export default Cursor;