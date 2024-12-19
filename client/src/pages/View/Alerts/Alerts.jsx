import React, { useState } from 'react';
import DashboardActions from '../../../components/DashboardActions';
import Table from '../../../common/Table';
import { alertsData } from './alertsData';


const Alerts = () => {
    const [selectedData, setSelectedData] = useState(alertsData);

    const columns = [
        { header: 'ID', accessor: 'id' },
        { header: 'Enable', accessor: 'enable' },
        { header: 'Script', accessor: 'script' },
        { header: 'Condition', accessor: 'condition' },
        { header: 'Last Hit Date', accessor: 'lastHitDate' },
      ];
      

  return (
    <div>
         <DashboardActions Title="Alerts" action="Add" />
         <Table columns={columns} data={selectedData} title="Selected Scripts" showCheckbox={true}  />
    </div>
  )
}

export default Alerts;