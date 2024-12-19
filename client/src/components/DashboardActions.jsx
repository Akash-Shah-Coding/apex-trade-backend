import React, { useState } from 'react'
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';

const DashboardActions = ({ Title, action, setIsModalOpen }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
            <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">{Title}</h1>
            </div>

            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Check if action is an array */}
                {Array.isArray(action) ? (
                    <div className="relative">
                        <button
                            className="flex items-center btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                            onClick={handleDropdownClick}
                        >
                            <span>{isDropdownOpen ? 'Close Dropdown' : 'Open Dropdown'}</span>
                            <svg
                                className={`w-4 h-4 ml-2 transition-transform transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
                                {action.map((item, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ) : action ? (
                    <button
                        className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                        onClick={() => setIsModalOpen(true)}
                    >
                        {action}
                    </button>
                ) : ''}
            </div>
        </div>
    );
};

export default DashboardActions;