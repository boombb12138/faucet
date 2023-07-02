import React from "react";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import ETH from "../public/icon_contact/ETH.png";
// import { ReactComponent as ETH } from "../public/icon_contact/ETH.svg";
const Bubbles = () => {
  const [randomPosition, setRandomPosition] = useState({});

  useEffect(() => {
    // 在首次渲染之前没有window 所以要在useEffect中使用window
    if (typeof window !== "undefined") {
      const randomLeft = Math.floor(Math.random() * window.innerWidth);
      console.log(randomLeft);
      setRandomPosition({ left: randomLeft + "px" });
    }
  }, []);
  console.log(ETH);
  const renderBubbles = () => {
    return (
      typeof window !== undefined &&
      Array.from({ length: 10 }, (_, index) => (
        <div key={index} className={styles.bubble} style={randomPosition}>
          {/* <img src={ETH} alt="" /> */}
        </div>
      ))
    );
  };

  return renderBubbles();
};

export default Bubbles;
