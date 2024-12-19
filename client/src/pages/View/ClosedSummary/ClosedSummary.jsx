import React, { useState } from 'react';
import DashboardActions from '../../../components/DashboardActions';
import Table from '../../../common/Table';
import {closedSummaryData} from './closedSummaryData';

const ClosedSummary = () => {
  const [selectedData, setSelectedData] = useState(closedSummaryData);

  const getClassName = (column, value) => {
    if (column === 'LOW') {
      return 'text-red-500'; // Always red for Low column
    }
    if (column === 'BID') {
      return 'text-blue-500'; // Always blue for Bid column
    }
    if (value > 0) {
      return 'text-green-500'; // Profit
    } else if (value < 0) {
      return 'text-red-500'; // Loss
    } else {
      return 'text-yellow-500'; // Neutral
    }
  };

  const columns = [
    {header: 'Script', accessor: 'script' },
    {header: 'Deals', accessor: 'deals' },
    {header: 'Buy Amount', accessor: 'buyAmount' },
    {header: 'Buy Open', accessor: 'buyOpen' },
    {header: 'Buy Close', accessor: 'buyClose' },
    {header: 'Ref.Buy Close', accessor: 'RefBuyClose' },
    {header: 'Buy Pnl', accessor: 'buyPnl', getClassName },
    {header: 'Sell Amount', accessor: 'SellAmount' },
    {header: 'Sell Open', accessor: 'sellOpen' },
    {header: 'Sell Close', accessor: 'sellClose' },
    {header: 'Ref.Sell Close', accessor: 'refSellClose' },
    {header: 'Sell Pnl', accessor: 'sellPnl' , getClassName },
    {header: 'Net Amount', accessor: 'netAmount' },
    {header: 'Net Amount(BR)', accessor: 'netAmount(BR)' ,getClassName},
    {header: 'Net Amount(SB)', accessor: 'netAmount(SB)',getClassName },
    {header: 'Net Pnl', accessor: 'netPnl' , getClassName },
    {header: 'Net Pnl(BR)', accessor: 'netPnl(BR)',getClassName },
    {header: 'Net Pnl(SB)', accessor: 'netPnl(SB)' , getClassName },

  ];

  return (
    <div>
        <DashboardActions Title="Closed Summary" action="Add" />
        <Table columns={columns} data={selectedData} title="Selected Scripts" />
    </div>
  );
}

export default ClosedSummary;
