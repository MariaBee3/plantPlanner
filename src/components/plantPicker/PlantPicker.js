import React from "react";

export const PlantPicker = ( {name, plants, onChange} ) => {
  return (
    <select value="" name={name} onChange={onChange}>
      <option key={-1}>
        No Plant Selected</option>
      {plants.map((plant) => {
        return (
          <option value={plant} key={plant}>{plant}</option>
        );
      })}; 
    </select>
  );
};
