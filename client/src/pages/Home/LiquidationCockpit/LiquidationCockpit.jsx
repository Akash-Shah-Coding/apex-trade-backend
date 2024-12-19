import React, { useState } from 'react';
import Table from '../../../common/Table';
import { liquidationRulesData, cockpitLogsData } from './dummydata';

const LiquidationCockpit = () => {
  const [rules, setRules] = useState(liquidationRulesData);
  const [form, setForm] = useState({
    parameter: 'Margin Level',
    operation: 'More Than (>)',
    point: '',
    enabled: false,
    action: 'close'
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const addRule = () => {
    const newRule = {
      ...form,
      id: new Date().getTime()
    };
    setRules([...rules, newRule]);
  };

  const updateRule = (id) => {
    const updatedRules = rules.map((rule) =>
      rule.id === id ? { ...rule, ...form } : rule
    );
    setRules(updatedRules);
  };

  const deleteRule = (id) => {
    setRules(rules.filter((rule) => rule.id !== id));
  };

  const liquidationColumns = [
    { header: "Parameter", accessor: "parameter" },
    { header: "Operation", accessor: "operation" },
    { header: "Point", accessor: "point" },
    { header: "Enabled", accessor: "enabled" },
    { header: "Account", accessor: "account" },
    { header: "Percentage", accessor: "percentage" },
    { header: "Direction", accessor: "direction" },
    { header: "Cancel All Rules", accessor: "cancelAllRules" },
    { header: "Next Rule", accessor: "nextRule" }
  ];

  const logsColumns = [
    { header: "Time", accessor: "time" },
    { header: "Log", accessor: "log" }
  ];

  const logsData = rules.map((rule) => ({
    time: new Date(rule.id).toLocaleString(),
    log: `${rule.enabled ? 'CREATE' : 'DELETE'}: ${rule.parameter} ${rule.operation} (${rule.point}) / ${rule.enabled ? 'Enabled' : 'Disabled'}`
  }));

  return (
    <div className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-bold mb-4">Liquidation Cockpit</h2>

      <Table columns={liquidationColumns} data={rules} title="Liquidation Rules"/>

      <div className="mb-4 mt-6">  
        <h3 className="text font-semibold mb-4"><center>Margin Level More Than ( &gt; ) {form.point}</center></h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className='mb-4'>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Parameter</label>
            <select
              name="parameter"
              value={form.parameter}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
            >
              <option>Margin Level</option>
              <option>Equity</option>
              <option>Total Pnl</option>
              {/* Add other options as necessary */}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Operation</label>
            <select
              name="operation"
              value={form.operation}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
            >
              <option>More Than (&gt;)</option>
              <option>Less Than (&lt;)</option>
              {/* Add other options as necessary */}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Point</label>
            <input
              type="number"
              name="point"
              value={form.point}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Enabled</label>
            <input
              type="checkbox"
              name="enabled"
              checked={form.enabled}
              onChange={handleInputChange}
              className="mt-1 p-2"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Required Action</label>
            <div className="flex items-center mt-1">
              <label className="mr-4 flex items-center">
                <input
                  type="radio"
                  name="action"
                  value="close"
                  checked={form.action === 'close'}
                  onChange={handleInputChange}
                  className="mr-1"
                />
                Close Positions
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="action"
                  value="cover"
                  checked={form.action === 'cover'}
                  onChange={handleInputChange}
                  className="mr-1"
                />
                Cover Positions
              </label>
            </div>
          </div>
        </div>
      </div>

      <Table columns={logsColumns} data={logsData} title="Cockpit Logs" />

      <div className="flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-4">
  <button
    onClick={addRule}
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full md:w-auto"
  >
    Add
  </button>
  <button
    onClick={() => updateRule(selectedRuleId)}
    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 w-full md:w-auto"
  >
    Update
  </button>
  <button
    onClick={() => deleteRule(selectedRuleId)}
    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 w-full md:w-auto"
  >
    Delete
  </button>
  <button
    onClick={() => console.log('Closing...')}
    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 w-full md:w-auto"
  >
    Close
  </button>
</div>

    </div>
  );
};

export default LiquidationCockpit;
