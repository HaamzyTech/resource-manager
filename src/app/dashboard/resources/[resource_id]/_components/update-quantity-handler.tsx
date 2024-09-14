"use client"

import React from 'react'
import QuantityForm from './quantity-form'
import { TQuantityFormSchema } from '@/lib/schema/form-schema'
import { useToast } from '@/hooks/use-toast'
import { useQueryClient } from '@tanstack/react-query'
import { updateQuantity } from '@/db/resource/action'

type Props = {
    quantity: TQuantityFormSchema
    closeDialog: () => void
}

const UpdateQuantityHandler:React.FC<Props> = ({
    quantity, closeDialog
}) => {

    const {toast} = useToast()
    const queryClient = useQueryClient()
    
    async function handleSubmit(values:TQuantityFormSchema){
        const result = await updateQuantity(values);

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
        <QuantityForm onSubmit={handleSubmit} quantity={quantity}/>
    </div>
  )
}

export default UpdateQuantityHandler