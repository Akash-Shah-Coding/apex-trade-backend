import React, { useState } from 'react';
import Table from '../../../common/Table';
import DashboardActions from '../../../components/DashboardActions';
import { ordersData } from './ordersData';



const Orders = () => {
  const [selectedData , setSelectedData] = useState(ordersData)
  const columns = [
    { header: 'Script', accessor: 'script' },
    { header: 'Order Id', accessor: 'orderId' },
    { header: 'Date/Time', accessor: 'dateTime' },
    { header: 'Type', accessor: 'type' },
    { header: 'Amount', accessor: 'amount' },
    { header: 'Pending Price', accessor: 'pendingprice' },
    { header: 'Current Price', accessor: 'currentprice' },
    { header: 'SL', accessor: 'sl' },
    { header: 'TP', accessor: 'tp' },
    { header: 'Comment', accessor: 'comment' },
    { header: 'Expiry Date', accessor: 'expiryDate' },
  ];
  return (
    <div>
       <DashboardActions Title="Orders" action="Add" />
       <Table columns={columns} data={selectedData} title="Selected Scripts" showCheckbox={true}  />
    </div>
  )
}

export default Orders;