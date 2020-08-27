import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">{education.degree}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
          </div>
        );
      });
      var military = this.props.data.military.map(function (military) {
        return (
          <div key={military.company}>
            <h3>{military.company}</h3>
            <p className="info">
              {military.title}
              <span>&bull;</span> <em className="date">{military.years}</em>
            </p>
            &bull; Responsible for up to 30 men.
            <br /> &bull; Planning and execution of missions for several squads.
            <br />
            &bull; Managing processes which led to breakthroughs in the main
            field of the unit’s expertise.
            {military.title1}
            <span>&bull;</span> <em className="date">{military.years1}</em>
          </div>
        );
      });
      var military1 = this.props.data.military1.map(function (military1) {
        return (
          <div>
            <br />
            <p className="info">
              {military1.title1}
              <span>&bull;</span> <em className="date">{military1.years1}</em>
            </p>
            &bull; Sergeant in a combat squad.
            <br /> &bull; Participated in “Protective Edge” operation.
          </div>
        );
      });
      // var skills = this.props.data.skills.map(function (skills) {
      //   var className = "bar-expand " + skills.name.toLowerCase();
      //   return (
      //     <li key={skills.name}>
      //       <span style={{ width: skills.level }} className={className}></span>
      //       <em>{skills.name}</em>
      //     </li>
      //   );
      // });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <span style={{ color: "black" }}>
                  {education}
                  &bull; Major: Data Mining &bull; GPA: 84 &bull; Expected
                  graduation - 2021
                  <br /> &bull; Expertise in scripting with Python, using:
                  OpenCV, Keras, Tenser-Flow, Numpy, Pandas, NLTK, etc.
                  <br /> &bull; Other Skills: Java, C, C#, C++, React, Node.js,
                  JS, Linux, SQL.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Experience</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <span style={{ color: "black" }}>
              {work} &bull; Creative thinking skills to accommodate consumers.
              <br /> &bull; Time management under a specific time schedule and
              pressure.
              <br />
              &bull; Specializing in Adobe Premiere Pro.
              <br /> &bull; Familiar with Adobe After effects, Lightroom and
              Photoshop.
            </span>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>military</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <span style={{ color: "black" }}>
              {military}
              {military1}
            </span>
          </div>
        </div>
        {/* 
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div> */}
      </section>
    );
  }
}

export default Resume;
