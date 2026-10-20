import { useEffect, useRef, useState } from "react";

function Hero() {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className={`hero ${isVisible ? "is-visible" : ""}`}
    >
      {/* Your existing hero content */}
    </section>
  );
}

export default Hero;