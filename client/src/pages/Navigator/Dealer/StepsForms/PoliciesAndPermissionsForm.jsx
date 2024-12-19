import React, { useState } from 'react'
import Tree from '../../../../components/Tree';

const PoliciesAndPermissionsForm = (props) => {
  const { title } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDealerTree, setSelectedDealerTree] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };


  const handleTreeSelectionChange = (selection) => {
    setSelectedDealerTree(selection);
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-6">
        {/* Main Content (Table) */}
        <div className="col-span-full lg:col-span-12 bg-white dark:bg-gray-800 shadow-sm rounded-xl h-fit">
          <header className="px-5 py-4 ">
            <h2 className="font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
            <div className="mb-4 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Generic Policy</label>
                  <select
                    name="operation"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
                  >
                    <option>Generic Policy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Script Policy</label>
                  <select
                    name="operation"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
                  >
                    <option>Script Policy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Client's Tree</label>
                  <select
                    name="operation"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
                  >
                    <option>India</option>
                    <option>Afghanistan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                    Dealer's Tree
                  </label>
                  {/* Custom dropdown */}
                  <div
                    className="mt-1 block py-2 px-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100 cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    {selectedDealerTree.length > 0 ? selectedDealerTree.join(', ') : 'Select Dealer’s Tree'}
                  </div>

                  {/* Dropdown content */}
                  {isDropdownOpen && (
                    <div className="absolute mt-1 w-fit bg-white border border-gray-300 rounded-md shadow-lg z-10 dark:bg-gray-700 dark:border-gray-700">
                      <div className="p-2 max-h-64 overflow-y-auto">
                        <Tree onSelectionChange={handleTreeSelectionChange} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>

        </div>
      </div>
    </>
  )
}

export default PoliciesAndPermissionsForm