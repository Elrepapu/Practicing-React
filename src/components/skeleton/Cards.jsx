import React from "react";

const Cards = (props) => {
  return (
    <article>
      <img src={props.character.image} alt="" />
      <div className="info">
        <h4>{props.character.name}</h4>
        <span>
          {props.character.status === "Alive" ? "😁" : "😐"}{" "}
          {props.character.status} | {props.character.species}
        </span>
        <h6>Location</h6>
        <span> {props.character.location.name} </span>
      </div>
    </article>
  );
};

export default Cards;
