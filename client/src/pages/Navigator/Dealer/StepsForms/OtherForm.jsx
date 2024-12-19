import React from 'react'

const OtherForm = (props) => {
  const {title} = props;
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
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">Country</label>
                  <select
                    name="operation"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
                  >
                    <option>India</option>
                    <option>Afghanistan</option>
                    <option>Australia</option>
                    <option>Brazil</option>
                    <option>Canada</option>
                    <option>China</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Japan</option>
                    <option>Mexico</option>
                    <option>Netherlands</option>
                    <option>New Zealand</option>
                    <option>Russia</option>
                    <option>South Africa</option>
                    <option>United Kingdom</option>
                    <option>United States</option>

                    {/* Add other options as necessary */}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                    Whitelist IPs
                  </label>
                  <input
                    name="WhitelistIPs"
                    placeholder="IP1,IP2,IP3"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-100">
                    Second Password
                  </label>
                  <input
                    name="SecondPassword"
                    placeholder="Enter Second Password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-700 dark:text-gray-100"
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

export default OtherForm