import React,{useState} from 'react'
import { newsData, newsColumns } from './newsdummy'
import Table from '../../../common/Table'
import DashboardActions from '../../../components/DashboardActions'

const News = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const multipleActions = [
      "Latest Trade Deals",
      "Tariff Updates",
      "Trade Disputes",
  ];
  

  return (
    <>
    <DashboardActions Title="News" action={multipleActions} setIsModalOpen={setIsModalOpen} />
      <Table columns={newsColumns} data={newsData} title="Financial News" />
    </>
  )
}

export default News