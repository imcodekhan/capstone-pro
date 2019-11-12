import React from "react";
import "./Bill.css";
const Bill = ({ order, total, handle }) => {
  // console.log("g", total);

  return (
    <div className="bill">
      <div
        className="table table-striped"
        style={{
          backgroundColor: "white",
          paddingTop: 10,
          paddingRight: 50,
          paddingLeft: 50
        }}
      >
        <thead>
          <tr>
            <td>Block</td>
            <td>Shop</td>
            <td>Dish</td>
            <td>Price</td>
            <td>Quanity</td>
            <td>Amount</td>
          </tr>
        </thead>

        <tbody>
          {order.map(o => {
            return (
              <tr>
                <td>{o.block}</td>
                <td>{o.shop}</td>
                <td>{o.dish}</td>
                <td>{o.price}</td>
                <td>{o.quantity}</td>
                <td>{o.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </div>
      <div
        onClick={() => {
          handle();
        }}
        className="btn btn-primary"
        style={{ margin: 20 }}
      >
        Order
      </div>
    </div>
  );
};

export default Bill;
