import React, { useState } from 'react'
import ActiveTabs from '../../../common/ActiveTabs';
import ClientScriptPolicies from './ClientScriptPolicies/ClientScriptPolicies';
import ClientGenericPolicies from './ClientGenericPolicies/ClientGenericPolicies';
import RoboPolicies from './RoboPolicies/RoboPolicies';
import AccountCopier from './AccountCopier/AccountCopier';
import AgentCommision from './AgentCommision/AgentCommision';


const ClientPolicies = () => {
  const [activeTab, setActiveTab] = useState('scripts');

  const tabs = [
    {
      key: 'scripts',
      label: 'Scripts Policies',
      icon: 'fa-file-alt',
    },
    {
      key: 'generic',
      label: 'Generic Policies',
      icon: 'fa-cogs',
    },
    {
      key: 'robo',
      label: 'Robo Policies',
      icon: 'fa-robot',
    },
    {
      key: 'account',
      label: 'Account Copier',
      icon: 'fa-copy',
    },
    {
      key: 'agent',
      label: 'Agent Commision',
      icon: 'fa-user-tie',
    },
  ];
  return (
    <>
      <ActiveTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'scripts' && <div><ClientScriptPolicies/></div>}
      {activeTab === 'generic' && <div><ClientGenericPolicies/></div>}
      {activeTab === 'robo' && <div><RoboPolicies/></div>}
      {activeTab === 'account' && <div><AccountCopier/></div>}
      {activeTab === 'agent' && <div><AgentCommision/></div>}
    </>
  )
}

export default ClientPolicies;