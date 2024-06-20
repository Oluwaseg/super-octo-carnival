// ScrollProgress.js
import { useEffect } from "react";

const ScrollProgress = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      document.querySelector(".progress-bar").style.width = `${scrollPercent}%`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar"></div>
    </div>
  );
};

export default ScrollProgress;
