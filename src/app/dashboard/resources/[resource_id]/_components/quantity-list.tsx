"use client"

import ContentLoading from '@/components/custom/content-loading'
import ContentLoadingError from '@/components/custom/content-loading-error'
import { DataTable } from '@/components/custom/data_table'
import { useQuantities } from '@/hooks/custom-hooks'
import React from 'react'
import { columns } from './columns'
import { useSearchParams } from 'next/navigation'

type Props = {
    resource_id: number
}

const QuantityList:React.FC<Props> = ({
    resource_id
}) => {
    const searchParams = useSearchParams()
    const {data,isLoading,isError} = useQuantities(resource_id,searchParams.get("from")?? undefined, searchParams.get("to")?? undefined)

    if (isLoading){
        return (
            <ContentLoading />
        )
    }

    if (isError){
        return (
            <ContentLoadingError />
        )
    }
    
  return (
    <div>
        <div className="">
                <DataTable columns={columns} data={data ?? []} />
            </div>
            <div className="w-full">
                {data && data.map((resource, index) => (
                    <div>

                    </div>
                ))}
            </div>
    </div>
  )
}

export default QuantityList