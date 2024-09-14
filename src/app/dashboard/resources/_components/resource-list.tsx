"use client"

import { DataTable } from '@/components/custom/data_table'
import { useResources } from '@/hooks/custom-hooks'
import React from 'react'
import { createColumns } from './columns'
import ContentLoading from '@/components/custom/content-loading'
import ContentLoadingError from '@/components/custom/content-loading-error'
import { TMeasureSchema } from '@/lib/schema/form-schema'

type Props = {
    measure: TMeasureSchema[]
}

const ResourceList:React.FC<Props> = ({
    measure
}) => {

    const {data,isLoading,isError} = useResources()

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
    
    const columns =  createColumns(measure ?? [] )
    
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

export default ResourceList