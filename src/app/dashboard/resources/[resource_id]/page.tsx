import BackButton from '@/components/custom/back-button'
import { Input } from '@/components/ui/input'
import React from 'react'
import AddQuantityButton from './_components/add-quantiy-button'
import QuantityList from './_components/quantity-list'
import FilterDatePicker from '@/components/custom/filter-records'

type Props = {
  params:{
    resource_id:string
  }
  searchParams:{
    [key: string]: string | string[] | undefined
  }
}

const ProductUsePage:React.FC<Props> = ({
  params,searchParams
}) => {

  return (
    <div className="flex flex-col space-y-6 w-full">
      <div>
        <BackButton title="Back"/>
      </div>
      <div className="flex items-center justify-between w-full">
        <h2 className="font-bold text-4xl">{searchParams?.name}</h2>
        <AddQuantityButton />
      </div>

      <div className="flex items-center space-x-10 justify-between w-full">
        <Input placeholder="search" />
        <FilterDatePicker />
      </div>

      <div>
        <QuantityList resource_id={Number(params.resource_id)} />
      </div>
    </div>
  )
}

export default ProductUsePage