import React, { Component } from "react";
import PythonScript4 from "./PythonScript4";
import { text } from "body-parser";
import { img } from "../../src/images/black-bg.jpg";

class Home extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Faces Detection
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#faceeyedetection">
                Face & eye detection
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About me
              </a>
            </li>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
            <h2 style={{ textAlign: "center" }}>
              <span style={{ color: "white" }}>
                Object detection with Python using OpenCV
              </span>
            </h2>
            <br />
            <blockquote>
              <p>
                " Object Detection is a common Computer Vision problem which
                deals with <br />
                identifying and locating object of certain classes in the image.
                "
              </p>
            </blockquote>
            <ul className="social">{networks}</ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
