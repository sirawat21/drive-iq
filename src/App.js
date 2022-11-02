import { useState, useEffect } from "react";
import { Table, Button } from "./components";

/* App Configuration */
const CONFIG = {
  url: "http://universities.hipolabs.com/search?country=Australia",
};

function App() {
  /* Set state for API data */
  const [data, setData] = useState();

  /* Fetch data from API */
  const fetchDataJSON = async () => {
    try {
      const response = await fetch(CONFIG["url"]);
      const rawData = await response.json();
      setData(rawData);
    } catch (error) {
      console.error(error);
      setData("API is not available");
    }
  };

  /* Load button handler */
  const loadButtonHandler = async () => {
    await fetchDataJSON();
  };

  return (
    <div>
      <Table />
      <Button onClick={loadButtonHandler}>
        <p>Load</p>
      </Button>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
