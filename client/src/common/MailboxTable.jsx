import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import TableFilter from './TableFilter';

function MailboxTable({ data, currentPage, totalPages, onPageChange, onMailClick }) {
    // const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages = [1, 2, 3]

    return (
        <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
            <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">Mailbox ({data.length})</h2>
            </header>
            <TableFilter/>
            <div className="p-3">
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full dark:text-gray-300">
                        {/* Table header */}
                        <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
                            <tr>
                                <th className="p-2">
                                    <input type="checkbox" className="form-checkbox" style={{ marginLeft: '-5px' }} />
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-left">From</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-left">Subject</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-left">Time</div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
                            {data.map((row, index) => (
                                <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700/30 cursor-pointer"  onClick={() => onMailClick(row)}>
                                    <td className="p-2">
                                        <input type="checkbox" className="form-checkbox" />
                                    </td>
                                    <td className="p-2 flex items-center">
                                        {/* Avatar */}
                                        <div className="w-10 h-10 flex items-center justify-center bg-gray-300 dark:bg-gray-600 rounded-full text-white font-semibold">
                                            {row.from.charAt(0)}
                                        </div>
                                        <div className="ml-3 text-gray-800 dark:text-gray-100">{row.from}</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="flex flex-col">
                                            <span className={`font-semibold ${row.unread ? 'text-black dark:text-white' : 'text-gray-800 dark:text-gray-400'}`}>
                                                {row.headline}
                                            </span>
                                            <span className="text-xs text-gray-500 dark:text-gray-500 truncate">
                                                {row.preview || 'This is a short preview of the email content...'}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-gray-800 dark:text-gray-100">{row.time}</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-gray-200 bg-white dark:bg-gray-800 px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        Next
                    </button>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Showing <span className="font-medium">{currentPage}</span> of{' '}
                            <span className="font-medium">{totalPages}</span> pages
                        </p>
                    </div>
                    <div>
                        <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                            <button
                                onClick={() => onPageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                            </button>
                            {pages.map((page) => (
                                <button
                                    key={page}
                                    onClick={() => onPageChange(page)}
                                    aria-current={page === currentPage ? 'page' : undefined}
                                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${page === currentPage ? 'bg-indigo-600 text-white dark:bg-indigo-500 dark:text-gray-200' : 'text-gray-900 dark:text-gray-100 ring-1 ring-inset ring-gray-300 dark:ring-gray-600'} hover:bg-gray-50 dark:hover:bg-gray-600 focus:z-20 focus:outline-offset-0`}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                onClick={() => onPageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MailboxTable;
