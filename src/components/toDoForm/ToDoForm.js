import React from "react";
import { PlantPicker } from "../plantPicker/PlantPicker"; 
import DatePicker from 'react-date-picker'; 

export const ToDoForm = ({
  plants,
  title,
  setTitle,
  plant,
  setPlant,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  
  const getPlantNames = () => {
    return plants.map((plant) => plant.name); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title"
        placeholder="Title of To Do card"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      ></input>
      <input 
        type="number"
        name="date"
        placeholder="Date?"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      ></input>
      <input 
        type="text"
        name="time"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      ></input>
      <PlantPicker 
        name="plant" 
        value={plant} 
        plants={getPlantNames()}
        onChange={(e) => setPlant(e.target.value)}
        placeholder="To do with.."/>
      <input type="submit" value="Submit To Do" />
    </form>
  );
};
