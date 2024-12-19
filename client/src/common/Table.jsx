import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import TableFilter from './TableFilter';
import useSearch from '../hooks/useSearch'; 
import Pagination from '../components/Pagination';
import Loader from './Loader';

const Table = ({ columns, data, title, buttons = [], showCheckbox = false, onToggleReadStatus, itemsPerPage, showtableFilter=true }) => {

  const {
    searchQuery,
    setSearchQuery,
    filteredData,
    totalFilteredPages,
    currentPageValid,
    handlePageChange,
  } = useSearch(data, columns.map((col) => col.accessor), itemsPerPage?itemsPerPage : 5);

  return (
    <div className="col-span-full xl:col-span-12 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
      </header>
      {showtableFilter && <TableFilter searchQuery={searchQuery} onSearch={setSearchQuery} />}
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50">
              <tr>
                {showCheckbox && (
                  <th className="p-2">
                    <input type="checkbox" className="form-checkbox" style={{ marginLeft: '-5px' }} />
                  </th>
                )}
                {columns.map((column) => (
                  <th key={column.header} className="p-2 whitespace-nowrap">
                    <div className={`font-semibold text-left ${column.accessor === 'action' ? 'text-center ml-6' : ''}`}>
                      {column.header}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
              {filteredData.length > 0 ? (
                filteredData.map((row, index) => (
                  <tr key={index}>
                    {showCheckbox && (
                      <td className="p-2">
                        <input type="checkbox" className="form-checkbox" />
                      </td>
                    )}
                    {columns.map((column) => (
                      <td
                        key={column.accessor}
                        className={`p-2 whitespace-nowrap ${column.getClassName ? column.getClassName(column.accessor, row[column.accessor]) : ''} ${column.truncate ? 'truncate' : ''}`}
                      >
                        <div className="text-left">
                          {column.accessor === 'read' ? (
                            <input
                              type="checkbox"
                              checked={row[column.accessor]}
                              onChange={() => onToggleReadStatus(index)}
                              className="form-checkbox"
                            />
                          ) : column.accessor === 'action' ? (
                            <div className="flex justify-end space-x-2">
                              {buttons.map((button, i) => (
                                <button
                                  key={i}
                                  className={`btn ${button.className}`}
                                  onClick={() => button.onClick(row)}
                                >
                                  {button.label}
                                </button>
                              ))}
                            </div>
                          ) : column.accessor === 'checkbox' ? (
                            <div className="flex justify-start ml-6">
                              <input type="checkbox" className="form-checkbox" style={{ marginLeft: '-5px' }} checked={row.enabled} />
                            </div>
                          ) : (
                            row[column.accessor]
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length + (showCheckbox ? 1 : 0)} className="text-center p-4">
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {/* {filteredData.length > itemsPerPage && (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white dark:bg-gray-800 px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              onClick={() => handlePageChange(currentPageValid - 1)}
              disabled={currentPageValid === 1}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(currentPageValid + 1)}
              disabled={currentPageValid === totalFilteredPages}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Showing <span className="font-medium">{currentPageValid}</span> of{' '}
                <span className="font-medium">{totalFilteredPages}</span> pages
              </p>
            </div>
            <div>
              <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                <button
                  onClick={() => handlePageChange(currentPageValid - 1)}
                  disabled={currentPageValid === 1}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                </button>
                {Array.from({ length: totalFilteredPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    aria-current={page === currentPageValid ? 'page' : undefined}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${page === currentPageValid
                        ? 'bg-indigo-600 text-white dark:bg-indigo-500 dark:text-gray-200'
                        : 'text-gray-900 dark:text-gray-100 ring-1 ring-inset ring-gray-300 dark:ring-gray-600'
                      } hover:bg-gray-50 dark:hover:bg-gray-600 focus:z-20 focus:outline-offset-0`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPageValid + 1)}
                  disabled={currentPageValid === totalFilteredPages}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      )} */}
{/* 
{filteredData.length > itemsPerPage && ( */}
        <Pagination
          currentPageValid={currentPageValid}
          totalFilteredPages={totalFilteredPages}
          handlePageChange={handlePageChange}
        />
      {/* )} */}
    </div>
  );
};

export default Table;
