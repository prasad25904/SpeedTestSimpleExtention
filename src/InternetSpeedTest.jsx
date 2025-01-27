import React, { useState, useEffect } from "react";

const InternetSpeedTest = () => {
  const [speed, setSpeed] = useState(null);
  const [isTesting, setIsTesting] = useState(false);

  const userImageLink =
    "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png";
  const downloadSize = 5616998;

  const startSpeedTest = () => {
    setIsTesting(true);
    let startTime, endTime;
    const downloadImgSrc = new Image();

    downloadImgSrc.onload = () => {
      endTime = new Date().getTime();
      calculateSpeed(startTime, endTime);
    };

    startTime = new Date().getTime();
    downloadImgSrc.src = userImageLink;
  };

  const calculateSpeed = (startTime, endTime) => {
    const timeDuration = (endTime - startTime) / 1000;
    const loadedBits = downloadSize * 8;
    const bps = (loadedBits / timeDuration).toFixed(2);
    const speedInMbps = (bps / (1024 * 1024)).toFixed(2);
    setSpeed(speedInMbps);
    setIsTesting(false);
  };

  useEffect(() => {
    startSpeedTest();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        background: "rgba(0, 0, 0, 0.8)",
        color: "white",
        padding: "15px 20px",
        borderRadius: "10px",
        zIndex: 9999,
        fontSize: "14px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
        textAlign: "center",
        maxWidth: "200px",
      }}
    >
      <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "bold", color: "#4caf50" }}>Internet Speed</h4>
      <p style={{ marginTop: "10px", fontSize: "16px", fontWeight: "500" }}>
        {isTesting
          ? "Testing..."
          : speed
          ? `${speed} Mbps`
          : "Unable to calculate speed"}
      </p>
    </div>
  );
};


export default InternetSpeedTest;
