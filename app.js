/* App Configurations */
const CONFIG = {
  url: "https://api.publicapis.org/entries",
  message: {
    noData: "No results",
  },
};

/* Main function */
const main = (async () => {
  // Fetch API data, froce close when error occurred
  const data = await fetchAPI(CONFIG["url"]);
  if (!data) forceClose();
  const { count, entries } = data;

  // Get arguments
  //   const [category, limit] = process.argv.slice(2);
  const category = "Weather";
  const limit = "5";

  // Sort data by desc of 'API' property value
  const sortedData = sortByDESC(entries, "API");
  // console.log(`DATA ` + entries[0]['API'])
  // console.log(`SORT ` + sortedData[0]['API'])

  // Filter data by category, froce close if no data in that category
  const filteredData = filterCategory(sortedData, "Category", category);
  if (filteredData.length == 0) forceClose(CONFIG["message"]["noData"]);

  // Limit a data to display, no defined limit to display when limit value is 0
  const limitedData = limitData(filteredData, Number(limit));

  // Display the final result
  console.log(JSON.stringify(limitedData, null, 2));
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
function sortByDESC(array, field) {
  const sortedData = array.sort((a, b) => b[field] - a[field]);
  return sortedData;
}

/* Filter function */
function filterCategory(array, field, category) {
  const filteredData = array.filter((data) => data[field] === category);
  return filteredData;
}

/* Limit function */
function limitData(array, limit) {
  if (limit == 0) return array;
  const slicedData = array.slice(0, limit);
  return slicedData;
}

/* Force close function */
function forceClose(message = "") {
  console.log(message);
  process.exit();
}
