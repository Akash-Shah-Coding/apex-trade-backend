import React,{useState} from 'react'
import ActiveTabs from '../../../../common/ActiveTabs';
import GeneralProperties from './GeneralProperties';
import TradingProperties from './TradingProperties'
import YesNoProperties from './YesNoProperties'


const ClientGenericPolicies = () => {

    const [activeTab, setActiveTab] = useState('generalprop');

    const tabs = [
      {
        key: 'generalprop',
        label: 'General Properties',
        icon: 'fa-sliders-h',
      },
      {
        key: 'tradeprop',
        label: 'Trading Properties',
        icon: 'fa-briefcase',
      },
      {
        key: 'YesNoprop',
        label: 'Yes/No Properties',
        icon: 'fa-toggle-on',
      },
    ];

  return (
    <>
     <ActiveTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
     {activeTab === 'generalprop' && <div><GeneralProperties/></div>}
      {activeTab === 'tradeprop' && <div><TradingProperties/></div>}
      {activeTab === 'YesNoprop' && <div><YesNoProperties/></div>}
    </>
  )
}

export default ClientGenericPolicies