import React, { Component } from "react";
import { text } from "body-parser";
import PythonFaceEye from "./PythonFaceEye";

class FaceEyeDetection extends Component {
  render() {
    return (
      <section id="faceeyedetection">
        <h2 style={{ textAlign: "center" }}>
          <span style={{ color: "white" }}>Face & Eyes Detection</span>
        </h2>

        <PythonFaceEye />
      </section>
    );
  }
}

export default FaceEyeDetection;
