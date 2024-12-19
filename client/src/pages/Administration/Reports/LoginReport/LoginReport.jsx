import React from 'react'
import Report from '../Report'

const dropdownData = [
  { id: 'ip', label: 'IP', options: ['ALL'] },];

const checkboxData = [
  { id: 'single', label: 'Single', checked: false, onChange: () => { } },
  { id: 'with-demo-accounts', label: 'With Demo Accounts', checked: true, onChange: () => { } }
];
const LoginReport = () => {
  return (
    <>
      <Report heading="Login History Report" dropdownData={dropdownData} checkboxData={checkboxData} />
    </>
  )
}

export default LoginReport