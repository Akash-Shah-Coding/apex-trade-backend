import React, { useState } from 'react';

const YesNoPropertiesForm = (props) => {
  const { title } = props;

  // Define the list of checkbox labels
  const checkboxItems = [
    'Department',
    'Force Change Password',
    'Multi Session',
    'Can Transfer Money',
    'Can Transfer Position',
    'Consider Entry as Market',
    'Validate Money Before Close',
    'Enable Entry Orders'
  ];

  // Use state to keep track of checked values (true/false)
  const [checkedItems, setCheckedItems] = useState(
    checkboxItems.reduce((acc, item) => ({ ...acc, [item]: false }), {})
  );

  // Handle checkbox change
  const handleCheckboxChange = (label) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [label]: !prevState[label] // Toggle the checked state
    }));
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-6">
        {/* Main Content (Table) */}
        <div className="col-span-full lg:col-span-12 bg-white dark:bg-gray-800 shadow-sm rounded-xl h-fit">
          <header className="px-5 py-4 ">
            <h2 className="font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
            <div className="mb-4 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {checkboxItems.map((label) => (
                  <div className="mb-4" key={label}>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={checkedItems[label]} // Bind checked state
                        onChange={() => handleCheckboxChange(label)} // Handle change
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-700"
                      />
                      <label
                        className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        {label}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default YesNoPropertiesForm;
