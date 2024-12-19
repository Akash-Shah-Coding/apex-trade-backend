import React from 'react'
import Report from '../Report'

const checkboxData = [
  { id: 'single', label: 'Single', checked: false, onChange: () => {} },
  { id: 'with-demo-accounts', label: 'With Demo Accounts', checked: true, onChange: () => {} }
];

const MoneyTransactionsReport = () => {
  return (
    <>
    <Report heading="Money Transactions Reports" checkboxData={checkboxData} />
    </>
  )
}

export default MoneyTransactionsReport