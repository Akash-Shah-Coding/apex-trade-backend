import React, { useState } from 'react';

const personalInfoFields = [
  { label: "First Name", type: "text", placeholder: "First Name" },
  { label: "Last Name", type: "text", placeholder: "Last Name" },
  { label: "Username", type: "text", placeholder: "Username" },
  { label: "Email", type: "email", placeholder: "Email" },
  { label: "Mobile", type: "text", placeholder: "Mobile" },
  { label: "Country", type: "select", options: ["India", "USA", "UK"] },
  { label: "Address", type: "text", placeholder: "Address" },
  { label: "Tele Pass", type: "text", placeholder: "Tele Pass" }
];

const passwordFields = [
  { label: "Current Password", type: "password", placeholder: "Current Password" },
  { label: "New Password", type: "password", placeholder: "New Password" },
  { label: "Confirm Password", type: "password", placeholder: "Confirm Password" }
];

const passwordTypes = [
  "Main Password",
  "Second Password",
  "Investor Password"
];

const EditProfileForm = () => {

  return (
      <div className=" bg-gray-100 dark:bg-gray-900 min-h-screen flex justify-center items-center">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-7xl md:mb-20 ">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Edit Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {personalInfoFields.map((field, index) => (
              <div key={index}>
                <label className="block text-gray-700 dark:text-gray-300 mb-1">{field.label}</label>
                {field.type === 'select' ? (
                  <select className="w-full p-2 border-none rounded dark:bg-gray-700 dark:text-gray-300">
                    {field.options.map(option => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <input 
                    type={field.type} 
                    className="w-full p-2 border-none rounded dark:bg-gray-700 dark:text-gray-300 focus:outline-none" 
                    placeholder={field.placeholder} 
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mb-4">
            <p className="text-gray-700 dark:text-gray-300 mb-3 mt-10">Two-factor authentication is not enabled yet.</p>
            <button className="bg-green-500 text-white p-2 rounded">Enable two-factor authentication</button>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Change Password</h3>
            <div className="flex flex-wrap space-x-0 md:space-x-4 mb-4">
              {passwordTypes.map((type, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input type="radio" name="passwordType" className="form-radio dark:bg-gray-700 dark:text-gray-300" />
                  <span className="text-gray-700 dark:text-gray-300">{type}</span>
                </label>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {passwordFields.map((field, index) => (
                <div key={index}>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1">{field.label}</label>
                  <input 
                    type={field.type} 
                    className="w-full p-2 border-none rounded dark:bg-gray-700 dark:text-gray-300 focus:outline-none" 
                    placeholder={field.placeholder} 
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button className="bg-blue-500 text-white p-2 rounded">Save</button>
          </div>
        </div>
      </div>
  );
};

export default EditProfileForm;
