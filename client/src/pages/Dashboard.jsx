import React, { useState } from 'react';

import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import DashboardActions from '../components/DashboardActions';
import Table from '../common/Table';
import { dummyData } from './dummyData';
import useMarketData from '../hooks/useMarketData';
import Loader from '../common/Loader';

function Dashboard() {

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
    { header: 'Script', accessor: 'SCRIPT' },
    { header: 'Bid', accessor: 'BID', getClassName },
    { header: 'Ask', accessor: 'ASK', getClassName },
    { header: 'High', accessor: 'HIGH', getClassName },
    { header: 'Low', accessor: 'LOW', getClassName },
    { header: 'Time', accessor: 'TIME' },
    { header: 'Last Price', accessor: 'LAST_PRICE', getClassName },
    { header: 'Spread', accessor: 'SPREAD', getClassName },
  ];


  const dataList = [
    {
      title: "Total Balance",
      salesData: "$150,000",
      percentageChange: 15,
      // chartData: totalBalanceData, // Add the appropriate chart data here
    },
    {
      title: "Total PnL",
      salesData: "$45,000",
      percentageChange: 10,
      // chartData: totalPnlData, // Add the appropriate chart data here
    },
    {
      title: "Used Margin",
      salesData: "$20,000",
      percentageChange: 5,
      // chartData: usedMarginData, // Add the appropriate chart data here
    },
  ];

  //Market Data API Call 
  const { marketData, loading, error } = useMarketData();

  return (
    <>

      <DashboardActions Title="Home" action="Add View" />
      {/* Cards */}
      {loading ? <Loader /> :
        <div className="grid grid-cols-12 gap-6">
          {/* Line chart (Acme Plus) */}
          {/*  {dataList.map((data, index) => (
        <DashboardCard01
          key={index}
          title={data.title}
          salesData={data.salesData}
          percentageChange={data.percentageChange}
          chartData={data.chartData} // Uncomment if you have different chart data for each card
        />
      ))}
        {/* Line chart (Acme Advanced) */}
          {/* <DashboardCard02 /> */}
          {/* Line chart (Acme Professional) */}
          {/* <DashboardCard03 /> */}
          {/* Table (Top Channels) */}
          {/* <DashboardCard07 /> */}
          <Table columns={columns} data={marketData} title="Market Data" itemsPerPage='12' />
          {/* Line chart (Real Time Value) */}
          {/* <DashboardCard05 /> */}
          {/* Doughnut chart (Top Countries) */}
          {/* <DashboardCard06 /> */}
          {/* Bar chart (Direct vs Indirect) */}
          {/* <DashboardCard04 /> */}
          {/* Line chart (Sales Over Time) */}
          {/* <DashboardCard08 /> */}
          {/* Stacked bar chart (Sales VS Refunds) */}
          {/* <DashboardCard09 /> */}
          {/* Card (Customers) */}
          {/* <DashboardCard10 /> */}
          {/* Card (Reasons for Refunds) */}
          {/* <DashboardCard11 /> */}
          {/* Card (Recent Activity) */}
          {/* <DashboardCard12 /> */}
          {/* Card (Income/Expenses) */}
          {/* <DashboardCard13 /> */}

        </div>
      }
    </>
  );
}

export default Dashboard;