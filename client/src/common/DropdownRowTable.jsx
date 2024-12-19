import React, { useState } from 'react';

const DropdownRowTable = ({ columns, rows }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownVisible(isDropdownVisible === index ? null : index);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full dark:text-gray-300">
        <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="p-2">
                <div className="font-semibold text-center">{col}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
          {rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <tr
                className="border-b border-gray-200 dark:border-gray-700 cursor-pointer"
                onClick={() => toggleDropdown(rowIndex)}
              >
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className={`p-2 ${col === 'scriptName' || col === 'Script' ? 'text-left' : 'text-center'}`}>
                    <div className="flex items-center">
                      {(col === 'scriptName' || col === 'Script') && (
                        <svg
                          className={`w-4 mx-2 h-4 ml-2 transition-transform transform ${isDropdownVisible === rowIndex ? 'rotate-0' : 'rotate-180'
                            }`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                      {typeof row[col] === 'boolean' ? (
                        <input type="checkbox" className='form-checkbox ml-7' checked={row[col]} readOnly />
                      ) : (
                        <span>{row[col]}</span>
                      )}
                    </div>
                  </td>
                ))}
              </tr>

              {isDropdownVisible === rowIndex && (
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td colSpan={columns.length} className="p-2">
                    <div className="p-4 border rounded-md bg-gray-100 dark:bg-gray-800">
                      <div className="flex flex-col space-y-4">
                        {columns.map((col, colIndex) => (
                          <div key={colIndex}>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                              {col.replace(/([A-Z])/g, ' $1').trim()}
                            </label>
                            <select className="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-gray-100">
                              <option>{row[col]}</option>
                              <option>{row[col]}</option>
                            </select>
                          </div>
                        ))}
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DropdownRowTable;
