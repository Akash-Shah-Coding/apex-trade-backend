import React, { useState } from 'react';

const NewPendingOrderForm = ({ dummyData, onSave }) => {
  const [selectedScript, setSelectedScript] = useState(dummyData[0]);
  const [targetPrice, setTargetPrice] = useState('');
  const [orderType, setOrderType] = useState('Buy');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = () => {
    const newOrder = {
      asset: selectedScript.SCRIPT,
      targetPrice: parseFloat(targetPrice),
      orderType,
      quantity: parseInt(quantity, 10),
    };
    onSave(newOrder);
    setSelectedScript(dummyData[0]);
    setTargetPrice('');
    setOrderType('Buy');
    setQuantity('');
  };

  return (
    <div className="space-y-4 p-4 bg-gray-800 rounded-md shadow-md">
      <h3 className="text-lg font-medium text-white">New Pending Order</h3>
      <div>
        <label className="block text-sm font-medium text-gray-200">Select Script</label>
        <select
          onChange={(e) => setSelectedScript(dummyData.find(data => data.SCRIPT === e.target.value))}
          value={selectedScript.SCRIPT}
          className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
        >
          {dummyData.map((data, index) => (
            <option key={index} value={data.SCRIPT}>
              {data.SCRIPT}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-200">Selected Script: {selectedScript.SCRIPT}</p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-200">Target Price</label>
        <input
          type="number"
          placeholder="Target Price"
          value={targetPrice}
          onChange={(e) => setTargetPrice(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-200">Order Type</label>
        <select
          value={orderType}
          onChange={(e) => setOrderType(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
        >
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-200">Quantity</label>
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
        />
      </div>
      <div className="bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          onClick={handleSubmit}
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus:ring-indigo-400"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default NewPendingOrderForm;
