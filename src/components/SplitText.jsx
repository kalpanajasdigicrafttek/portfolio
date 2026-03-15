import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function SplitText({
  text,
  className,
  delay = 50,
  duration = 1,
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 }
}) {
  const textRef = useRef();

  useEffect(() => {
    const letters = textRef.current.children;

    gsap.fromTo(
      letters,
      from,
      {
        ...to,
        duration,
        stagger: delay / 1000
      }
    );
  }, []);

  return (
    <span ref={textRef} className={className}>
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default SplitText;