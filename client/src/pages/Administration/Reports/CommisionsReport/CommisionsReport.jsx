import React from 'react'
import Report from '../Report'


const dropdownData = [
  { id: 'script', label: 'Script', options: ['ALL', 'Apex Brokers (Group)', 'MCX (Group)', 'MCX mini (Group)', 'NSE (Group)', 'NSE Aug (Group)', 'NSE Sep (Group)', 'NSE-MCX (Group)'] },
];

const checkboxData = [
  { id: 'single', label: 'Single', checked: false, onChange: () => {} },
  { id: 'with-demo-accounts', label: 'With Demo Accounts', checked: true, onChange: () => {} },
  { id: 'fullzero', label: 'Ignore Full Zero Commission', checked: false, onChange: () => {} },
  { id: 'zeroopen', label: 'Ignore Zero Open Commission', checked: false, onChange: () => {} },
  { id: 'zeroclose', label: 'Ignore Zero Close Commission', checked: false, onChange: () => {} },
];

const CommisionsReport = () => {
  return (
    <>
        <Report heading="Commisions Report" dropdownData={dropdownData} checkboxData={checkboxData} /> 
    </>
  )
}

export default CommisionsReport