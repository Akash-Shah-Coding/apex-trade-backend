import React from 'react';

const ActiveTabs = ({ tabs, activeTab, setActiveTab }) => {
  // Handle tab change for dropdown
  const handleDropdownChange = (event) => {
    setActiveTab(event.target.value);
  };

  return (
    <div className="relative">
      {/* Dropdown for mobile mode */}
      <div className="block md:hidden mb-3">
        <select
          className="block w-full p-2 border rounded bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
          value={activeTab}
          onChange={handleDropdownChange}
        >
          {tabs.map((tab) => (
            <option key={tab.key} value={tab.key}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>

      {/* Tabs for desktop mode */}
      <div className="hidden md:block border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 justify-center">
          {tabs.map((tab) => {
            // Compute class names based on the active tab
            const tabClass = activeTab === tab.key
              ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500'
              : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300';

            const iconClass = activeTab === tab.key
              ? 'text-blue-600 dark:text-blue-500'
              : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300';

            return (
              <li key={tab.key} className="me-2">
                <a
                  href="#"
                  className={`inline-flex items-center justify-center p-4 border-b-2 ${tabClass} rounded-t-lg group`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(tab.key);
                  }}
                >
                  <i className={`fas ${tab.icon} w-4 h-4 me-2 ${iconClass}`} />
                  {tab.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ActiveTabs;
