import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="row text-center">
          {/* item-1 */}
          <div className="col-3 pl-0">
            <div className="content border border-success">
              <div className="img">
                <img
                  className="w-100"
                  src="https://i.pinimg.com/564x/2b/0f/d4/2b0fd42de066bbbf71768020551fd825.jpg"
                  alt=""
                />
              </div>

              <div className="intro px-3 py-3">
                <h3>Card Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                  tenetur voluptatum magni temporibus ab cupiditate facere
                  assumenda aliquid, aliquam corrupti.
                </p>
                <button className="btn btn-primary">Call Out More!</button>
              </div>
            </div>
          </div>

          {/* item-2 */}
          <div className="col-3 pl-0 ">
            <div className="content border border-success">
              <div className="img">
                <img
                  className="w-100"
                  src="https://i.pinimg.com/564x/2b/0f/d4/2b0fd42de066bbbf71768020551fd825.jpg"
                  alt=""
                />
              </div>

              <div className="intro px-3 py-3">
                <h3>Card Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                  tenetur voluptatum magni temporibus ab cupiditate facere
                  assumenda aliquid, aliquam corrupti.
                </p>
                <button className="btn btn-primary">Call Out More!</button>
              </div>
            </div>
          </div>

          {/* item-3 */}
          <div className="col-3 pl-0 ">
            <div className="content border border-success">
              <div className="img">
                <img
                  className="w-100"
                  src="https://i.pinimg.com/564x/2b/0f/d4/2b0fd42de066bbbf71768020551fd825.jpg"
                  alt=""
                />
              </div>

              <div className="intro px-3 py-3">
                <h3>Card Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                  tenetur voluptatum magni temporibus ab cupiditate facere
                  assumenda aliquid, aliquam corrupti.
                </p>
                <button className="btn btn-primary">Call Out More!</button>
              </div>
            </div>
          </div>

          {/* item-4 */}
          <div className="col-3 pl-0">
            <div className="content border border-success">
              <div className="img">
                <img
                  className="w-100"
                  src="https://i.pinimg.com/564x/2b/0f/d4/2b0fd42de066bbbf71768020551fd825.jpg"
                  alt=""
                />
              </div>

              <div className="intro px-3 py-3">
                <h3>Card Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                  tenetur voluptatum magni temporibus ab cupiditate facere
                  assumenda aliquid, aliquam corrupti.
                </p>
                <button className="btn btn-primary">Call Out More!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
