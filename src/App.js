import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import ml5 from "ml5";

import useInterval from "./hooks/useInterval";

let classifier;

function App() {
  const videoRef = useRef();
  const [start, setStart] = useState(false);

  useEffect(() => {
    classifier = ml5.imageClassifier("./model/model.json", () => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        });
    });
  }, []);

  useInterval(() => {
    if (classifier && start) {
      classifier.classify(videoRef.current, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        console.log(results[0]);
        
      });
    }
  }, 500);

  return (
    <>
      <video
        ref={videoRef}
        style={{ transform: "scale(-1, 1)" }}
        width="300"
        height="150"
      />
      <button onClick={() => setStart(!start)}>
        {start ? "Stop" : "Start"}
      </button>
    </>
  );
}

export default App;
