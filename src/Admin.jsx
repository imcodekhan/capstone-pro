import React, { Component } from "react";
import { orderRef } from "./firebase";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      check: false,
      data: [],
      uid: "",
      username: "",
      password: ""
    };
    orderRef.on("value", data => {
      let order;
      order = data.val();
      let keys = Object.keys(order);
      keys.map(k => {
        this.setState({ data: [...this.state.data, order[k]] });
      });
    });
  }
  handleChange = e => {
    this.setState({ uid: e.target.value });
  };
  render() {
    let filteredOrder;
    if (this.state.uid === "") {
      filteredOrder = this.state.data;
    } else {
      filteredOrder = this.state.data.filter(sh => {
        if (sh.uid.toString() === this.state.uid) {
          return sh;
        }
      });
    }

    return (
      <div className="admin" style={{ backgroundColor: "grey" }}>
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Liu+Jian+Mao+Cao&display=swap"
            rel="stylesheet"
          ></link>
        </head>
        <div
          className="admin-login"
          style={{ display: this.state.check ? "none" : "block" }}
        >
          <head>
            <link rel="stylesheet" href="css/style.css"></link>
            <link
              href="https://fonts.googleapis.com/css?family=Ubuntu"
              rel="stylesheet"
            ></link>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              rel="stylesheet"
              href="path/to/font-awesome/css/font-awesome.min.css"
            ></link>
            <title> Admin Sign in</title>
          </head>

          <div class="main">
            <p class="sign" align="center">
              Admin Sign in
            </p>
            <form class="form1" />
            <input
              class="un "
              type="text"
              align="center"
              placeholder="Username"
              value={this.state.username}
              onChange={e => {
                this.setState({ username: e.target.value });
              }}
            />
            <input
              class="pass"
              type="password"
              align="center"
              placeholder="Password"
              value={this.state.password}
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
            />
            <a
              class="submit"
              align="center"
              onClick={() => {
                if (
                  this.state.username === "pankajbaleshwar1998@gmail.com" &&
                  this.state.password === "Capstone"
                ) {
                  this.setState({ check: true });
                } else {
                  alert("wrong details");
                }
              }}
            >
              Sign in
            </a>
            <p class="forgot" align="center">
              <a href="#">Forgot Password?</a>
            </p>
          </div>
        </div>
        <div
          className="admin-body"
          style={{ display: this.state.check ? "block" : "none" }}
        >
          <div
            className="order"
            style={{
              textAlign: "center",
              //   backgroundColor: "wheat",
              paddingTop: "10%",
              fontSize: 16
            }}
          >
            Order
          </div>

          <div
            className="table table-striped"
            style={{
              backgroundColor: "white",
              paddingLeft: "33%",
              paddingRight: "33%"
            }}
          >
            <thead style={{ backgroundColor: "black", color: "white" }}>
              <tr>
                <td>Order ID</td>
                <td>Block</td>
                <td>Shop</td>
                <td>Dish</td>
                <td>Price</td>
                <td>Quanity</td>
                <td>Amount</td>
              </tr>
            </thead>

            <tbody>
              {filteredOrder.map(o => {
                // <tr>
                return o.order.map(a => {
                  return (
                    <tr>
                      <td>{o.uid}</td>
                      <td>{a.block}</td>
                      <td>{a.shop}</td>
                      <td>{a.dish}</td>
                      <td>{a.price}</td>
                      <td>{a.quantity}</td>
                      <td>{o.total}</td>
                    </tr>
                  );
                });
              })}
            </tbody>
            <div
              className="input"
              style={{ marginTop: "10%", marginLeft: "30%" }}
            >
              <input
                type="text"
                value={this.state.uid}
                placeholder="enter order id"
                onChange={this.handleChange}
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
