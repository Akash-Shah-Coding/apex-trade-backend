import React from 'react';
import Tree from '../../../../components/Tree';
import Table from '../../../../common/Table';
import useSearch from '../../../../hooks/useSearch'; 

const YesNoPropertiesCols = [
  { header: "Privilige", accessor: "privilege" },
  { header: "Enabled?", accessor: "checkbox" },
];

const YesNoPropertiesData = [
  { privilege: "Enable Hedging (DisabledMeans Netting)", enabled: false },
  { privilege: "Enable E-Souq", enabled: false },
  { privilege: "Send Margin Call Email", enabled: true },
  { privilege: "Hedge Deals When Margin Call Level Reach", enabled: false },
  { privilege: "Partial Liquidations", enabled: false },
  { privilege: "Daily Statement", enabled: false },
  { privilege: "Monthly Statement", enabled: false },
  { privilege: "Weekly Statement", enabled: false },
];

const YesNoProperties = () => {
  const {
    searchQuery,
    setSearchQuery,
    filteredData, 
  } = useSearch(YesNoPropertiesData, ['privilege']); 

  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-6">
        {/* SideSearchbar */}
        <div className="col-span-full lg:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl p-4 h-fit overflow-auto">
          <h2 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Search Policy</h2>
          <input
            type="text"
            placeholder="Enter Policy Name"
            className="w-full p-2 mb-4 border rounded-md dark:bg-gray-700 dark:text-gray-100"
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <Tree/>
        </div>

        {/* Main Content (Table) */}
        <div className="col-span-full lg:col-span-8 bg-white dark:bg-gray-800 shadow-sm rounded-xl h-fit">
          <Table
            columns={YesNoPropertiesCols}
            data={filteredData} 
            title="Yes/No Properties"
          />

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-4 p-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full md:w-auto">
              Add
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 w-full md:w-auto">
              Update
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 w-full md:w-auto">
              Delete
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 w-full md:w-auto">
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default YesNoProperties;
