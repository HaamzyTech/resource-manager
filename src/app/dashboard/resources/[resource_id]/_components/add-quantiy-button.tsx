"use client"

import { PlusCircleIcon } from 'lucide-react'
import React from 'react'
import CreateQuantityHandler from './create-quantity-handler'
import FormDialog from '@/components/custom/form-dialog'
import { useSearchParams } from 'next/navigation'

type Props = {}

const AddQuantityButton:React.FC<Props> = ({

}) => {

    const searchParams = useSearchParams()

  return (
    <FormDialog
        className="flex items-center bg-primary rounded-lg space-x-2 px-6 py-2 text-sm text-white"
        title={`${searchParams.get('name')} Record`}
        description="Add a new resouce to record"
        button_text='Add Record'
        Icon={PlusCircleIcon}
        size="max-w-3xl bg-white"
    >
        {
            (fn)=>{
                return (
                    <CreateQuantityHandler closeDialog={fn} />
                )
            }
        }
    </FormDialog>
  )
}

export default AddQuantityButton