import React from "react";

export const PlantPicker = ( {name, value, onChange, plants} ) => {
  return (
    <select value={value} name={name} onChange={onChange}>
      <option key={-1}>
        No Plant Selected
      </option>
      {plants.map((plant) => {
        return (
          <option value={plant} key={plant}>
            {plant}
            </option>
        );
      })}
    </select>
  );
};

