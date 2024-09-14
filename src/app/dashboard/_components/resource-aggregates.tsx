"use client"

import ContentLoading from '@/components/custom/content-loading'
import ContentLoadingError from '@/components/custom/content-loading-error'
import { useResourcesAggregates } from '@/hooks/custom-hooks'
import React from 'react'
import AggregateCard from './aggregate-card'

type Props = {}

const ResourceAggregates:React.FC<Props> = ({

}) => {

    const {data, isLoading, isError} = useResourcesAggregates()

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
            {data && data?.length > 0 ? (
                <div className='grid grid-cols-4 gap-6'>
                    {data.map((record, index) => (
                        <div key={index} >
                            <AggregateCard record={record} />
                        </div>
                    ))}
                </div>
            ):(
                <div className="w-full text-center bg-blue-100 text-blue-600 p-4 rounded-lg">
                    No Data to show
                </div>
            )}
        </div>
    )
}

export default ResourceAggregates