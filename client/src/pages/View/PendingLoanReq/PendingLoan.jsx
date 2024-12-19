import React from 'react'
import {loanData, columns, buttons} from '../PendingWithdrawReq/dummyData'
import Table from '../../../common/Table'

const PendingLoan = () => {
  return (
    <>
    <Table
     columns={columns}
     data={loanData}
     title="Pending Loan Requests"
     buttons={buttons}
     showCheckbox={true}  
    />
    </>
  )
}

export default PendingLoan