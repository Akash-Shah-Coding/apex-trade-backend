const { v4: uuidv4 } = require('uuid');

const DealerGenericData = [
  {
    privilege: "Accept/Reject Deposite Requests",
    enable: false
  },
  {
    privilege: "Accept/Reject Loan Requests",
    enable: false
  },
  {
    privilege: "Accept/Reject Withdraw Requests",
    enable: false
  },
  {
    privilege: "Adjustment",
    enable: false
  },
  {
    privilege: "Assign Account Copier Policy",
    enable: false
  },
  {
    privilege: "Assign Agent Commission Policy",
    enable: false
  },
  {
    privilege: "Assign Robo Policy",
    enable: false
  },
  {
    privilege: "Can Do Agent Commission",
    enable: false
  },
  {
    privilege: "Can Do Settlement",
    enable: false
  },
  {
    privilege: "Change Transaction Date",
    enable: false
  },
  {
    privilege: "Control Banks",
    enable: false
  },
  {
    privilege: "Control can Transfer Money/Position",
    enable: false
  },
  {
    privilege: "Control Percentage(1-Admin)",
    enable: false
  },
  {
    privilege: "Control Percentage(2-Super Admin)",
    enable: false
  },
  {
    privilege: "Control Percentage(3-Master)",
    enable: false
  },
  {
    privilege: "Control Percentage(4-Agent)",
    enable: false
  },
  {
    privilege: "Create Account Copier Policy",
    enable: false
  },
  {
    privilege: "Create Agent Commission Policy",
    enable: false
  },
  {
    privilege: "Create Client",
    enable: false
  },
  {
    privilege: "Create Client Generic Policy",
    enable: false
  },
  {
    privilege: "Create Client Scripts Policy",
    enable: false
  },
  {
    privilege: "Create Dealer",
    enable: false
  },
  {
    privilege: "Create Dealer Generic Policy",
    enable: false
  },
  {
    privilege: "Create Dealer Scripts Policy",
    enable: false
  },
  {
    privilege: "Create Manual Open/Close Position Outside...",
    enable: false
  },
  {
    privilege: "Create Office",
    enable: false
  },
  {
    privilege: "Create Robo Dealer Policy",
    enable: false
  },
  {
    privilege: "Create Update Client Price Execution",
    enable: false
  },
  {
    privilege: "Create Update Demo Accounts",
    enable: false
  },
  {
    privilege: "Create Update Multisession Accounts",
    enable: false
  },
  {
    privilege: "Credit In",
    enable: false
  },
  {
    privilege: "Credit Out",
    enable: false
  },
  {
    privilege: "Credit In",
    enable: false
  },
  {
    privilege: "Delete Client",
    enable: false
  },
  {
    privilege: "Deposit",
    enable: false
  },
  {
    privilege: "Disconnect Client",
    enable: false
  },
  {
    privilege: "Disconnect Dealer",
    enable: false
  },
  {
    privilege: "E-Souk Branches",
    enable: false
  },
  {
    privilege: "E-Souk Items",
    enable: false
  },
  {
    privilege: "Manage Position",
    enable: false
  },
  {
    privilege: "Open Close Manual Position",
    enable: false
  },
  {
    privilege: "Open Close Market Position",
    enable: false
  },
  {
    privilege: "Open Pending Order",
    enable: false
  },
  {
    privilege: "Restart Services",
    enable: false
  },
  {
    privilege: "See Client Names",
    enable: false
  },
  {
    privilege: "See CloseHistory/Commission Reports",
    enable: false
  },
  {
    privilege: "See Close Robo Orders Reports",
    enable: false
  },
  {
    privilege: "See Closed Summary Screen",
    enable: false
  },
  {
    privilege: "See DepositRequests Reports",
    enable: false
  },
  {
    privilege: "See Financial Standing Reports",
    enable: false
  },
  {
    privilege: "See Journal Reports",
    enable: false
  },
  {
    privilege: "See Live Users Screen",
    enable: false
  },
  {
    privilege: "See Loan Requests Reports",
    enable: false
  },
  {
    privilege: "See Login History Reports",
    enable: false
  },
  {
    privilege: "See Manual Acceptence Screen",
    enable: false
  },
  {
    privilege: "See Margin Call Screen",
    enable: false
  },
  {
    privilege: "See Money Transactions Reports",
    enable: false
  },
  {
    privilege: "See Open History Reports",
    enable: false
  },
  {
    privilege: "See Open Positions Reports",
    enable: false
  },
  {
    privilege: "See Open Robo Orders Reports",
    enable: false
  },
  {
    privilege: "See Opened Summary Screen",
    enable: false
  },
  {
    privilege: "See Pending Orders Reports",
    enable: false
  },
  {
    privilege: "See TransactionLog Screen",
    enable: false
  },
  {
    privilege: "See Transactions Report",
    enable: false
  },
  {
    privilege: "See User Details Report",
    enable: false
  },
  {
    privilege: "See Withdraw Requests Report",
    enable: false
  },
  {
    privilege: "Send Announcement",
    enable: false
  },
  {
    privilege: "Send Email",
    enable: false
  },
  {
    privilege: "Show Hide Histoy Transactions",
    enable: false
  },
  {
    privilege: "Transfer Clients",
    enable: false
  },
  {
    privilege: "Update All Users Fields",
    enable: false
  },
  {
    privilege: "Update Auto Market",
    enable: false
  },
  {
    privilege: "Update Auto Order",
    enable: false
  },
  {
    privilege: "Update Buy Holding Required Margin Type",
    enable: false
  },
  {
    privilege: "Update Buy Holding Required Margin Value",
    enable: false
  },
  {
    privilege: "Update Buy Intraday Required Margin Type ",
    enable: false
  },
  {
    privilege: " Update Buy Intraday Required Margin Value",
    enable: false
  },
  {
    privilege: "Update Can Buy",
    enable: false
  },
  {
    privilege: "Update Can Sell ",
    enable: false
  },
  {
    privilege: "Update Client",
    enable: false
  },
  {
    privilege: "Update Close Commission Type",
    enable: false
  },
  {
    privilege: "Update Close CommissionValue",
    enable: false
  },
  {
    privilege: "Update Delete Account Copier Policy ",
    enable: false
  },

  {
    privilege: "Update Delete Agent Commission Policy",
    enable: false
  },

  {
    privilege: "Update Delete Client Generic Policy",
    enable: false
  },

  {
    privilege: "Update Delete Client Scripts Policy ",
    enable: false
  },
  {
    privilege: "Update Delete Dealer",
    enable: false
  },

  {
    privilege: "Update Delete Dealer Generic Policy ",
    enable: false
  },

  {
    privilege: "Update Delete Dealer Scripts Policy ",
    enable: false
  },

  {
    privilege: "Update Delete Money Transaction  ",
    enable: false
  },

  {
    privilege: "Update Delete Pending Order ",
    enable: false
  },
  {
    privilege: "Update Delete Position ",
    enable: false
  },

  {
    privilege: "Update Delete Robo Dealer Policy",
    enable: false
  },

  {
    privilege: "Update IntradayCommission Type ",
    enable: false
  },

  {
    privilege: "Update Intraday Commission Value ",
    enable: false
  },

  {
    privilege: "Update Limit Offset ",
    enable: false
  },
  {
    privilege: "Update Limit Offset Type",
    enable: false
  },
  {
    privilege: "Update Max Deals",
    enable: false
  },
  {
    privilege: "Update Max Quantity ",
    enable: false
  },
  {
    privilege: "Update Max Value ",
    enable: false
  },
  {
    privilege: "Update Min Deals",
    enable: false
  },
  {
    privilege: "Update Offsets Percentage",
    enable: false
  },
  {
    privilege: "Update Open Commission Type ",
    enable: false
  },
  {
    privilege: "Update Open Commission Value",
    enable: false
  },
  {
    privilege: "Update Sell Holding Required Margin Type ",
    enable: false
  },
  {
    privilege: "Update Sell Holding Required Margin Value ",
    enable: false
  },
  {
    privilege: "Update Sell Intraday Required Margin Type ",
    enable: false
  }, {
    privilege: "Update Sell Intraday Required Margin Value  ",
    enable: false
  }, {
    privilege: "Update Spread Balance",
    enable: false
  }, {
    privilege: "Update Spread Type",
    enable: false
  }, {
    privilege: "Update Spread Value",
    enable: false
  }, {
    privilege: "Update Stop Offset ",
    enable: false
  }, {
    privilege: "Update Stop Offset Type ",
    enable: false
  },
  {
    privilege: "Update Visible ",
    enable: false
  },
  {
    privilege: "Withdraw ",
    enable: false
  },
  {
    privilege: "Withdraw / Credit-Out More Than Available Funds",
    enable: false
  },
];


module.exports = {
  async up(queryInterface, Sequelize) {
    const timestamp = new Date();
    const permissions = DealerGenericData.map(item => ({
      id: uuidv4(),
      name: item.privilege,
      createdAt: timestamp,
      updatedAt: timestamp
    }));

    // Insert data into the permissions table
    await queryInterface.bulkInsert('Permissions', permissions, {});
  },

  async down(queryInterface, Sequelize) {
    // Delete all entries from the permissions table
    await queryInterface.bulkDelete('Permissions', null, {});
  }
};
