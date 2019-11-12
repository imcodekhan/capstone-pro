import React, { Component } from "react";
// import "./Dish.css";
class Dish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    };
  }
  componentWillMount() {
    this.setState({ quantity: 0 });
  }

  inc = () => {
    this.state.quantity < 10
      ? this.setState({ quantity: this.state.quantity + 1 })
      : alert("max 10 order");
    if ((this.state.quantity = 1)) {
    }
  };
  dec = () => {
    this.state.quantity > 0
      ? this.setState({ quantity: this.state.quantity - 1 })
      : alert("min 1 order");
  };
  clear = () => {
    this.setState({ quantity: 0 });
  };
  render() {
    return (
      <div class="card" style={{ width: "18rem", margin: "20px" }}>
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </head>
        <img class="card-img-top" src={this.props.img} alt="Card image cap" />
        <div class="card-body">
          <h4 class="card-title" style={{ fontSize: 30 }}>
            <b>{this.props.name}</b>
          </h4>
          <p class="card-text">
            {" "}
            <b>Rs {this.props.price}</b>
          </p>
          <div className="wrapper" style={{ display: " inline " }}>
            <i
              className="fa fa-minus-circle"
              style={{ fontSize: 24, display: "inline" }}
              onClick={this.dec}
            ></i>{" "}
            &nbsp;&nbsp;
            <p style={{ fontSize: 24, display: "inline" }}>
              {this.state.quantity}
            </p>
            &nbsp;&nbsp;
            <i
              className="fa fa-plus-circle"
              style={{ fontSize: 24, display: "inline" }}
              onClick={this.inc}
            ></i>
          </div>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <div
            className="add btn btn-primary"
            onClick={() => {
              this.clear();
              if (this.state.quantity === 0) {
                alert("minimum 1 order");
              } else {
                this.props.handleAdd(this.props, this.state.quantity);
              }
            }}
          >
            Add
          </div>
        </div>
      </div>
    );
  }
}

export default Dish;
