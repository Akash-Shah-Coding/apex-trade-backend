import React from 'react'
import Report from '../Report'

const dropdownData = [
  { id: 'action', label: 'Action', options: ['ALL', 'New', 'Update', 'Delete'] },
  { id: 'trxtype', label: 'Trx Type', options: ['ALL', 'Pending', 'Close', 'Money', 'New', 'SLTP', 'Withdraw Requests', 'Deposite Requests', 'Loan Requests'] },
  { id: 'trx-detail', label: 'Trx Type Detail', options: ['ALL'] },
  { id: 'ticket', label: 'ticket', options: ['ALL'] },
  { id: 'ip', label: 'IP', options: ['ALL', 'Server'] },
  { id: 'script', label: 'Script', options: ['ALL', 'Apex Brokers (Group)', 'MCX (Group)', 'MCX mini (Group)','NSE (Group)', 'NSE Aug (Group)', 'NSE Sep (Group)', 'NSE-MCX (Group)'] },
  { id: 'createdby', label: 'Created By', options: ['ALL', 'DemoId1', 'DemoId2'] },
  { id: 'method', label: 'Method', options: ['ALL', 'Canceled', 'Entry', 'Filled', 'Hedge', 'Liquidation', 'Live', 'Manual', 'SLTP', 'Transfer', 'Checkout', 'Charges', 'Settlement', 'Expiry','Money Settlement', 'Robo'] },
];

const checkboxData = [
  { id: 'single', label: 'Single', checked: false, onChange: () => {} },
  { id: 'with-demo-accounts', label: 'With Demo Accounts', checked: true, onChange: () => {} }
];

const TransactionsReport = () => {
  return (
    <>
    <Report heading = "Transactions Report" dropdownData={dropdownData} checkboxData={checkboxData} />
    </>
  )
}

export default TransactionsReport