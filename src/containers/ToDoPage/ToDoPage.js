import React, { useState } from "react";
import { TileList } from "../../components/tileList/TileList";
import { ToDoForm } from "../../components/toDoForm/ToDoForm";
import DatePicker from 'react-date-picker'; 

export const ToDoPage = ( { todos, addToDo, plants }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [currentTitle, setCurrentTitle] = useState(''); 
  const [plant, setPlant] = useState(''); 
  const [date, setDate] = useState(new Date()); 
  const [time, setTime] = useState(''); 



  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addToDo(currentTitle, plant, date, time); 
    setCurrentTitle(''); 
    setPlant(''); 
    setDate(''); 
    setTime(''); 
   
  };

  return (
    <div>
      <section>
        <h2>Add To Do</h2>
        <ToDoForm plants={plants} title={currentTitle} setTitle={setCurrentTitle} plant={plant} setPlant={setPlant} date={date} setDate={setDate} time={time} setTime={setTime} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>To Do's</h2>
        <TileList tiles={todos}/>
      </section>
    </div>
  );
};
