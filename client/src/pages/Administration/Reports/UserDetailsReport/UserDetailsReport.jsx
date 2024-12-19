import React from 'react'
import Report from '../Report'

const checkboxData = [
  { id: 'single', label: 'Single', checked: false, onChange: () => {} },
  { id: 'with-demo-accounts', label: 'With Demo Accounts', checked: true, onChange: () => {} }
];

const UserDetailsReport = () => {
  return (
    <>
    <Report heading="Users Details Report" needDate="false" checkboxData={checkboxData}/>
    </>
  )
}

export default UserDetailsReport