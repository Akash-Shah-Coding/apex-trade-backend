import React from 'react'
// import DropdownRowTable from '../../../../common/DropdownRowTable';
import Table from '../../../../common/Table';
import { DealerGenericColumns, DealerGenericData } from '../dealerPoliciesData';
import Tree from '../../../../components/Tree';


const DealerGenerics = () => {

    function toggleDropdown() {
        const dropdown = document.getElementById("filterDropdown");
        dropdown.classList.toggle("hidden");
    }

    
    return (
        <>
            <div className="grid grid-cols-12 gap-6 mt-6">
                {/* SideSearchbar */}
                <div className="col-span-full lg:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl p-4 h-fit overflow-auto">
                    <h2 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Search Policy</h2>
                    <input
                        type="text"
                        placeholder="Enter Policy Name"
                        className="w-full p-2 mb-4 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                    />
                    <Tree />
                </div>

                {/* Main Content (Table) */}
                <div className="col-span-full lg:col-span-8 bg-white dark:bg-gray-800 shadow-sm rounded-xl h-fit">
                    <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Dealer Generic Policies</h2>
                    </header>
                    <div className="p-3 overflow-auto">
                        {/* Policy Name and Parent Selection */}
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 mt-2">
                            <input
                                type="text"
                                placeholder="Enter Policy Name"
                                className="w-full md:w-auto p-2 border rounded-md dark:bg-gray-800 dark:text-gray-100"
                            />
                            <select className="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-gray-100">
                                <option>Parent</option>
                            </select>
                            <div className="relative inline-block text-left">
                                <button
                                    id="filterDropdownButton"
                                    onClick={() => toggleDropdown()}
                                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    type="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="h-4 w-4 mr-2 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Filter
                                    <svg
                                        className="-mr-1 ml-1.5 w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            clipRule="evenodd"
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        />
                                    </svg>
                                </button>

                                <div
                                    id="filterDropdown"
                                    className="hidden absolute right-0 mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-800 dark:divide-gray-600 dark:border-gray-600"
                                >
                                    <div className="py-1">
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                                        >
                                            Home
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                                        >
                                            View
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                                        >
                                            Administration
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 dark:bg-gray-700"
                                />
                                <span className="text-sm text-gray-600 dark:text-gray-300">Group?</span>
                            </label>
                        </div>

                        {/* Table */}
                        <Table columns={DealerGenericColumns} data={DealerGenericData} showtableFilter={false} />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-4 p-4">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full md:w-auto"
                        >
                            Add
                        </button>
                        <button
                            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 w-full md:w-auto"
                        >
                            Update
                        </button>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 w-full md:w-auto"
                        >
                            Delete
                        </button>
                        <button
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 w-full md:w-auto"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DealerGenerics