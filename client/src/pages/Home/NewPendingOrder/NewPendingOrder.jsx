import React, { useState } from 'react'
import PositionTable from '../../../common/PositionTable';
import DashboardActions from '../../../components/DashboardActions';

const NewPendingOrder = () => {

  const [orders, setOrders] = useState([
    { type: "Sell Limit", price: 0.51032, orderType: "Buy Limit", sellPrice: 0.51032, buyPrice: 0.51045 },
    { type: "Sell Limit", price: 0.51031, orderType: "Buy Limit", sellPrice: 0.51031, buyPrice: 0.51044 },
    { type: "Sell Stop", price: 0.51030, orderType: "Buy Stop", sellPrice: 0.51030, buyPrice: 0.51042 },
    { type: "Sell Stop", price: 0.51029, orderType: "Buy Stop", sellPrice: 0.51029, buyPrice: 0.51041 },
    { type: "Sell Limit", price: 0.51028, orderType: "Buy Limit", sellPrice: 0.51028, buyPrice: 0.51040 },
    { type: "Sell Now", price: 0.51027, orderType: "Buy Limit", sellPrice: 0.51027, buyPrice: 0.51039 },
    { type: "Sell Limit", price: 0.51026, orderType: "Buy Limit", sellPrice: 0.51026, buyPrice: 0.51038 },
    { type: "Sell Stop", price: 0.51025, orderType: "Buy Stop", sellPrice: 0.51025, buyPrice: 0.51037 },
    { type: "Sell Stop", price: 0.51023, orderType: "Buy Stop", sellPrice: 0.51023, buyPrice: 0.51036 },
    { type: "Sell Stop", price: 0.51022, orderType: "Buy Stop", sellPrice: 0.51022, buyPrice: 0.51035 },
    { type: "Sell Limit", price: 0.51021, orderType: "Buy Limit", sellPrice: 0.51021, buyPrice: 0.51034 },
    { type: "Sell Stop", price: 0.51020, orderType: "Buy Stop", sellPrice: 0.51020, buyPrice: 0.51033 },
  ]);

  const handleConfirm = (id) => {
    // Confirm action logic here
  };

  const handleCancel = (id) => {
    // Cancel action logic here
  };



  return (
    <>
      <div className="min-h-screen">
      <DashboardActions Title="New Pending Order"/>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Left Form Section */}
          <div className="p-4 dark:bg-gray-800 bg-white rounded-md h-fit">
            <h2 className="text-lg font-bold mb-4 dark:text-white">Enter Market</h2>

            {/* Script Dropdown */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Script</label>
              <select
                name="parameter"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
              >
                <option>AUDGBP</option>
                <option>EURUSD</option>
                <option>USDCAD</option>
                {/* Add more options */}
              </select>
            </div>

            {/* Market Type */}
            <label className="block text-lg mt-2 mb-3 font-medium text-gray-700 dark:text-gray-100 text-center">Type</label>
            <div className="flex mb-4 justify-around">
              <div>
                <input type="radio" name="type" id="market" className="mr-2" />
                <label htmlFor="market" className="dark:text-gray-300">Market</label>
              </div>
              <div className="ml-4">
                <input type="radio" name="type" id="pending" className="mr-2" />
                <label htmlFor="pending" className="dark:text-gray-300">Pending Order</label>
              </div>
            </div>

            {/* Bid and Ask Prices */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              <div className="text-center">
                <p className="text-4xl font-bold text-red-500">0.51027</p>
                <p className="dark:text-gray-300">Bid</p>
              </div>
              <div className="text-center">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Amount</label>
                <select
                  name="parameter"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
                >
                  <option>0.0100</option>
                  <option>0.0120</option>
                  <option>0.30100</option>
                </select>
                <p className="dark:text-gray-300">Lot</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-500">0.51120</p>
                <p className="dark:text-gray-300">Ask</p>
              </div>
            </div>

            {/* Buy/Sell Buttons */}
            <div className="flex flex-col sm:flex-row justify-center mb-5 space-y-2 sm:space-y-0 sm:space-x-4">
              <button className="w-full sm:w-1/2 bg-red-500 text-white p-2 rounded">Place</button>
            </div>

            {/* Comment, SL, TP */}
            <div className="mb-4 text-center">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Comment</label>
              <input
                type="text"
                placeholder="Add your comment"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
              />
            </div>

            {/* Buy/sell limit/stop */}
            <div className="flex mb-4 justify-around">
              <div>
                <input type="radio" name="type" id="market" className="mr-2" />
                <label htmlFor="market" className="dark:text-gray-300">Buy Limit</label>
              </div>
              <div className="ml-4">
                <input type="radio" name="type" id="pending" className="mr-2" />
                <label htmlFor="pending" className="dark:text-gray-300">Buy Stop</label>
              </div>
            </div>
            <div className="flex mb-4 justify-around">
              <div>
                <input type="radio" name="type" id="market" className="mr-2" />
                <label htmlFor="market" className="dark:text-gray-300">Sell Limit</label>
              </div>
              <div className="ml-4">
                <input type="radio" name="type" id="pending" className="mr-2" />
                <label htmlFor="pending" className="dark:text-gray-300">Sell Stop</label>
              </div>
            </div>
            {/* SL Pending Order TP */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block mb-2 dark:text-gray-300">SL</label>
                <input
                  type="number"
                  placeholder='Add Price'
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
                />
              </div>
              <div>
                <label className="block mb-2 dark:text-gray-300">Pending Order Price</label>
                <input
                  type="number"
                  placeholder='Add Price'
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
                />
              </div>
              <div>
                <label className="block mb-2 dark:text-gray-300">TP</label>
                <input
                  type="number"
                  placeholder='Add Price'
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
                />
              </div>
            </div>

            {/* Expiration  */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6" style={{ alignItems: 'center' }}>
              <div>
                <label className="block mb-2 dark:text-gray-300">Expiration</label>
              </div>
              <div>
                <input
                  type="date"
                  placeholder='Add Price'
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
                />
              </div>
              <div className='flex '>
                <input type="checkbox" className="form-checkbox mx-3 mt-1" />
                <span className="block mb-2 dark:text-gray-300">Good till Cancel</span>
              </div>
            </div>
          </div>

          {/* Right Order Section */}
          <PositionTable orders={orders} handleCancel={handleCancel} handleConfirm={handleConfirm} />

        </div>
      </div>

    </>
  )
}

export default NewPendingOrder