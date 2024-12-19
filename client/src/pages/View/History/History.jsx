import React, { useState } from 'react';
import Table from '../../../common/Table';
import DashboardActions from '../../../components/DashboardActions';
import { HistoryData } from './histoyrData';


const History = () => {
    const [selectedData, setSelectedData] = useState(HistoryData);

    const columns = [
        { header: 'Time', accessor: 'time' },
        { header: 'Script', accessor: 'script' },
        { header: 'Id', accessor: 'id' },
        { header: 'History Type', accessor: 'history_type' },
        { header: 'Type', accessor: 'type' },
        { header: 'Amount', accessor: 'amount' },
        { header: 'Open Price', accessor: 'open_price' },
        { header: 'SL', accessor: 'sl' },
        { header: 'TP', accessor: 'tp' },
        // { header: 'Time', accessor: 'time' },
        { header: 'Time Diff', accessor: 'time_diff' },
        { header: 'Close Price', accessor: 'close_price' },
        { header: 'Commission', accessor: 'commission' },
        { header: 'Open Com.', accessor: 'open_com.' },
        { header: 'PnL', accessor: 'pnL' },
        { header: 'Open Tkt', accessor: 'open_Tkt' },
        { header: 'Comment', accessor: 'comment' },
      
      ];
      
    
  return (
    <div>
          <DashboardActions Title="History" action="Add" />
          <Table columns={columns} data={selectedData} title="Selected Scripts" showCheckbox={true}  />
    </div>
  )
}

export default History;