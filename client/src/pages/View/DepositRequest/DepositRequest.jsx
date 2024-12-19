import React, { useState } from "react";
import Table from "../../../common/Table";
import DashboardActions from "../../../components/DashboardActions";
import { depositrequestData } from "./DepositRequestData";

const DepositRequest = () => {


  const renderStatusBadge = (status) => {
    let bgColor, textColor, ringColor;

    switch (status) {
      case "Approved":
        bgColor = "bg-green-50 dark:bg-green-700";
        textColor = "text-green-700 dark:text-green-50";
        ringColor = "ring-green-600/20 dark:ring-green-400/10";
        break;
      case "Rejected":
        bgColor = "bg-red-50 dark:bg-red-700";
        textColor = "text-red-700 dark:text-red-50";
        ringColor = "ring-red-600/10 dark:ring-red-400/10";
        break;
      case "Pending":
        bgColor = "bg-yellow-50 dark:bg-yellow-700";
        textColor = "text-yellow-800 dark:text-yellow-50";
        ringColor = "ring-yellow-600/20 dark:ring-yellow-400/10";
        break;
      default:
        bgColor = "bg-gray-50 dark:bg-gray-900";
        textColor = "text-gray-600 dark:text-gray-300";
        ringColor = "ring-gray-500/10 dark:ring-gray-300/10";
    }

    return (
      <span
        className={`inline-flex items-center rounded-md ${bgColor} px-2 py-1 text-xs font-medium ${textColor} ring-1 ring-inset ${ringColor}`}
      >
        {status}
      </span>
    );
  };

  const [selectedData, setSelectedData] = useState(
    depositrequestData.map((item) => ({
      ...item,
      statusBadge: renderStatusBadge(item.status),
    }))
  );


  const columns = [
    { header: "ID", accessor: "user_id" },
    { header: "Amount", accessor: "amount" },
    { header: "Status", accessor: "statusBadge" },
    { header: "Comment", accessor: "comment" },
    { header: "Admin Comment", accessor: "admin_comment" },
    { header: "Bank", accessor: "bank" },
    { header: "Date/Time", accessor: "date/Time" },

  ];

  return (
    <div>
      <DashboardActions Title="Deposit Request" action="Add" />
      <Table columns={columns} data={selectedData} title="Selected Scripts" showCheckbox={true}  />
    </div>
  );
};

export default DepositRequest;
