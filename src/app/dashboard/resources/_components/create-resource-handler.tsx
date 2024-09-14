"use client"

import React from 'react'
import ResourceForm from './resource-form'
import { TResourceFormSchema } from '@/lib/schema/form-schema'
import { createResource } from '@/db/resource/action'
import { useToast } from '@/hooks/use-toast'
import { useQueryClient } from '@tanstack/react-query'
import { useMeasure } from '@/hooks/custom-hooks'
import ContentLoading from '@/components/custom/content-loading'
import ContentLoadingError from '@/components/custom/content-loading-error'

type Props = {
    closeDialog: ()=>void
}

const CreateResourceHandler:React.FC<Props> = ({
  closeDialog
}) => {

  const {data, isLoading, isError} = useMeasure()

  const {toast} = useToast()
  const queryClient = useQueryClient()

  async function handleSubmit(values:TResourceFormSchema){
    const resource =  await createResource(values)

    if (resource === true){
      closeDialog()
      queryClient.invalidateQueries({ queryKey: ['resource_list'] })
      toast({
        title: "Success",
        description: "Resource created successfuly",
        variant:"success"
      })

    }else {
      toast({
        title: "Login Error",
        description: resource.message,
        variant:"destructive"
      })
    }
  }

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
        <ResourceForm onSubmit={handleSubmit} measures={data ?? []} />
    </div>
  )
}

export default CreateResourceHandler