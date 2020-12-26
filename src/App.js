import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import ml5 from "ml5";

import useInterval from "./hooks/useInterval";
import Result from './Result';

let classifier;

function App() {
  const videoRef = useRef();
  const [start, setStart] = useState(false);
  const [result, setResult] = useState([]);

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
        setResult(results);
      });
    }
  }, 500);

  const stopClassification = () => {
    setStart(!start);
    setResult([]);
  }

  return (
    <>
      <video
        ref={videoRef}
        style={{ transform: "scale(-1, 1)" }}
        width="300"
        height="150"
      />
      <button onClick={() => stopClassification()}>
        {start ? "Stop" : "Start"}
      </button>

      { result.length > 0 && (<Result data={result} />) }
    </>
  );
}

export default App;
