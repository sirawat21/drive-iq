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
    try {
      setData([...data, data[0]]);
    } catch (error) {
      console.error(error);
    }
  };

  /* Delete button handler */
  const deleteButtonHandler = () => {
    if (data.length == 0) return;
    try {
      const trimLastRow = data.slice(0, data.length - 1);
      setData(trimLastRow);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Frame>
      <div className="grid grid-rows-1 grid-flow-col">
        <div>
          <Button icon="loading" onClick={loadButtonHandler}>
            LOAD
          </Button>
        </div>
        <div>
          <Button buttonStyle="add" icon="adding" onClick={addButtonHandler}>
            ADD
          </Button>
          <Button
            buttonStyle="delete"
            icon="delete"
            onClick={deleteButtonHandler}
          >
            DELETE
          </Button>
        </div>
      </div>
      <Table dataLists={data} />
    </Frame>
  );
}

export default App;
