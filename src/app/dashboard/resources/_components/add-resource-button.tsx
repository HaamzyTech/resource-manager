"use client"

import FormDialog from '@/components/custom/form-dialog'
import { PlusCircleIcon } from 'lucide-react'
import React from 'react'
import CreateResourceHandler from './create-resource-handler'

type Props = {}

const AddResourceButton:React.FC<Props> = ({}) => {
  return (
    <FormDialog
        className="flex items-center bg-primary rounded-lg space-x-2 px-6 py-2 text-sm text-white"
        title="Resource Form"
        description="Add a new resouce to track"
        button_text='Add Resource'
        Icon={PlusCircleIcon}
        size="max-w-3xl bg-white"
    >
        {
            (fn)=>{
                return (
                    <CreateResourceHandler closeDialog={fn} />
                )
            }
        }
    </FormDialog>
  )
}

export default AddResourceButton