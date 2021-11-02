import React , { useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { ToDoPage } from "./containers/ToDoPage/ToDoPage";
import { PlantsPage } from "./containers/PlantsPage/PlantsPage";


function App() {
  /* Define state variables for 
  plants and to do's */
  const examplePlant = { name: "Orchidee", water: 6, sunlight: "full"};
  const examplePlant2 = { name: "Margriet", water: 5, sunlight: "half"};  
  const exampleToDo = { title: "give water", plant: "vetplant", date: "20 maart", time: "12.00" }; 

  const [plants, setPlants] = useState([examplePlant, examplePlant2]); 
  const [todos, setToDos] = useState([exampleToDo]); 

  const ROUTES = {
    PLANTS: "/plants",
    TODOS: "/todos",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addPlant = (name, water, sunlight) => { 
    setPlants([
      ...plants, 
      {
        name: `Plant: ${name}`, 
        water: `Needs water every ${water} days`, 
        sunlight: `Kind of sunlight needed: ${sunlight}`
      },
    ]); 
  }; 

  const addToDo = (title, plant, date, time) => {
    setToDos([
      ...todos, 
      {
        title: title, 
        plant: plant, 
        date: date, 
        time: time
      },
    ]); 
  }; 


  return (
    <>
      <nav>
        <NavLink to={ROUTES.PLANTS} activeClassName="active">
          Plants
        </NavLink>
        <NavLink to={ROUTES.TODOS} activeClassName="active">
          To Do's 
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.PLANTS} />
          </Route>
          <Route path={ROUTES.PLANTS}>
             {/* Add props to PlantsPage */}
            <PlantsPage plants={plants} addPlant={addPlant} />
          </Route>
          <Route path={ROUTES.TODOS}>
            {/* Add props to ToDosPage */}
            <ToDoPage todos={todos} addToDo={addToDo} plants={plants} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
