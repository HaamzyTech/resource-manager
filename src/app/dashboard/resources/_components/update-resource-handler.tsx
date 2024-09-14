import { TResourceFormSchema } from '@/lib/schema/form-schema'
import React from 'react'
import ResourceForm from './resource-form'
import { useToast } from '@/hooks/use-toast'
import { useQueryClient } from '@tanstack/react-query'
import { updateResource } from '@/db/resource/action'
import ContentLoading from '@/components/custom/content-loading'
import ContentLoadingError from '@/components/custom/content-loading-error'
import { useMeasure } from '@/hooks/custom-hooks'

type Props = {
    resource:TResourceFormSchema
    closeDialog: ()=>void
}

const UpdateResourceHandler:React.FC<Props> = ({
    resource, closeDialog
}) => {

  const {data, isLoading, isError} = useMeasure()
  
  const {toast} = useToast()
  const queryClient = useQueryClient()
  
  async function handleSubmit(values:TResourceFormSchema){
    const resource =  await updateResource(values)

    if (resource === true){
      closeDialog()
      queryClient.invalidateQueries({ queryKey: ['resource_list'] })
      toast({
        title: "Success",
        description: "Resource updated successfuly",
        variant:"success"
      })

    }else {
      toast({
        title: "Update Error",
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
    <ResourceForm resource={resource} onSubmit={handleSubmit} measures={data ?? []}/>
  )
}

export default UpdateResourceHandler