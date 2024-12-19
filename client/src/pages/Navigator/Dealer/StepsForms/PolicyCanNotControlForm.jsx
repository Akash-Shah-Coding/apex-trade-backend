import React from 'react'
import Tree from '../../../../components/Tree';

const PolicyCanNotControlForm = (props) => {
  const { title } = props;
  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-6">
        {/* Main Content (Table) */}
        <div className="col-span-full lg:col-span-12 bg-white dark:bg-gray-800 shadow-sm rounded-xl h-fit">
          <header className="px-5 py-4 ">
            <h2 className="font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
            <div className="mb-4 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 justify-between">
                <div className=" dark:border-gray-600 border-gray-700 border bg-white dark:bg-gray-800 shadow-sm rounded-xl p-4 h-fit overflow-auto">
                  <h2 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Can Control Client's Script Policies</h2>
                  <input
                    type="text"
                    placeholder="Enter Policy Name"
                    className="w-fit p-2 mb-4 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                  />
                  <Tree />
                </div>
                <div className=" dark:border-gray-600 border-gray-700 border bg-white dark:bg-gray-800 shadow-sm rounded-xl p-4 h-fit overflow-auto">
                  <h2 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Can Control Dealer's Script Policies</h2>
                  <input
                    type="text"
                    placeholder="Enter Policy Name"
                    className="w-fit p-2 mb-4 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                  />
                  <Tree />
                </div>
                <div className=" dark:border-gray-600 border-gray-700 border bg-white dark:bg-gray-800 shadow-sm rounded-xl p-4 h-fit overflow-auto">
                  <h2 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Can Control Agent Comminsions Policies</h2>
                  <input
                    type="text"
                    placeholder="Enter Policy Name"
                    className="w-fit p-2 mb-4 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                  />
                  <Tree />
                </div>
                <div className=" dark:border-gray-600 border-gray-700 border bg-white dark:bg-gray-800 shadow-sm rounded-xl p-4 h-fit overflow-auto">
                  <input type="checkbox" className="form-checkbox" />  Select/UnselectAll <br />
                  <input type="checkbox" className="form-checkbox" />  DEMO <br />

                </div>
                <div className=" dark:border-gray-600 border-gray-700 border bg-white dark:bg-gray-800 shadow-sm rounded-xl p-4 h-fit overflow-auto">
                  <h2 className="font-semibold text-gray-800 dark:text-gray-100 mb-4"> Can Control Robo Policies</h2>
                  <input
                    type="text"
                    placeholder="Search by Policy Name"
                    className="w-fit p-2 mb-4 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                  />
                </div>
                <div className=" dark:border-gray-600 border-gray-700 border bg-white dark:bg-gray-800 shadow-sm rounded-xl p-4 h-fit overflow-auto">
                  <h2 className="font-semibold text-gray-800 dark:text-gray-100 mb-4"> Can Control Account Copier Policies</h2>
                  <input
                    type="text"
                    placeholder="Search by Policy Name"
                    className="w-fit p-2 mb-4 border rounded-md dark:bg-gray-700 dark:text-gray-100"
                  />
                </div>
              </div>
            </div>
          </header>

        </div>
      </div>
    </>
  )
}

export default PolicyCanNotControlForm