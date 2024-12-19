// Home links
import Dashboard from "./pages/Dashboard";
import MarketNewPosition from "./pages/Home/MarketNewPosition/MarketNewPosition";
import ManualNewPosition from "./pages/Home/ManualNewPosition/ManualNewPosition";
import NewPendingOrder from "./pages/Home/NewPendingOrder/NewPendingOrder";
import NewChartWindow from "./pages/Home/NewChartWindow/NewChartWindow";
import LiquidationCockpit from "./pages/Home/LiquidationCockpit/LiquidationCockpit";
import SessionMonitor from "./pages/Home/SessionMonitorCockpit/SessionMonitor";
import EditProfileForm from "./pages/Profile/EditProfileForm";
import SendMail from "./pages/Home/SendMail/SendMail";

// View Links
import LiveUsers from "./pages/View/LiveUsers/LiveUsers";
import OpenedSummary from "./pages/View/OpenedSummary/OpenedSummary";
import ClosedSummary from "./pages/View/ClosedSummary/ClosedSummary";
import LiveTransactions from "./pages/View/LiveTransactions/LiveTransactions";
import MarginCall from "./pages/View/MarginCall/MarginCall";
import PendingWithdraw from "./pages/View/PendingWithdrawReq/PendingWithdraw";
import PendingDeposit from "./pages/View/PendingDepositReq/PendingDeposit";
import PendingLoan from "./pages/View/PendingLoanReq/PendingLoan";
import ManualAcceptance from "./pages/View/ManualAcceptance/ManualAcceptance";
import PendingRoboOrders from "./pages/View/PendingRoboOrders/PendingRoboOrders";
import Deals from "./pages/View/Deals/Deals";
import NetDeals from "./pages/View/NetDeals/NetDeals";
import Orders from "./pages/View/Orders/Orders";
import History from "./pages/View/History/History";
import News from "./pages/View/News/News";
import DepositRequest from "./pages/View/DepositRequest/DepositRequest";
import WithdrawRequest from "./pages/View/WithdrawRequest/WithdrawRequest";
import Alerts from "./pages/View/Alerts/Alerts";
import LoanRequest from "./pages/View/LoanRequest/LoanRequest";

// Mailbox
import Mailbox from "./pages/Mail/Mailbox";

// Navigator
import UserDashboard from "./pages/Navigator/User/UserDashboard";
import Dealerdashboard from "./pages/Navigator/Dealer/DealerDashboard";

// Auth
import SignIn from "./pages/Auth/Signin";


//Administration
import ClientPolicies from "./pages/Administration/ClientPolicies/ClientPolicies";
import ESouqManager from "./pages/Administration/ESouqManager/ESouqManager";
import BranchesManager from "./pages/Administration/BranchesManager/BranchesManager";
import BankManager from "./pages/Administration/BankManager/BankManager";
import AgentCommission from "./pages/Administration/AgentCommission/AgentCommission";
import DealerPolicies from "./pages/Administration/DealerPolicies/DelearPolicies";
//Adminstration Settlement Multidropdown 
import ExpirySettlement from "./pages/Administration/SettleMent/ExpirySettlement/ExpirySettlement";
import FullSettlement from "./pages/Administration/SettleMent/FullSettlement/FullSettlement";
import MoneySettlement from "./pages/Administration/SettleMent/MoneySettlement/MoneySettlement";
import OpenedDealSettlement from "./pages/Administration/SettleMent/OpenedDealSettlement/OpenedDealSettlement";
//Adminstration Reports Multidropdown 
import CommisionsReport from "./pages/Administration/Reports/CommisionsReport/CommisionsReport";
import DepositeRequestsReport from "./pages/Administration/Reports/DepositeRequestsReport/DepositeRequestsReport";
import FinanxialStandingReport from "./pages/Administration/Reports/FinanxialStandingReport/FinanxialStandingReport";
import TransactionsReport from "./pages/Administration/Reports/TransactionsReport/TransactionsReport";
import MoneyTransactionsReport from "./pages/Administration/Reports/MoneyTransactionsReport/MoneyTransactionsReport";
import UserDetailsReport from "./pages/Administration/Reports/UserDetailsReport/UserDetailsReport";
import OpenPositionsReports from "./pages/Administration/Reports/OpenPositionsReports/OpenPositionsReports";
import HistoryReport from "./pages/Administration/Reports/HistoryReport/HistoryReport";
import PendingOrdersReport from "./pages/Administration/Reports/PendingOrdersReport/PendingOrdersReport";
import LoginReport from "./pages/Administration/Reports/LoginReport/LoginReport";
import RoboOrdersReport from "./pages/Administration/Reports/RoboOrdersReport/RoboOrdersReport";
import WithdrawRequestsReport from "./pages/Administration/Reports/WithdrawRequestsReport/WithdrawRequestsReport";
import LoanRequestsReport from "./pages/Administration/Reports/LoanRequestsReport/LoanRequestsReport";
import TradeBookReport from "./pages/Administration/Reports/TradeBookReport/TradeBookReport";
import JournalReport from "./pages/Administration/Reports/JournalReport/JournalReport";




export const homeRoutes = [
  { path: "/", component: Dashboard },
  { path: "/home/market-new-pos", component: MarketNewPosition },
  { path: "/home/manual-new-pos", component: ManualNewPosition },
  { path: "/home/new-pending-order", component: NewPendingOrder },
  { path: "/home/new-chart-window", component: NewChartWindow },
  { path: "/home/liquidation-cockpit", component: LiquidationCockpit },
  { path: "/home/session-monitor-cockpit", component: SessionMonitor },
  { path: "/home/edit-profile", component: EditProfileForm },
  { path: "/home/send-mail", component: SendMail },
];

export const viewRoutes = [
  { path: "/view/live-users", component: LiveUsers },
  { path: "/view/opened-summary", component: OpenedSummary },
  { path: "/view/closed-summary", component: ClosedSummary },
  { path: "/view/live-transactions", component: LiveTransactions },
  { path: "/view/margin-call", component: MarginCall },
  { path: "/view/pending-withdraw", component: PendingWithdraw },
  { path: "/view/pending-deposit", component: PendingDeposit },
  { path: "/view/manual-acceptance", component: ManualAcceptance },
  { path: "/view/pending-loan", component: PendingLoan },
  { path: "/view/pending-robo-orders", component: PendingRoboOrders },
  { path: "/view/deals", component: Deals },
  { path: "/view/net-deals", component: NetDeals },
  { path: "/view/order", component: Orders },
  { path: "/view/history", component: History },
  { path: "/view/news", component: News },
  { path: "/view/deposit-request", component: DepositRequest },
  { path: "/view/withdraw-request", component: WithdrawRequest },
  { path: "/view/alerts", component: Alerts },
  { path: "/view/loan-request", component: LoanRequest },
];

export const MailboxRoute = [{ path: "/mailbox", component: Mailbox }];

export const navigatorRoutes = [
  { path: "/navigator/apex-accounts", component: UserDashboard },
  { path: "/navigator/apex-dealer", component: Dealerdashboard },
];

export const administrationRoutes = [
  { path: "/administration/dealer-policies", component: DealerPolicies },
  { path: "/administration/client-policies", component: ClientPolicies },
  { path: "/administration/e-souq-manager", component: ESouqManager },
  { path: "/administration/branches-manager", component: BranchesManager },
  { path: "/administration/banks-manager", component: BankManager },
  { path: "/administration/agent-commission", component: AgentCommission },
 
  // Settlement group
  { path: "/administration/settlement/expiry", component: ExpirySettlement},
  { path: "/administration/settlement/full", component: FullSettlement},
  { path: "/administration/settlement/money", component: MoneySettlement},
  { path: "/administration/settlement/opened-deal", component: OpenedDealSettlement},

  // Report group
  { path: "/administration/report/transaction-report", component:TransactionsReport},
  { path: "/administration/report/money-transaction-report", component:MoneyTransactionsReport},
  { path: "/administration/report/user-details-report", component:UserDetailsReport},
  { path: "/administration/report/open-position-report", component:OpenPositionsReports},
  { path: "/administration/report/history-report", component:HistoryReport},
  { path: "/administration/report/pending-orders-report", component:PendingOrdersReport},
  { path: "/administration/report/finanxial-standing-report", component: FinanxialStandingReport},
  { path: "/administration/report/login-report", component: LoginReport},
  { path: "/administration/report/robo-orders-report", component: RoboOrdersReport},
  { path: "/administration/report/withdraw-requests-report", component:WithdrawRequestsReport},
  { path: "/administration/report/deposite-requests-report", component: DepositeRequestsReport},
  { path: "/administration/report/loan-requests-report", component:LoanRequestsReport},
  { path: "/administration/report/trade-book-report", component:TradeBookReport},
  { path: "/administration/report/journal-report", component: JournalReport},
  { path: "/administration/report/commisions-report", component: CommisionsReport},
 
];



export const publicRoutes = [
  { path: "/signIn", component: SignIn },
  // Add other public routes here
];
