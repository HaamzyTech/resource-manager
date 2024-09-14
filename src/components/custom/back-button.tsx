"use client"

import React from 'react'
import { CircleArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

type Props = {
    title?: string
}

const BackButton:React.FC<Props> = ({title}) => {
    const router = useRouter();

    const navigateBack = ()=>{
       router.back()
    }

  return (
    <Button onClick={navigateBack} className="flex items-center space-x-2" variant="outline">
      <CircleArrowLeft className="w-4 h-4" /> {title && <span className="">{title}</span>} 
    </Button>
  )
}

export default BackButton