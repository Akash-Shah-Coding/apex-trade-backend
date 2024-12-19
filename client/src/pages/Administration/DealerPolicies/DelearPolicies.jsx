import React, { useState } from 'react'
import ActiveTabs from '../../../common/ActiveTabs';
import DealerScripts from './policies/DealerScripts';
import DealerGenerics from './policies/DealerGenerics';

const DealerPolicies = () => {
  const [activeTab, setActiveTab] = useState('scripts');

  const tabs = [
    {
      key: 'scripts',
      label: 'Delear Scripts',
      icon: 'fa-file-alt',
    },
    {
      key: 'generic',
      label: 'Dealer Generic',
      icon: 'fa-cogs',
    },
  ];
  return (
    <>
      <ActiveTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'scripts' && <div><DealerScripts/></div>}
      {activeTab === 'generic' && <div><DealerGenerics/></div>}
    </>
  )
}

export default DealerPolicies;