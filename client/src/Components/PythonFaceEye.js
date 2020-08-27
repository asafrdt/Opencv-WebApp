import React, { Component } from "react";
import axios from "axios";
import { Button, FileUpload } from "react-mdl";
import { storage } from "../firebase";
import { MDLComponent } from "react-mdl";
import ImageUploader from "react-images-upload";

class PythonFaceEye extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      image: null,
      url: "",
      progress: 0,
      image_name: "",
      picture: "",
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleD = this.handleD.bind(this);
  }
  handleChange1 = (e) => {
    // if (e.target.files[0]) {
    const image = e.target.files[0];
    this.setState(() => ({ image }));
    // }

    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progrss function ....
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
    var img = document.getElementById("bigpic");
    img.style.display = "none";
  };

  handleD = () => {
    axios
      .post(`api/items/python3`, {
        Param1: this.state.url,
      })
      .then((res) => {
        this.setState({ image_name: res.data });
      });

    var sourceOfPicture = require("../../src/images/face-eyes-detect.jpg");
    var img = document.getElementById("bigpic");
    img.src = sourceOfPicture.replace("90x90", "225x225");
  };

  render() {
    const style = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    };

    return (
      <div style={style}>
        {/* <progress value={this.state.progress} max="100" /> */}

        <input
          type="file"
          name="file1"
          id="file1"
          class="inputfile"
          onChange={this.handleChange1}
        />
        <label for="file1" className="button" style={{ width: "193px" }}>
          Choose a file
        </label>

        <button onClick={this.handleD}> Detect Some Faces!</button>

        <img
          style={{ display: "block", marginTop: "10px" }}
          id="bigpic"
          src={require("../../src/images/face-eyes-detect.jpg")}
          alt="Uploaded images"
          height="300px"
          width="300px"
        />
      </div>
    );
  }
}
export default PythonFaceEye;
