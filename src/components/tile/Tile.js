import React from "react";

export const Tile = ( {tile} ) => {

  const classNameSetter = (index => {
    if (index === 0) {
      return "tile-title"
    } else {
      return "tile"
    }
  }) 

  return (
    <div className="tile-container">
      {Object.values(tile).map((item, index) => (
        <p key={index} className={classNameSetter(index)}>{item}</p>
      ))}
    </div>
  );
};
