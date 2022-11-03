import { useState, useEffect } from "react";
import { Frame, Table, Button } from "./components";

/* App Configuration */
const CONFIG = {
  url: "http://universities.hipolabs.com/search?country=Australia",
};

function App() {
  /* Set state for API data */
  const [data, setData] = useState([]);

  /* Load button handler */
  const loadButtonHandler = async () => {
    try {
      const response = await fetch(CONFIG["url"]);
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error(error);
      setData("API is not available");
    }
  };

  /* Add button handler */
  const addButtonHandler = () => {
    if (data.length == 0) return;
    setData([...data, data[0]]);
  };

  /* Delete button handler */
  const deleteButtonHandler = () => {
    if (data.length == 0) return;
    const trimLastRow = data.slice(0, data.length - 1);
    setData(trimLastRow);
  };

  return (
    <Frame>
      <div className="mx-8">
        <Button 
          buttonStyle="add" 
          icon="adding" 
          onClick={addButtonHandler}
        >
          ADD
        </Button>
        <Button 
          buttonStyle="load" 
          icon="loading" 
          onClick={loadButtonHandler}
        >
          LOAD
        </Button>
        <Button
          buttonStyle="delete"
          icon="delete"
          onClick={deleteButtonHandler}
        >
          DELETE
        </Button>
      </div>
      <Table dataLists={data} />
    </Frame>
  );
}

export default App;
