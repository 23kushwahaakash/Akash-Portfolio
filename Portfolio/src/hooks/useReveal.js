import { useEffect } from "react";

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target); // stop watching once revealed
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect(); // cleanup on unmount
  }, []);
};

export default useReveal;