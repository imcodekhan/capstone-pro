import React, { Component } from "react";
import { shop } from "./data";
import ShopList from "./ShopList";
import DishList from "./DishList";
import Bill from "./Bill";
import logo from "./assests/logo5.PNG";
import { orderRef } from "./firebase";
import "./Bill.css";
import { whileStatement } from "@babel/types";
// import img1 from "./assests/img1.jpg";
// import Admin from "./Admin";

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      shop: shop,
      selectedblock: "BH-1",
      selectedshop: "Cocina",
      selectedDish: "",
      order: [],
      total: 0,
      animate: "",
      turn: ""
    };
  }

  //handling toggle of bill
  handleBill = () => {
    if (this.state.animate === "") {
      this.setState({ animate: "goUp" });
    } else if (this.state.animate === "goUp") {
      this.setState({ animate: "goDown" });
    } else {
      this.setState({ animate: "goUp" });
    }
    if (this.state.turn === "") {
      this.setState({ turn: "turnDown" });
    } else if (this.state.turn === "turnDown") {
      this.setState({ turn: "turnUp" });
    } else {
      this.setState({ turn: "turnDown" });
    }
  };

  //handling Add button in dish
  handleAdd = (p, quantity) => {
    let temp = {
      block: this.state.selectedblock,
      shop: this.state.selectedshop,
      dish: p.name,
      price: p.price,
      quantity: quantity,
      amount: p.price * quantity
    };
    this.setState({ selectedDish: p.name });
    this.setState({ order: [...this.state.order, temp] });
    this.setState({ total: this.state.total + temp.amount });
  };
  handleBlock = event => {
    this.setState({ selectedblock: event.target.value });
    const shop = this.state.shop.filter(sh => {
      if (sh.block.toLowerCase() === event.target.value.toLowerCase()) {
        return sh;
      }
    });
    this.setState({ selectedshop: shop[0].name });
    // console.log(shop[0].name);
  };

  handleShop = event => {
    // console.log(event.target.value);

    this.setState({ selectedshop: event.target.value });
  };
  h = () => {
    const oid = Math.floor(1000 + Math.random() * 9000);
    var orderPush = orderRef.push({
      uid: oid,
      order: this.state.order,
      total: this.state.total
    });
    // console.log(oid);
    this.setState({
      shop: shop,
      selectedblock: "BH-1",
      selectedshop: "Cocina",
      order: [],
      total: 0,
      selectedDish: "",
      turn: "",
      animate: ""
    });
    alert("order placed with order id " + oid);
  };

  render() {
    const filteredshop = this.state.shop.filter(sh => {
      if (sh.block.toLowerCase() === this.state.selectedblock.toLowerCase()) {
        return sh;
      }
    });
    const chosenshop = filteredshop.filter(shop => {
      if (shop.name.toLowerCase() === this.state.selectedshop.toLowerCase()) {
        return shop;
      }
    });

    return (
      <div className="menu ">
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

        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
            Menu
          </a>
        </nav>
        <div className="row" style={{ height: "100vh" }}>
          <div className="col-4">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label className="input-group-text" for="inputGroupSelect01">
                  Location
                </label>
              </div>
              <select
                onClick={this.handleBlock}
                className="custom-select"
                id="inputGroupSelect01"
              >
                <option value="BH-1" selected>
                  BH-1
                </option>
                <option value="BH-2">BH-2</option>
                <option value="CSE BLOCK">CSE BLOCK</option>
                <option value="CAMPUS CAFE">CAMPUS CAFE</option>
              </select>
            </div>

            <div className="shoplist btn">
              <ShopList
                shops={filteredshop}
                handleShop={this.handleShop}
                selectedShop={this.state.selectedshop}
              />
            </div>
          </div>

          <div className="col-8 dishlist">
            <DishList shop={chosenshop} handleAdd={this.handleAdd} />
          </div>
        </div>
        <div
          className={"footer " + this.state.animate}
          style={{
            position: "fixed",
            bottom: "0px",
            right: "0px",
            backgroundColor: "#ffc266",
            height: 50,
            width: "50%",
            // color: "white",
            overflowY: "scroll"
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              position: "sticky",
              top: 0
            }}
          >
            <i
              className={"fa fa-arrow-up " + this.state.turn}
              style={{
                color: "#ff9900",
                fontSize: 24,
                margin: 15,
                display: "inline-block"
              }}
              onClick={this.handleBill}
            ></i>
            <div
              style={{
                fontSize: 22,
                display:
                  this.state.selectedDish === "" ? "none" : "inline-block"
              }}
            >
              {this.state.selectedDish} is added
            </div>
            <div
              style={{
                float: "right",
                margin: 10,
                fontSize: 22,
                display:
                  this.state.selectedDish === "" ? "none" : "inline-block"
              }}
            >
              Total:
              {this.state.total}
            </div>
          </div>
          <div
            style={{
              display: this.state.selectedDish === "" ? "inline-block" : "none"
            }}
          >
            <center>
              <h1 style={{ color: "black" }}>Please Order!!!</h1>
            </center>
          </div>
          <div
            className="bill-body"
            style={{
              display: this.state.selectedDish === "" ? "none" : "inline-block"
            }}
          >
            <Bill
              order={this.state.order}
              total={this.state.total}
              handle={this.h}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
