import { useSelector } from "react-redux";

const Table = () => {
  const currentDataFromStore = useSelector((state) => state.data.collegeLists); // redux
  const tableData = currentDataFromStore;
  return (
    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
      <p className="text-md text-gray-500">Total: {currentDataFromStore.length}</p>
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                Domains
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Code
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Web Pages
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Country
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                State
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Name
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {tableData !== "" &&
              tableData.map((data, key) => (
                <tr key={key}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {data["domains"].map((domain, key) => (
                      <p key={key}>{domain}</p>
                    ))}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {data["alpha_two_code"]}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {data["web_pages"].map((web_page, key) => (
                      <p key={key}>{web_page}</p>
                    ))}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {data["country"]}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {data["state-province"]}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {data["name"]}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {tableData.length === 0 && (
        <p className="text-gray-500 text-lg text-center">
          No preset data or click the load button.
        </p>
      )}
    </div>
  );
};

export default Table;
