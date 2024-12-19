import React,{useState} from 'react';
import MailboxTable from '../../common/MailboxTable';
import Modal from '../../common/Modal';
import ShowMail from './ShowMail';

const mailboxData = [
  { from: "MANJ", headline: "DIVIDEND ALERT", preview: "💸 Your dividend of $250.00 has been successfully credited to your account. Check your balance for the updated amount. 📈", time: "2024-07-18 11:49:42", unread: true },
  { from: "ROOT", headline: "MCX CRUDE OIL EXPIRY", preview: "⛽ Crude oil futures are expiring tomorrow. Make sure to finalize any positions or adjustments before the market closes. ⏳", time: "2024-07-19 11:16:53", unread: false },
  { from: "ROOT", headline: "BASE METALS EXPIRY", preview: "⚒️ Reminder: Base metals contracts are expiring soon. Review your holdings and make any necessary changes before the deadline. 📅", time: "2024-07-23 09:55:30", unread: false },
  { from: "BROKER", headline: "PORTFOLIO UPDATE", preview: "📈 Your portfolio has seen a 5% increase this quarter. Congratulations on the positive performance! 🎉 Check your updated portfolio summary for details.", time: "2024-07-20 10:22:15", unread: true },
  { from: "NEWSLETTER", headline: "WEEKLY MARKET ROUNDUP", preview: "📰 Here’s what happened in the markets this week: major market movements, key economic events, and insightful analysis. Stay informed! 🌟", time: "2024-07-21 08:33:12", unread: false },
  { from: "ALERTS", headline: "STOCK PRICE ALERT", preview: "📊 Your watched stock has reached the target price of $150.00. Review the latest performance and decide on your next action. 🚀", time: "2024-07-22 15:45:30", unread: false },
  { from: "SUPPORT", headline: "ACCOUNT SECURITY NOTICE", preview: "🔒 We’ve detected unusual activity on your account. Please review your recent transactions and update your security settings if needed. 🛡️", time: "2024-07-22 16:17:03", unread: true },
  { from: "NEWS", headline: "DAILY FINANCIAL NEWS", preview: "🗞️ Top stories for the day: Market trends, earnings reports, and important economic updates. Keep up with the latest financial news! 📅", time: "2024-07-23 07:25:14", unread: false },
  { from: "BILLING", headline: "MONTHLY INVOICE", preview: "💳 Your invoice for the month of July is attached. Review the details and make sure to settle the amount by the due date. 🕒", time: "2024-07-24 13:01:19", unread: true },
  // { from: "SYSTEM", headline: "MAINTENANCE SCHEDULE", preview: "🛠️ Scheduled maintenance will occur on 25th July from 2:00 AM to 4:00 AM. During this time, access to certain features may be unavailable. 🚧", time: "2024-07-24 17:35:22", unread: false },
];


export default function Mailbox() {
  const [selectedMail, setSelectedMail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openMail = (mail) => {
    setSelectedMail(mail);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMail(null);
  };
  return (
    <>
      <MailboxTable data={mailboxData}  showCheckbox={true}  onMailClick={openMail}  />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedMail && (
          <ShowMail selectedMail={selectedMail} />
        )}
      </Modal>
    </>
  );
}
