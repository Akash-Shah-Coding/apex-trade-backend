import React from 'react'
import {data, columns, buttons} from './dummyData'
import Table from '../../../common/Table'

const PendingWithdraw = () => {
  return (
    <>
    <Table
     columns={columns}
     data={data}
     title="Pending Withdraw Requests"
     buttons={buttons}
     showCheckbox={true} 
    />
    </>
  )
}

export default PendingWithdraw