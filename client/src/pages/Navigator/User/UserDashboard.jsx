import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, updateUser } from '../../../store/userSlice'; // Make sure updateUser is imported
import Table from '../../../common/Table';
import DashboardActions from '../../../components/DashboardActions';
import Modal from '../../../common/Modal'
import UserForm from './UserForm';

const UserDashboard = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
    spent: '',
    location: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveUser = (user) => {
    console.log("USER ", user);
    if (user && user.id) {
      dispatch(updateUser(user));
    } else {
      dispatch(addUser({ ...user, id: Date.now().toString() }));
    }
    setCurrentUser(null);
    setIsModalOpen(false);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };



  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Spent', accessor: 'spent' },
    { header: 'Location', accessor: 'location' },
    { header: 'Action', accessor: 'action'}
  ];

  const actionButtons = [
    {
      label: 'Edit',
      className: 'focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
      onClick: (row) => handleEdit(row),
    },
    {
      label: 'Delete',
      className: 'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
      onClick: (row) => handleDelete(row), 
    },
  ];

  return (
    <div>
      <DashboardActions Title="Navigator" action="Add Apex Account" setIsModalOpen={setIsModalOpen} />
      <Table columns={columns} data={users} title="Users" buttons={actionButtons}/>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <UserForm user={currentUser} onSave={handleSaveUser} />
      </Modal>
    </div>
  );
};

export default UserDashboard;
