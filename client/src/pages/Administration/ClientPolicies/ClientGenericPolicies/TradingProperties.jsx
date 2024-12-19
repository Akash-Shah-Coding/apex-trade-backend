import React from 'react'
import Tree from '../../../../components/Tree'

const TradingProperties = () => {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Liquidation Type */}
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-300"
                htmlFor="liquidationType"
              >
                Liquidation Type
              </label>
              <select
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:outline-none focus:ring-2 border-none focus:ring-blue-500"
                id="liquidationType"
              >
                <option>Equity</option>
                <option>Margin Level</option>
                <option>Equity-Credit</option>
                {/* Add more options if needed */}
              </select>
            </div>
            {/* Liquidation Point */}
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-300"
                htmlFor="liquidationPoint"
              >
                Liquidation Point
              </label>
              <input
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-blue-500"
                id="liquidationPoint"
                type="text"
                placeholder="Add Liquidation Point"
              />
            </div>
            {/* Holding Liquidation Type */}
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-300"
                htmlFor="holdingLiquidationType"
              >
                Holding Liquidation Type
              </label>
              <select
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-blue-500"
                id="holdingLiquidationType"
              >
                <option>Equity</option>
                <option>Margin Level</option>
                <option>Equity-Credit</option>
                {/* Add more options if needed */}
              </select>
            </div>
            {/* Holding Liquidation Point */}
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-300"
                htmlFor="holdingLiquidationPoint"
              >
                Holding Liquidation Point
              </label>
              <input
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-blue-500"
                id="holdingLiquidationPoint"
                type="text"
                placeholder="Add Liquidation Point"
              />
            </div>
            {/* Margin Call Type */}
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-300"
                htmlFor="marginCallType"
              >
                Margin Call Type
              </label>
              <select
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-blue-500"
                id="marginCallType"
              >
                <option>Equity</option>
                <option>Margin Level</option>
                {/* Add more options if needed */}
              </select>
            </div>
            {/* Margin Call Value */}
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-300"
                htmlFor="marginCallValue"
              >
                Margin Call Value
              </label>
              <input
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-blue-500"
                id="marginCallValue"
                type="text"
                defaultValue={0}
              />
            </div>
            {/* Open Com. On Close By Hedge */}
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-300"
                htmlFor="openComHedge"
              >
                Open Com. On Close By Hedge
              </label>
              <select
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-blue-500"
                id="openComHedge"
              >
                <option>Don't Compute Hedge Positions</option>
                <option>Compute One Of Two Hedge Positions</option>
                <option>Compute Both Hedge Positions</option>
                {/* Add more options if needed */}
              </select>
            </div>
            {/* Open Com. On Same Day Close */}
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-300"
                htmlFor="openComSameDay"
              >
                Open Com. On Same Day Close
              </label>
              <select
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-blue-500"
                id="openComSameDay"
              >
                <option>Full</option>
                <option>Half</option>
                <option>Zero</option>
                {/* Add more options if needed */}
              </select>
            </div>
            {/* Close Com. On Close By Hedge */}
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-300"
                htmlFor="closeComHedge"
              >
                Close Com. On Close By Hedge
              </label>
              <select
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-blue-500"
                id="closeComHedge"
              >
                <option>Don't Compute Hedge Positions</option>
                <option>Compute One Of Two Hedge Positions</option>
                <option>Compute Both Hedge Positions</option>
                {/* Add more options if needed */}
              </select>
            </div>
            {/* Close Com. On Same Day Close */}
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-300"
                htmlFor="closeComSameDay"
              >
                Close Com. On Same Day Close
              </label>
              <select
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-blue-500"
                id="closeComSameDay"
              >
                <option>Full</option>
                <option>Half</option>
                <option>Zero</option>
                {/* Add more options if needed */}
              </select>
            </div>
            {/* Margin Hedge Calc */}
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-300"
                htmlFor="marginHedgeCalc"
              >
                Margin Hedge Calc.
              </label>
              <select
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-blue-500"
                id="marginHedgeCalc"
              >
                <option>Don't Compute Hedge Positions</option>
                <option>Compute One Of Two Hedge Positions</option>
                <option>Compute Both Hedge Positions</option>
                {/* Add more options if needed */}
              </select>
            </div>
            {/* Max Quantity */}
            <div className="flex flex-col">
              <label className="text-gray-700 dark:text-gray-300" htmlFor="maxQuantity">
                Max Quantity
              </label>
              <input
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-md focus:outline-none border-none focus:ring-2 focus:ring-blue-500"
                id="maxQuantity"
                type="text"
                defaultValue="UNLIMITED"
              />
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-4 p-4 mt-4">
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

export default TradingProperties