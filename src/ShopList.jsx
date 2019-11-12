import React from "react";

// import "./shoplist.css";

var ShopList = ({ shops, handleShop, selectedShop }) => {
  return (
    <div>
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
      {shops.map(shop => (
        <div class="list-group" id="list-tab" role="tablist">
          <button
            className={
              "list-group-item list-group-item-action " +
              (selectedShop === shop.name ? "active" : "")
            }
            onClick={handleShop}
            role="tab"
            value={shop.name}
          >
            {shop.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShopList;
