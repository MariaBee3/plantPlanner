import React, { useState, useEffect } from "react";
import { PlantForm } from "../../components/plantForm/PlantForm";
import { TileList } from "../../components/tileList/TileList"; 

export const PlantsPage = ( { plants, addPlant} ) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [ currentPlant, setCurrentPlant ] = useState(''); 
 const [ currentWater, setCurrentWater ] = useState(''); 
 const [ currentSunlight, setCurrentSunlight] = useState(''); 
 const [ duplicate, setDuplicate ] = useState(false); 

  
  useEffect(() => {
      const plantIsDuplicate = () => {
        const found = plants.find((plant) => plant.name === currentPlant);
        if (found !== undefined) {
          return true;
        }
        return false;
      };

      if (plantIsDuplicate()) {
        setDuplicate(true);
        console.log("This plant is already entered")
      } else {
        setDuplicate(false);
      };
    }, [currentPlant, plants, duplicate]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      addPlant(currentPlant, currentWater, currentSunlight);
      setCurrentPlant(""); 
      setCurrentWater(""); 
      setCurrentSunlight(""); 
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add your plant here</h2> 
        <PlantForm handleSubmit={handleSubmit} name={currentPlant} setName={setCurrentPlant} water={currentWater} setWater={setCurrentWater} sunlight={currentSunlight} setSunlight={setCurrentSunlight}/>
      </section>
      <hr />
      <section>
        <h2 className="plants tile-section">Plants</h2>
        <TileList tiles={plants}/>
      </section>
    </div>
  );
};
