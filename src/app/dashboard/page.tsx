
import React from 'react'
import ResourceAggregates from './_components/resource-aggregates'
import FilterDatePicker from '@/components/custom/filter-records'

type Props = {}

const DashboardPage:React.FC<Props> = async({}) => {

  return (
    <div className="flex flex-col space-y-10">
      <div>
        <h2 className="font-bold text-4xl">Dashboard</h2>
      </div>

      <div className='space-y-4'>
        <div className="flex items-center justify-between">
          <h4 className="text-gray-400 font-medium text-lg">Total Consumption</h4>
          <FilterDatePicker />
        </div>
        <ResourceAggregates />
      </div>
    </div>
  )
}

export default DashboardPage