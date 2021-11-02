import React from "react";

export const PlantForm = ({
  name,
  setName,
  water,
  setWater,
  sunlight,
  setSunlight,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name"
        placeholder="Name of plant"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      ></input>
      <input 
        type="number"
        name="water"
        placeholder="How many days to water?"
        value={water}
        onChange={(e) => setWater(e.target.value)}
        required
      ></input>
      <input 
        type="text"
        name="sunlight"
        placeholder="What kind of sunlight?"
        value={sunlight}
        onChange={(e) => setSunlight(e.target.value)}
        required
      ></input>
      <input type="submit" value="Submit Plant" />
    </form>
  );
};
