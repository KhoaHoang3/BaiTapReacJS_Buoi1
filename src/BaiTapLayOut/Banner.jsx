import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="container border border-primary mt-4 p-4">
        <div className="">
          <div className="col-12">
            <h1>A Warm Welcome!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              adipisci perferendis, fuga qui accusantium consequatur maiores
              repudiandae iure tempore? Quo consequuntur architecto quibusdam
              aut id? Iste numquam ea quo suscipit.
            </p>
            <button className="btn btn-primary">Call to action!</button>
          </div>
        </div>
      </div>
    );
  }
}
