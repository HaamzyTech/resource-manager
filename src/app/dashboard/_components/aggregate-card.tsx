"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TRecordTotal } from '@/lib/types'
import React from 'react'

type Props = {
    record: TRecordTotal
}

const AggregateCard:React.FC<Props> = ({
    record
}) => {
  return (
    <Card>
        <CardHeader className="border-b">
            <CardTitle className="text-gray-500 text-center">
                {record?.resource_name}
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="p-8 flex items-center justify-center font-bold text-4xl">
                {record?.resource_total}
            </div>
            <p className='text-center'>{record.description}</p>
        </CardContent>
    </Card>
  )
}

export default AggregateCard