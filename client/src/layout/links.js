
export const viewlinks = [
  { to: "/view/live-users", label: "Live Users" },
  { to: "/view/opened-summary", label: "Opened Summary" },
  { to: "/view/closed-summary", label: "Closed Summary" },
  { to: "/view/live-transactions", label: "Live Transaction" },
  { to: "/view/margin-call", label: "Margin Call" },
  { to: "/view/pending-withdraw", label: "Pending Withdraw Requests" },
  { to: "/view/pending-deposit", label: "Pending Deposit Requests" },
  { to: "/view/pending-loan", label: "Pending Loan Requests" },
  { to: "/view/manual-acceptance", label: "Manual Acceptance" },
  { to: "/view/pending-robo-orders", label: "Pending Robo Orders" },
  { to: "http://localhost:5173", label: "Reports" },
  { to: "/view/deals", label: "Deals" },
  { to: "/view/net-deals", label: "Net Deals" },
  { to: "/view/order", label: "Orders" },
  { to: "/view/history", label: "History" },
  { to: "/view/news", label: "News" },
  { to: "/view/alerts", label: "Alerts" },
  { to: "/view/deposit-request", label: "Deposit Requests" },
  { to: "/view/withdraw-request", label: "Withdraw Requests" },
  { to: "/view/loan-request", label: "Loan Requests" },

];


export const homelinks = [
  { to: "/", label: "Dashboard" },
  { to: "/home/market-new-pos", label: "Market New Position" },
  { to: "/home/manual-new-pos", label: "Manual New Position" },
  { to: "/home/new-pending-order", label: "New Pending Order" },
  { to: "http://localhost:5173", label: "Statement" },
  { to: "/home/new-chart-window", label: "New Chart Window" },
  { to: "http://localhost:5173", label: "New FS Chart Window" },
  { to: "http://localhost:5173", label: "E - Souq" },
  // { to: "http://localhost:5173", label: "Options" },
  { to: "/home/liquidation-cockpit", label: "Liquid Cockpit" },
  { to: "/home/session-monitor-cockpit", label: "Session monitor Cockpit" },
  { to: "/home/edit-profile", label: "Edit Profile" },
  { to: "/home/send-mail", label: "Send Mail" },
];

export const adminLinks = [
  { to: "/administration/dealer-policies", label: "Dealer Polices" },
  { to: "/administration/client-policies", label: "Client Policies" },
  { to: "/administration/e-souq-manager", label: "E-Souq Manager" },
  { to: "/administration/branches-manager", label: "Branches Manager" },
  { to: "/administration/banks-manager", label: "Banks Manager" },
  { to: "/administration/agent-commission", label: "Agent Commision" },
   // Settlement group
   {
    label: "Settlement",
    children: [
      { to: "/administration/settlement/full", label: "Full (Position + Money)" },
      { to: "/administration/settlement/opened-deal", label: "Opened Deals (Without Money)" },
      { to: "/administration/settlement/money", label: "Money (Without Position)" },
      { to: "/administration/settlement/expiry", label: "Expiry" },
    ],
  },
  {
    label: 'Reports',
    children: [
      { to: "/administration/report/transaction-report", label: "Transaction Report" },
      { to: "/administration/report/money-transaction-report", label: "Money Transaction Report" },
      { to: "/administration/report/user-details-report", label: "Users Details Report" },
      { to: "/administration/report/open-position-report", label: "Open Position Report" },
      { to: "/administration/report/history-report", label: "History Report" },
      { to: "/administration/report/pending-orders-report", label: "Pending Orders Report" },
      { to: "/administration/report/finanxial-standing-report", label: "Financial Standing report" },
      { to: "/administration/report/login-report", label: "LogIn Report" },
      { to: "/administration/report/robo-orders-report", label: "Robo Orders Report" },
      { to: "/administration/report/withdraw-requests-report", label: "WithDraw Request Report" },
      { to: "/administration/report/deposite-requests-report", label: "Deposit Request Report" },
      { to: "/administration/report/loan-requests-report", label: "Loan requests Report" },
      { to: "/administration/report/trade-book-report", label: "Trade Book Report" },
      { to: "/administration/report/journal-report", label: "Journal Report" },
      { to: "/administration/report/commisions-report", label: "Commission Report" },
    ],
  },
];

export const authLinks = [
  { to: "http://localhost:5173", label: "Sign In" },
  { to: "http://localhost:5173", label: "Sign Up" },
  { to: "http://localhost:5173", label: "Reset Password" },
];
