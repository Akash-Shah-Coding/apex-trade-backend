import React, { useState } from "react";
import DashboardActions from "../../../components/DashboardActions";
import Table from "../../../common/Table";
import { marginCallData } from "./marginCallData";

const MarginCall = () => {
  const [selectedData, setSelectedData] = useState(marginCallData);

  const columns = [
    { header: "Time", accessor: "time" },
    { header: "Account", accessor: "account" },
    { header: "Parent", accessor: "parent" },
    { header: "Liquidation Details", accessor: "liquidation_details" },
    { header: "Margin Call Details", accessor: "margin_call_details" },
    { header: "IgnoreLiquidation", accessor: "ignoreliquidation" },
    { header: "Country", accessor: "country" },
    { header: "Email", accessor: "email" },
    { header: "Mobile", accessor: "mobile" },
    { header: "Margin Level", accessor: "margin_level" },
    { header: "Tele Pass", accessor: "tele_pass" },
    { header: "Balance", accessor: "balance" },
    { header: "Current PnL", accessor: "current_pnl" },
    { header: "Credit", accessor: "credit" },
    { header: "Equity", accessor: "equity" },
    { header: "Used Margin", accessor: "used_margin" },
    { header: "Free Margin", accessor: "free_margin" },
    // { header: 'Status', accessor: 'statusBadge' }, // Use the badge accessor
  ];

  return (
    <div>
      <DashboardActions Title="Margin call" action="Add" />
      <Table columns={columns} data={selectedData} title="Selected Scripts" />
    </div>
  );
};

export default MarginCall;
