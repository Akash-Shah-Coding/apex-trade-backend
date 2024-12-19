import React, { useState } from 'react';
import DashboardActions from '../../../components/DashboardActions';
import Table from '../../../common/Table';
import {openedSummaryData} from './openedSummaryData'

const OpenedSummary = () => {
    const [selectedData, setSelectedData] = useState(openedSummaryData);

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
        { header: 'Script', accessor: 'Script' },
        { header: 'Deals', accessor: 'Deals' },
        { header: 'Buy Amount', accessor: 'BuyAmount' },
        { header: 'Buy Price', accessor: 'BuyPrice' },
        { header: 'Bid', accessor: 'Bid' },
        { header: 'Buy PnL', accessor: 'BuyPnL', getClassName },
        { header: 'Sell Amount', accessor: 'SellAmount' },
        { header: 'Sell Price', accessor: 'SellPrice' },
        { header: 'Ask', accessor: 'Ask' },
        { header: 'Sell PnL', accessor: 'SellPnL', getClassName },
        { header: 'Net Amount', accessor: 'NetAmount' },
        { header: 'Net PnL', accessor: 'NetPnL', getClassName },
        { header: 'Net PnL (SB)', accessor: 'NetPnL_SB', getClassName },
        { header: 'Net Value', accessor: 'NetValue' },
    ];

    return (
        <div>
            <DashboardActions Title="Opened Summary" action="Add" />
            <Table columns={columns} data={selectedData} title="Selected Scripts" />
        </div>
    );
}

export default OpenedSummary;
