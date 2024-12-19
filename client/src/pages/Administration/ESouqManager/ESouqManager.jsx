import React, { useState } from "react";
import { esouqmanagerData } from "./esouqmanagerData";
import Table from "../../../common/Table";

const ESouqManager = () => {
  const [selectedData, setSelectedData] = useState(esouqmanagerData);
  const [form, setForm] = useState({
    name: '',
    description: '',
    script: '',
    code: '',
    weight: '',
    vat: '',
    premiumDiscount: '',
    deliveryCharges: '',
    makingCharges: '',
    availableBranches: '',
    imageUrl: '',
    enabled: false,
  });

  const EsouqManagerColumns = [
    { header: "Name", accessor: "name" },
    { header: "Description", accessor: "description" },
    { header: "Script", accessor: "script" },
    { header: "Code", accessor: "code" },
    { header: "Weight", accessor: "weight" },
    { header: "VAT", accessor: "vat" },
    { header: "Premium/Discount", accessor: "premiumDiscount" },
    { header: "Delivery Charges", accessor: "deliveryCharges" },
    { header: "Making Charges", accessor: "makingCharges" },
    { header: "Available Branches", accessor: "availableBranches" },
    { header: "Image URL", accessor: "imageUrl" },
    { header: "Enabled", accessor: "enabled" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const addRule = () => {
    const newRule = {
      ...form,
      id: new Date().getTime(),
    };
    setSelectedData([...selectedData, newRule]);

    // Reset the form
    setForm({
      name: '',
      description: '',
      script: '',
      code: '',
      weight: '',
      vat: '',
      premiumDiscount: '',
      deliveryCharges: '',
      makingCharges: '',
      availableBranches: '',
      imageUrl: '',
      enabled: false,
    });
  };

  return (
    <div className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <Table
        columns={EsouqManagerColumns}
        data={selectedData}
        title="E-Souq Manager"
      />

      <div className="mb-4 mt-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
          Enabled
        </label>
        <input
          type="checkbox"
          name="enabled"
          checked={form.enabled}
          onChange={handleChange}
          className="mt-1 p-2 form-checkbox"
        />
      </div>

      <div className="mb-4 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Script
            </label>
            <input
              name="script"
              value={form.script}
              onChange={handleChange}
              placeholder="Enter Script"
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Code
            </label>
            <input
              name="code"
              value={form.code}
              onChange={handleChange}
              placeholder="Enter Code"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
            />
          </div>
        </div>
      </div>

      <div className="mb-4 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Weight
            </label>
            <input
              name="weight"
              value={form.weight}
              onChange={handleChange}
              placeholder="Enter Weight"
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              VAT
            </label>
            <input
              name="vat"
              value={form.vat}
              onChange={handleChange}
              placeholder="Enter VAT"
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Premium/Discount
            </label>
            <input
              name="premiumDiscount"
              value={form.premiumDiscount}
              onChange={handleChange}
              placeholder="Enter Premium/Discount"
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
            />
          </div>
        </div>
      </div>

      <div className="mb-4 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Delivery Charges
            </label>
            <input
              name="deliveryCharges"
              value={form.deliveryCharges}
              onChange={handleChange}
              placeholder="Enter Delivery Charges"
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Making Charges
            </label>
            <input
              name="makingCharges"
              value={form.makingCharges}
              onChange={handleChange}
              placeholder="Enter Making Charges"
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
              Available Branches
            </label>
            <input
              name="availableBranches"
              value={form.availableBranches}
              onChange={handleChange}
              placeholder="Enter Available Branches"
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
            />
          </div>
        </div>
      </div>

      <div className="mb-4 mt-6">
        <div className="md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-100">
              Description
            </label>
            <input
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter Description"
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
            />
          </div>
        </div>
      </div>

      <div className="mb-4 mt-6">
        <div className="md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-100">
              Image URL
            </label>
            <input
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              placeholder="Enter Image URL"
              className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-4">
        <button
          onClick={addRule}
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
  );
};

export default ESouqManager;
