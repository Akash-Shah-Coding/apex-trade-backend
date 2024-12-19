import React from 'react'
import Report from '../Report'

const dropdownData = [
  { id: 'status', label: 'Status', options: ['ALL', 'Pending', 'Accepted', 'Conditional', 'Rejected'] },];

const checkboxData = [
  { id: 'single', label: 'Single', checked: false, onChange: () => { } },
];

const LoanRequestsReport = () => {
  return (
    <>
      <Report heading="Loan Requests Report" dropdownData={dropdownData} checkboxData={checkboxData} />
    </>
  )
}

export default LoanRequestsReport