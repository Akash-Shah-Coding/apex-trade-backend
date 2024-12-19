import React from 'react'
import { manualAcceptanceData, manualAcceptancecolumns, manualAcceptancebuttons } from '../PendingWithdrawReq/dummyData'
import Table from '../../../common/Table'


const ManualAcceptance = () => {
    return (
        <>
            <Table
                columns={manualAcceptancecolumns}
                data={manualAcceptanceData}
                title="Manual Acceptance"
                buttons={manualAcceptancebuttons}
                showCheckbox={true} 
            /></>
    )
}

export default ManualAcceptance