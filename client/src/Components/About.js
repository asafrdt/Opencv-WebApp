import React, { Component } from "react";
import {
  WhatsappIcon,
  FacebookMessengerIcon,
  WhatsappShareButton,
  EmailShareButton,
  EmailIcon,
} from "react-share";
class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Asaf Arditi Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
              {" "}
              <span style={{ color: "white" }}>{bio}</span>
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span style={{ color: "white" }}>{name}</span>
                  <br />
                  <span style={{ color: "white" }}>
                    {city}, {state}
                  </span>
                  <br />
                  <span style={{ color: "white" }}>{phone}</span>
                  <br />
                  <span style={{ color: "white" }}>{email}</span>
                  <br />
                  <hr />

                  <div className="react-share-button">
                    <a
                      className="react-share-button"
                      target="_blank"
                      href={"https://wa.me/+972543476767/?text="}
                    >
                      <WhatsappIcon size={"4rem"} round={true} />
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      className="react-share-button"
                      target="_blank"
                      href={"https://m.me/Asaf-Arditi/?text="}
                    >
                      <FacebookMessengerIcon size={"4rem"} round={true} />
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      className="react-share-button"
                      target="_blank"
                      href={
                        "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=asafrdt@gmail.com&su=Hello From #YourName&body=Hi Asaf, nice to meet you!&ui=2&tf=1&pli=1"
                      }
                    >
                      <EmailIcon
                        size={"4rem"}
                        round={true}
                        bgStyle={{ fill: "red" }}
                      />
                    </a>
                  </div>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
