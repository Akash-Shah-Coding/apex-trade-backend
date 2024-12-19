import React from 'react'
import Report from '../Report'

const dropdownData = [
  { id: 'script', label: 'Script', options: ['ALL', 'Apex Brokers (Group)', 'MCX (Group)', 'MCX mini (Group)','NSE (Group)', 'NSE Aug (Group)', 'NSE Sep (Group)', 'NSE-MCX (Group)'] },
  { id: 'ordertype', label: 'Order Type', options: ['ALL', 'Buy limit', 'Buy stop', 'Sell limit', 'Sell Stop', 'SL/TP'] },
];

const checkboxData = [
  { id: 'single', label: 'Single', checked: false, onChange: () => {} },
  { id: 'with-demo-accounts', label: 'With Demo Accounts', checked: true, onChange: () => {} }
];

const PendingOrdersReport = () => {
  return (
    <>
    <Report heading="Orders Report" dropdownData={dropdownData} checkboxData={checkboxData} />
    </>
  )
}

export default PendingOrdersReport