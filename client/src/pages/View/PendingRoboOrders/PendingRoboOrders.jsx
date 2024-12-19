import React, { useState } from 'react';
import Table from '../../../common/Table';
import DashboardActions from '../../../components/DashboardActions';
import { pendingRoboOrdersData } from './pendingRoboOdersData';

const PendingRoboOrders = () => {
  const [selectedData , setSelectedData] = useState(pendingRoboOrdersData)
  
  const columns = [
    { header: 'Id', accessor: 'id' },
    { header: 'Account', accessor: 'account' },
    { header: 'Date/Time', accessor: 'date' },
    { header: 'Script', accessor: 'script' },
    { header: 'Type', accessor: 'type' },
    { header: 'Type Details', accessor: 'type_details' },
    { header: 'Amount', accessor: 'amount' },
    { header: 'Price', accessor: 'price' },
    { header: 'Mode(value/markup)', accessor: 'mode'},
    { header: 'Method', accessor: 'method' },
    { header: 'Open Position', accessor: 'open_position' },
    { header: 'Commission', accessor: 'commission' },
    { header: 'Profit', accessor: 'profit' },


  ];

  return (
    <div>
         <DashboardActions Title="Pending Robo Orders" action="Add" />
         <Table columns={columns} data={selectedData} title="Selected Scripts" />
      
    </div>
  )
}

export default PendingRoboOrders;