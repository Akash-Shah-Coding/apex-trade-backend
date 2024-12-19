import React, { useState, useEffect } from 'react';

const UserForm = ({ user, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    spent: '',
    location: ''
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    console.log("Form ", formData);
  };

  const handleSubmit = (e) => {
    console.log("Form dara", formData);
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Spent</label>
        <input
          type="text"
          name="spent"
          value={formData.spent}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
        />
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="submit"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus:ring-indigo-400"
        >
          Save User
        </button>
      </div>
    </form>
  );
};

export default UserForm;
