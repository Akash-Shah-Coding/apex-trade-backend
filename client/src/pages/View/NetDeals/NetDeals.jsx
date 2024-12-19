import React, { useState } from 'react';
import DashboardActions from '../../../components/DashboardActions';
import { netDealsData } from './netDealsData';
import Table from '../../../common/Table';




const NetDeals = () => {
  const [selectedData , setSelectedData] = useState(netDealsData )
  const columns = [
    { header: 'Script', accessor: 'script' },
    { header: 'Buy Sell', accessor: 'buy_sell' },
    { header: 'Amount', accessor: 'amount' },
    { header: 'Net Hedged', accessor: 'net_hedged' },
    { header: 'Avg Open Price', accessor: 'avg_open_price' },
    { header: 'Current Price', accessor: 'current_price' },
    { header: 'Open Com.', accessor: 'open_com' },
    { header: 'Net Used Margin', accessor: 'net_used_margin' },
    { header: 'PnL', accessor: 'pnl' },
    { header: 'Net Value', accessor: 'net_value' },
    
  ];

  return (
    <div>
       <DashboardActions Title="Net Deals" action="Add" />
       <Table columns={columns} data={selectedData} title="Selected Scripts" />
    </div>
  )
}

export default NetDeals;