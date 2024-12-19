import React from 'react'
import {depositData, columns, buttons} from '../PendingWithdrawReq/dummyData'
import Table from '../../../common/Table'


const PendingDeposit = () => {
  return (
    <>
    <Table
     columns={columns}
     data={depositData}
     title="Pending Deposit Requests"
     buttons={buttons}
     showCheckbox={true} 
    />
    </>
  )
}

export default PendingDeposit