import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import FaceDetection from "./Components/FaceDetection";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
import Home from "./Components/Home";
import FaceEyeDetection from "./Components/FaceEyeDetection";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        {/* <Header data={this.state.resumeData.main} /> */}
        {/* <Testimonials data={this.state.resumeData.testimonials} /> */}

        {/*  <Resume data={this.state.resumeData.resume}/>*/}
        {/* <Portfolio data={this.state.resumeData.portfolio} /> */}
        <Home data={this.state.resumeData.main} />

        <FaceDetection data={this.state.resumeData.main} />
        <FaceEyeDetection data={this.state.resumeData.main} />

        <About data={this.state.resumeData.main} />

        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
