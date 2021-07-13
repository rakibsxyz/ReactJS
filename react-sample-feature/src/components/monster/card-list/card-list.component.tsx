import React from "react";
import Card from "../card/card.component";

const CardList = (props: any) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster: any) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
