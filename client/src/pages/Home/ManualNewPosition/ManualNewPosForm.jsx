import React, { useState } from 'react';

const ManualNewPosForm = ({ dummyData, onSave }) => {
  const [selectedScript, setSelectedScript] = useState(dummyData[0] || {});

  const handleScriptChange = (e) => {
    const script = dummyData.find(data => data.SCRIPT === e.target.value);
    setSelectedScript(script);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(selectedScript);
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Select Script</label>
        <select
          onChange={handleScriptChange}
          value={selectedScript.SCRIPT}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
        >
          {dummyData.map((data, index) => (
            <option key={index} value={data.SCRIPT}>
              {data.SCRIPT}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-100">Selected Script: {selectedScript.SCRIPT}</p>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-100">Last Price: {selectedScript.LAST_PRICE}</p>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="submit"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus:ring-indigo-400"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ManualNewPosForm;
