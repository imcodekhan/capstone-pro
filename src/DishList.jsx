import React from "react";
import Dish from "./Dish";

const DishList = ({ shop, handleAdd }) => {
  return (
    <div className="dish-list" style={{}}>
      {shop.map(i => {
        return i.dish.map(d => {
          return (
            <Dish
              name={d.name}
              price={d.price}
              img={d.img}
              handleAdd={handleAdd}
            />
          );
        });
      })}
    </div>
  );
};

export default DishList;
