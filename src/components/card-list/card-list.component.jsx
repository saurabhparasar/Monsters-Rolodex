import React from "react";
import "./card-list.styles.css";
import CardComponent from "./card-component/card-component";
const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      {
        console.log(monster);
      }
      return <CardComponent monster={monster} key={monster.id} />;
    })}
  </div>
);

export default CardList;
