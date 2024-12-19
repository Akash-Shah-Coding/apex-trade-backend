import React, { useState } from 'react'
import Table from '../../../common/Table'
import DashboardActions from '../../../components/DashboardActions'
import { liveTransactionsData } from './liveTransactionData'


const LiveTransactions = () => {
  const [selectedData , setSelectedData] = useState(liveTransactionsData )
  const columns = [
    { header: 'Ticket', accessor: 'ticket' },
    { header: 'Time', accessor: 'time' },
    { header: 'Action', accessor: 'actions' },
    { header: 'Type', accessor: 'type' },
    { header: 'Type Details', accessor: 'typeDetails' },
    { header: 'Account', accessor: 'account' },
    { header: 'Parent', accessor: 'parent' },
    { header: 'Amount', accessor: 'amount' },
    { header: 'Script', accessor: 'script' },
    { header: 'Price', accessor: 'price' },
    { header: 'Close Price', accessor: 'closePrice' },
    { header: 'Ref Close Price', accessor: 'refClosePrice' },
    { header: 'Open com.', accessor: 'openCom.' },
    { header: 'Close com.', accessor: 'closeCom.' },
    { header: 'Total Pnl', accessor: 'totalPnl' },
    { header: 'SL', accessor: 'sl' },
    { header: 'TP', accessor: 'tp' },
    { header: 'Open Position', accessor: 'openPosition' },
    { header: 'Open Date', accessor: 'openDate' },
    { header: 'Time Diff', accessor: 'timeDiff' },
    { header: 'Expiry Date', accessor: 'expiryDate' },
    { header: 'Method', accessor: 'method' },
    { header: 'CreatedBy', accessor: 'createdBy' },
    { header: 'IP', accessor: 'ip' },
    { header: 'Comment', accessor:'comment' },
    
    
  ];

  return (
          <>
        <DashboardActions Title="Live Transaction" action="Add" />
        <Table columns={columns} data={selectedData} title="Selected Scripts" />
          </>
  )
}

export default LiveTransactions;