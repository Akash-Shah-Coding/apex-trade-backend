import React, { useState } from 'react';
import Table from '../../../common/Table';

const SessionMonitor = () => {
  const [data, setData] = useState([
    { address: '192.168.1.1', actions: 'Announce Message', enabled: 'Yes' },
    { address: '10.0.0.2', actions: 'Announce Message', enabled: 'No' },
    { address: '172.16.0.5', actions: 'Announce Message', enabled: 'Yes' },
    { address: '192.168.100.100', actions: 'Announce Message', enabled: 'No' },
    { address: '10.1.1.1', actions: 'Announce Message', enabled: 'Yes' },
  ]);

  const [form, setForm] = useState({
    address: '',
    action: 'Announce Message',
    enabled: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleAdd = () => {
    setData([...data, { ...form, enabled: form.enabled ? 'Yes' : 'No' }]);
    setForm({ address: '', action: 'Announce Message', enabled: true });
  };

  const handleUpdate = () => {
    setData(data.map(item => item.address === form.address ? { ...form, enabled: form.enabled ? 'Yes' : 'No' } : item));
  };

  const handleDelete = () => {
    setData(data.filter(item => item.address !== form.address));
  };

  const columns = [
    { header: 'Address', accessor: 'address' },
    { header: 'Action', accessor: 'actions' },
    { header: 'Enabled', accessor: 'enabled' },
  ];

  return (
    <div className="p-5 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Session Monitor Cockpit</h2>
        <div className="mb-6">
          <Table columns={columns} data={data} title="Sessions Addresses" />
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Manage Sessions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleInputChange}
                className="w-full p-2 border-none rounded dark:bg-gray-700 dark:text-gray-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">Action</label>
              <select
                name="action"
                value={form.action}
                onChange={handleInputChange}
                className="w-full p-2 border-none rounded dark:bg-gray-700 dark:text-gray-300"
              >
                <option value="Announce Message">Announce Message</option>
                <option value="Announce Message">Disconnect Session</option>
                <option value="Announce Message">Both</option>
              </select>
            </div>
            <div className="flex items-end">
              <label className="block text-gray-700 dark:text-gray-300 mb-1">Enabled</label>
              <input
                type="checkbox"
                name="enabled"
                checked={form.enabled}
                onChange={handleInputChange}
                className="ml-2 mb-2"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <button onClick={handleAdd} className="bg-blue-500 text-white p-2 rounded">Add</button>
            <button onClick={handleUpdate} className="bg-yellow-500 text-white p-2 rounded">Update</button>
            <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded">Delete</button>
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-700 pt-4 mt-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            <input type="checkbox" className="mr-2" />
            Alert me when different clients login from same IP Address
          </label>
        </div>
      </div>
    </div>
  );
};

export default SessionMonitor;
