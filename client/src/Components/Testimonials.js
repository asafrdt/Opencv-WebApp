import React, { Component } from "react";
import PythonScript4 from "../Components/PythonScript4";
class Testimonials extends Component {
  render() {
    if (this.props.data) {
      var testimonials = this.props.data.testimonials.map(function (
        testimonials
      ) {
        return (
          <li key={testimonials.user}>
            <span style={{ color: "white", textAlign: "center" }}>
              <h1>{testimonials.text}</h1>

              <br />
            </span>
          </li>
        );
      });
    }

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              {/* <h1>
                <span>
                  "Filmaking is the only chance to live many lifetimes"
                </span>
              </h1> */}
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">{testimonials}</ul>
              <PythonScript4 />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
