import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const dot  = useRef(null);
  const ring = useRef(null);

  // ── check AFTER mount so we read the real device capability ──────────────
  // pointer: fine   = mouse (desktop/laptop)         → show custom cursor
  // pointer: coarse = finger (phone/tablet)          → hide custom cursor
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touchCheck = window.matchMedia("(pointer: coarse) and (hover: none)");
    setIsTouch(touchCheck.matches);
  }, []);

  useEffect(() => {
    if (isTouch) return; // skip on touch devices

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
    return () => window.removeEventListener("mousemove", move);
  }, [isTouch]);

  // don't render on touch devices
  if (isTouch) return null;

  return (
    <>
      <div ref={dot}  className="cursor" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
};

export default Cursor;