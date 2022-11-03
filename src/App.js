import { useDispatch, useSelector } from "react-redux";
import { setStoreData } from "./store/data/data.action";
import { Frame, Table, Button } from "./components";

/* App Configuration */
const CONFIG = {
  url: "http://universities.hipolabs.com/search?country=Australia",
};

function App() {
  /* Set inital dispatch hook for further action */
  const dispatch = useDispatch();
  const dataFromStore = useSelector((state) => state.data.collegeLists);

  /* Load button handler */
  const loadButtonHandler = async () => {
    try {
      // fetch data from api
      const response = await fetch(CONFIG["url"]);
      const responseData = await response.json();
      // dispatch to store of data
      dispatch(setStoreData(responseData));
    } catch (error) {
      console.error(error);
    }
  };

  /* Add button handler */
  const addButtonHandler = () => {
    if (dataFromStore.length == 0) return;
    // copy array by space oparator with add one copy of first item
    const addCopyOfFirstRowToButtom = [...dataFromStore, dataFromStore[0]];
    // dispatch to store of data
    dispatch(setStoreData(addCopyOfFirstRowToButtom));
  };

  /* Delete button handler */
  const deleteButtonHandler = () => {
    if (dataFromStore.length == 0) return;
    // copy new arry from index 0 of old arry to one before last item
    const trimLastRow = dataFromStore.slice(0, dataFromStore.length - 1);
    // dispatch to store of data
    dispatch(setStoreData(trimLastRow));
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
      <Table />
    </Frame>
  );
}

export default App;

