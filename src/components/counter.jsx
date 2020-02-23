import React, { Component } from "react";
import Octicon, { Plus, Dash } from "@primer/octicons-react";
class Counter extends Component {
  state = {
    count: 1
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  handleDelete = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <React.Fragment>
        <div className="col-sm-2">
          <div className="input-group input-group-sm">
            <span className="input-group-btn ">
              <button
                onClick={this.handleDecrement}
                className="btn btn-danger btn-number btn-sm"
              >
                <span>
                  {" "}
                  <Octicon icon={Dash} />
                </span>
              </button>
            </span>

            <span type="text" className="form-control input-number" min="0">
              {this.state.count}
            </span>

            <span className="input-group-btn">
              <button
                onClick={this.handleIncrement}
                className="btn btn-success btn-number btn-sm"
              >
                <span>
                  {" "}
                  <Octicon icon={Plus} />
                </span>
              </button>
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
