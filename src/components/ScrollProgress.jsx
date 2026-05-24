import { useEffect, useState } from "react";

const ScrollProgress = () => {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const onScroll = () => {

      const totalScroll =
        document.documentElement.scrollTop;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercent =
        (totalScroll / height) * 100;

      setScroll(scrollPercent);
    };

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);

  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-cyan-400 z-[9999]"
      style={{
        width: `${scroll}%`,
      }}
    />
  );
};

export default ScrollProgress;