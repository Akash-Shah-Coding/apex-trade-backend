import React, { useState } from 'react';
import { dummyData } from '../../dummyData';
import Modal from '../../../common/Modal';
import DashboardActions from '../../../components/DashboardActions';
import ManualNewPosForm from './ManualNewPosForm';
import Table from '../../../common/Table'

const ManualNewPosition = ({ onSave }) => {
  const [selectedScript, setSelectedScript] = useState(dummyData[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState([]);


  const handleSubmit = () => {
    const newPosition = {
      asset: selectedScript.SCRIPT,
      quantity: selectedScript.BID,
      entryPrice: selectedScript.LAST_PRICE,
    };
    onSave(newPosition);
    setSelectedScript(dummyData[0]);
  };
  const columns = [
    { header: 'Script', accessor: 'asset' },
    { header: 'Quantity', accessor: 'quantity' },
    { header: 'Entry Price', accessor: 'entryPrice' },
  ];
  return (
    <div>
      <DashboardActions Title="Manual New Position" action="Add" setIsModalOpen={setIsModalOpen} />
      <Table columns={columns} data={selectedData} title="Selected Scripts" />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <ManualNewPosForm dummyData={dummyData} onSave={onSave} />
      </Modal>
    </div>
  );
};

export default ManualNewPosition;
