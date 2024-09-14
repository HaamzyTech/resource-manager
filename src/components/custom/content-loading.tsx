"use client"

import React from 'react'
import { Skeleton } from '../ui/skeleton'

type Props = {}

const ContentLoading = (props: Props) => {
  return (
    <div className="space-y-2">
        <Skeleton className="w-full p-4" />
        <Skeleton className="w-full p-4" />
        <Skeleton className="w-1/2 p-4" />
        <Skeleton className="w-1/4 p-4" />
    </div>
  )
}

export default ContentLoading