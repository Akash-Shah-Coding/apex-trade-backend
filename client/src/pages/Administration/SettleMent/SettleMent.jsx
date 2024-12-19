import React from 'react'
import DashboardActions from '../../../components/DashboardActions';

const SettleMent = (props) => {
  const { heading , progressBars } = props;

  return (
    <>
      <DashboardActions Title={heading} />
      <div className="max-w-xxl mx-auto bg-white dark:bg-gray-800 dark:text-gray-100 p-6 rounded-lg shadow-lg">
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 md:gap-4">
          <div className="md:col-span-3">
            <label
              htmlFor="desired-node"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Desired Node
            </label>
            <select
              id="desired-node"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
            >
              <option>DEMO IDS</option>
            </select>
          </div>

        </div>
        {/* Single & with demo ac */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <div className="flex items-center">
            <input
              id="single"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-700"
            />
            <label
              htmlFor="single"
              className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Single
            </label>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <input
              id="with-demo-accounts"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-700"
            />
            <label
              htmlFor="with-demo-accounts"
              className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              With Demo Accounts
            </label>
          </div>
        </div>
        {/*Script*/}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <div>
            <label
              htmlFor="script"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Script
            </label>
            <select
              id="script"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
            >
              <option>ALL</option>
            </select>
          </div>
          <div className="mt-4 md:mt-0">
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Type
            </label>
            <select
              id="type"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
            >
              <option>ALL</option>
            </select>
          </div>
        </div>
        {/* Money Set */}
        <div className="mb-4">
          <label
            htmlFor="money-set-base"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Money Set. Base
          </label>
          <select
            id="money-set-base"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
          >
            <option>Balance</option>
          </select>
        </div>

        {/* From and till now */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <div className="flex items-center">
            <input
              id="from-beginning"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-700"
            />
            <label
              htmlFor="from-beginning"
              className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              From Beginning
            </label>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <input
              id="til-now"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-700"
            />
            <label
              htmlFor="til-now"
              className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Til Now
            </label>
          </div>
        </div>
        {/* Dates */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <div>
            <label
              htmlFor="from-date"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              From Date
            </label>
            <input
              type="datetime-local"
              id="from-date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
            />
          </div>
          <div className="mt-4 md:mt-0">
            <label
              htmlFor="to-date"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              To Date
            </label>
            <input
              type="datetime-local"
              id="to-date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
            />
          </div>
        </div>
        {/* Positions */}
        <div className="mb-6">
          <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
            <span>Positions Closing</span>
            <span>Positions Re-Opening</span>
            <span>Money Settlement</span>
          </div>
          {/* <div className="flex justify-between mt-2">
            <div className="w-1/3 h-2 bg-gray-300 rounded-full dark:bg-gray-700" />
            <div className="w-1/3 h-2 bg-gray-300 rounded-full mx-2 dark:bg-gray-700" />
            <div className="w-1/3 h-2 bg-gray-300 rounded-full dark:bg-gray-700" />
          </div> */}
          <div className="flex justify-between mt-2">
            <div className={`w-1/3 h-2 rounded-full ${progressBars[0] ? 'bg-green-500 dark:bg-green-700' : 'bg-gray-300 dark:bg-gray-700'}`} />
            <div className={`w-1/3 h-2 rounded-full mx-2 ${progressBars[1] ? 'bg-green-500 dark:bg-green-700' : 'bg-gray-300 dark:bg-gray-700'}`} />
            <div className={`w-1/3 h-2 rounded-full ${progressBars[2] ? 'bg-green-500 dark:bg-green-700' : 'bg-gray-300 dark:bg-gray-700'}`} />
          </div>
        </div>
        {/* Submit and Close buttons */}
        <div className="flex justify-end space-x-4">
          <button className="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit
          </button>
          <button className="py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Close
          </button>
        </div>
      </div>
    </>
  )
}

export default SettleMent