import React from 'react'
import Tree from '../../../../components/Tree'

const GeneralProperties = () => {
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
          />
          <Tree />
        </div>

        {/* Main Content (Table) */}
        <div className="col-span-full lg:col-span-8 bg-white dark:bg-gray-800 shadow-sm rounded-xl h-fit p-5">
          {/* Policy Name Field */}
          <div className="mb-4 flex flex-col sm:flex-row items-center">
            <label
              className="sm:w-1/3 text-gray-700 dark:text-gray-300 mb-2 sm:mb-0"
              htmlFor="policyName"
            >
              Policy Name
            </label>
            <input
              className="sm:w-2/3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-blue-500"
              id="policyName"
              type="text"
              placeholder="Add Policy Name"
            />
          </div>
          {/* GMT Offset Field */}
          <div className="mb-4 flex flex-col sm:flex-row items-center">
            <label
              className="sm:w-1/3 text-gray-700 dark:text-gray-300 mb-2 sm:mb-0"
              htmlFor="gmtOffset"
            >
              GMT Offset
            </label>
            <select
              className="sm:w-2/3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-blue-500"
              id="gmtOffset"
            >
              <option>UTC -12:00</option>
              <option>UTC -11:00</option>
              {/* Add other options here */}
            </select>
          </div>
          {/* Slide News Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="slideNews"
            >
              Slide News
            </label>
            <input
              className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-blue-500"
              id="slideNews"
              type="text"
              placeholder="Add the news that you want to show to your clients, separated by ##"
            />
          </div>
          {/* Statement Header Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="statementHeader"
            >
              Statement Header
            </label>
            <input
              className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-blue-500"
              id="statementHeader"
              type="text"
              placeholder="Add Statement Header"
            />
          </div>
          {/* Statement Footer Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 mb-2"
              htmlFor="statementFooter"
            >
              Statement Footer
            </label>
            <input
              className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-blue-500"
              id="statementFooter"
              type="text"
              placeholder="Add Statement Footer"
            />
          </div>


          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-4 p-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full md:w-auto"
            >
              Add
            </button>
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 w-full md:w-auto"
            >
              Update
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 w-full md:w-auto"
            >
              Delete
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 w-full md:w-auto"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default GeneralProperties