import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row bg-dark text-white p-3">
          {/* Start Bootstrap */}
          <div className="col-6 text-center ">
            <h4>Start Bootstrap</h4>
          </div>
          {/* Nav-bar */}
          <div className="col-6 text-decoration-none text-center">
            <a className="pr-3 text-white" href="">Home</a>
            <a className="pr-3 text-white-50" href="">About</a>
            <a className="pr-3 text-white-50" href="">Service</a>
            <a className="text-white-50" href="">Contact</a>
          </div>
        </div>
      </div>
    );
  }
}
