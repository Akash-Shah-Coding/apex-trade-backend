import React, { useState } from 'react';
import { dummyData } from '../../dummyData';
import DashboardActions from '../../../components/DashboardActions';
import Table from '../../../common/Table';
import {liveUser} from './user'

const LiveUsers = () => {
    const [selectedData, setSelectedData] = useState(liveUser);

    const columns = [
        { header: 'Login Time', accessor: 'loginTime' },
        { header: 'User Type', accessor: 'userType' },
        { header: 'User Name', accessor: 'userName' },
        { header: 'Name(Acc#)', accessor: 'nameAcc' },
        { header: 'IP Address', accessor: 'ipAddress' },
        { header: 'Device Type', accessor: 'deviceType' },
        { header: 'Mac Address', accessor: 'macAddress' },
    ];

    return (
        <div>
            <DashboardActions Title="Live Users" action="Add" />
            <Table columns={columns} data={selectedData} title="Selected Scripts" />
        </div>
    );
}

export default LiveUsers;
