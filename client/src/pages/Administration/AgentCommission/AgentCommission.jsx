import React from 'react'

const AgentCommission = () => {
  return (
    <div className="p-4 dark:bg-gray-800 dark:text-gray-100">
    <h2 className="text-2xl font-bold mb-4">Agent Commission</h2>


    <div className="mb-4 mt-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Name</label>
      <input
        name="bankName"
        placeholder="Enter bank name"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Image URL</label>
      <input
        name="imageUrl"
        placeholder="Enter image URL"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
      />
    </div>
  </div>
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Details</label>
    <textarea
    type = "number"
      name="bankDetails"
      placeholder="Enter bank details"
      rows="4"
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
    />
  </div>
</div>


    <div className="flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-4">
<button
  // onClick={addRule}
  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full md:w-auto"
>
  Add
</button>
<button
  // onClick={() => updateRule(selectedRuleId)}
  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 w-full md:w-auto"
>
  Update
</button>
<button
  // onClick={() => deleteRule(selectedRuleId)}
  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 w-full md:w-auto"
>
  Delete
</button>
<button
  // onClick={() => console.log('Closing...')}
  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 w-full md:w-auto"
>
  Close
</button>
</div>

  </div>
  )
}

export default AgentCommission;