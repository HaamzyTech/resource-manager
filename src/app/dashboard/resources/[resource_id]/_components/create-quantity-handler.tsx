"use client"

import React from 'react'
import QuantityForm from './quantity-form'
import { TQuantityFormSchema } from '@/lib/schema/form-schema'
import { useParams } from 'next/navigation'
import { createQuantity } from '@/db/resource/action'
import { useToast } from '@/hooks/use-toast'
import { useQueryClient } from '@tanstack/react-query'

type Props = {
    closeDialog: () => void
}

const CreateQuantityHandler:React.FC<Props> = ({
  closeDialog
}) => {

  const params = useParams()
  const {toast} = useToast()
  const queryClient = useQueryClient()

  async function handleSubmit(values:TQuantityFormSchema){
    const result = await createQuantity(values);

    if (result === true){
      closeDialog()
      queryClient.invalidateQueries({ queryKey: ['quantity_list'] })
      toast({
        title: "Success",
        description: "Resource created successfuly",
        variant:"success"
      })

    }else {
      toast({
        title: "Error",
        description: result.message,
        variant:"destructive"
      })
    }
  }

  return (
    <div>
        <QuantityForm onSubmit={handleSubmit} product_id={Number(params?.resource_id)}/>
    </div>
  )
}

export default CreateQuantityHandler