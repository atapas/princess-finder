import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import ml5 from "ml5";

import useInterval from "./hooks/useInterval";
import Princess from './Princess';
import Chart from './Chart';

let classifier;

function App() {
  const videoRef = useRef();
  const [start, setStart] = useState(false);
  const [result, setResult] = useState([]);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    classifier = ml5.imageClassifier("./model/model.json", () => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setShowButton(true);
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
    <div className="container">
      <div className="upper">
        <div className="capture">
          <video
            ref={videoRef}
            style={{ transform: "scale(-1, 1)" }}
            width="300"
            height="150"
          />
          { 
            showButton && (<button onClick={() => stopClassification()}>
              {start ? "Stop" : "Start"}
            </button>)
          }
        </div>
        { result.length > 0 && (
          <div>
            <Chart data={result[0]} />
          </div>)
        }

      </div>
      { result.length > 0 && (
        <div className="results">
          <Princess data={result} />
        </div>
      )}
    </div>
  );
}

export default App;
