/* App Configurations */
const CONFIG = {
  url: "https://api.publicapis.org/entries",
};

/* Main function */
const main = (async () => {
  // Fetch API data, froce close when error occurred
  const data = await fetchAPI(CONFIG["url"]);
  if (!data) process.exit();

  // Get arguments
  //   const [category, limit] = process.argv.slice(2);
  const [category, limit] = ["Weather", "5"];

  // Sort data by desc of 'API' property value */
  const sortedData = sortByDESC(data);

  // Filter data by category
  //   const filteredData = filterCategory(category, sortedData);

  // Limit a data to display
  //   const limitedData = limitData(limit, filteredData);

  //   console.log(JSON.stringify(limitedData));
})();

/* Fetch data function */
async function fetchAPI(url) {
  try {
    const response = await fetch(url);
    const raw = await response.json();
    return raw;
  } catch (error) {
    console.error(error);
    return 0;
  }
}

/* Sorting function */
function sortByDESC(data) {
  return data;
}

/* Filter function */
function filterCategory(category, data) {
  return;
}

/* Limit function */
function limitData(limit, data) {
  // const slicedData = filteredData.slice(0, limit)
  // return slicedData;
  return;
}
