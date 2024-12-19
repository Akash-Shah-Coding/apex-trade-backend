import React from 'react'
import Report from '../Report'

const dropdownData = [
  { id: 'status', label: 'Status', options: ['ALL', 'Pending', 'Accepted','Conditional','Rejected'] },
  { id: 'ip', label: 'IP', options: ['ALL']},   
  { id: 'actiontype', label: 'Action Type', options: ['ALL','Create Amount Unit','Update Amount Unit','Delete Amount Unit']}
];

const checkboxData = [
  { id: 'single', label: 'Single', checked: false, onChange: () => {} },
  { id: 'with-demo-accounts', label: 'With Demo Accounts', checked: true, onChange: () => {} }
];

const JournalReport = () => {
  return (
    <>
     <Report heading="Journal Report" dropdownData={dropdownData}  checkboxData={checkboxData}/>
    </>
  )
}

export default JournalReport