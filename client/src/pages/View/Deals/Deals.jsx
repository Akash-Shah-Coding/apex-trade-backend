import React, { useState } from 'react';
import DashboardActions from '../../../components/DashboardActions';
import Table from '../../../common/Table';
import { dealsData } from './dealsData';



const Deals = () => {
  const [selectedData , setSelectedData] = useState(dealsData)
  const columns = [
    { header: 'Script', accessor: 'script' },
    { header: 'TicketId', accessor: 'ticketId' },
    { header: 'Date/Time', accessor: 'date/Time' },
    { header: 'Buy/Sell', accessor: 'buy/Sell' },
    { header: 'Amount', accessor: 'amount' },
    { header: 'Open Price', accessor: 'openPrice' },
    { header: 'Current Price', accessor: 'currentPrice' },
    { header: 'Open Com.', accessor: 'openCom.' },
    { header: 'Used Margin', accessor: 'usedMargin' },
    { header: 'SL', accessor: 'sl' },
    { header: 'TP', accessor: 'tp' },
    { header: 'Pnl', accessor: 'pnl' },
    { header: 'Comment', accessor: 'comment' },
    { header: 'Value', accessor: 'value' },
   
  ];
  

  return (
    <div>
          <DashboardActions Title="Deals" action="Add" />
          <Table columns={columns} data={selectedData} title="Selected Scripts" showCheckbox={true}  />

    </div>
  )
}

export default Deals;