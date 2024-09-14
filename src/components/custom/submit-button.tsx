"use client"

import React from 'react'
import { Button } from '../ui/button'
import { Loader, LucideIcon } from 'lucide-react'

type Props = {
    className?:string
    submitting: boolean
    Icon?: LucideIcon
    title: string
}

const SubmitButton : React.FC<Props> = ({className, submitting,Icon, title}) => {

  return (
    <Button size="sm" disabled={submitting} type="submit" className={className}>
        <div className='flex items-center justify-center space-x-4'>
            <span>
                {submitting ? <Loader className="w-5 animate-spin" /> : Icon && <Icon className='w-5 ' />}
            </span>
            <span className="text-md">{submitting ? "submitting" : title}</span>
        </div>
    </Button>
  )
}

export default SubmitButton