import React from 'react'
import DropdownRowTable from '../../../../common/DropdownRowTable';
import { Agentdata, Agentcolumns } from '../data';
import Tree from '../../../../components/Tree';

const AgentCommision = () => {
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
                        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Agent Commission Policies</h2>
                    </header>
                    <div className="p-3 overflow-auto">
                        {/* Policy Name and Parent Selection */}
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
                            <input
                                type="text"
                                placeholder="Enter Policy Name"
                                className="w-full md:w-auto p-2 border rounded-md dark:bg-gray-800 dark:text-gray-100"
                            />
                            <select className="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-gray-100">
                                <option>Parent</option>
                            </select>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-4 w-4 dark:bg-gray-700"
                                />
                                <span className="text-sm text-gray-600 dark:text-gray-300">Group?</span>
                            </label>
                        </div>

                        {/* Table */}
                        <DropdownRowTable columns={Agentcolumns} rows={Agentdata} />
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

export default AgentCommision