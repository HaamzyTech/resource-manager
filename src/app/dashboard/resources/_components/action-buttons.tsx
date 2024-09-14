import ActionAlert from '@/components/custom/action-alert-dialog'
import FormDialog from '@/components/custom/form-dialog'
import { Button } from '@/components/ui/button'
import { TResourceFormSchema } from '@/lib/schema/form-schema'
import { EyeIcon, PencilLineIcon, TrashIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import UpdateResourceHandler from './update-resource-handler'
import { softDelete } from '@/db/resource/action'
import { useQueryClient } from '@tanstack/react-query'

type Props = {
    resource: TResourceFormSchema
}

const ActionButtons:React.FC<Props> = ({
    resource
}) => {

    const queryClient = useQueryClient()
    
    async function handleDelete( client_id: number ){
        const deleted = await softDelete(client_id);

        if (deleted === true){
            queryClient.invalidateQueries({ queryKey: ['client_list'] })
        }else {

        }
    }

  return (
    <div className="flex items-center space-x-2">
        <Link href={`/dashboard/resources/${resource.id}?name=${resource?.name}`}>
            <Button variant="outline" size="sm" className="border-blue-400">
                <EyeIcon className="w-4 h-4 text-blue-400" />
            </Button>
        </Link>
        <FormDialog
            className="flex items-center border border-green-500 text-green-500 rounded-md  py-2 px-3 text-sm hover:border-green-700 hover:text-green-700 hover:bg-slate-100"
            title={`Edit ${resource.name}`}
            description="resource Details Update"
            button_text=''
            Icon={PencilLineIcon}
            size="max-w-4xl bg-white"
        >
            {(fn)=>(
                <UpdateResourceHandler resource={resource} closeDialog={fn} />
            )}
        </FormDialog>

        <ActionAlert
            className="flex items-center space-x-2 text-sm border text-red-500 border-red-500 py-2 px-3 rounded-md hover:border-red-700 hover:text-red-700 hover:bg-slate-100"
            title={`Delete ${resource.name}`}
            description={`Are you sure you want to delete the resource ${resource.name}, all information related to this resource will be accessible. `}
            Icon={TrashIcon}
            button_text=""
            action={() => handleDelete(resource.id!)}
            action_title="Delete"
            Action_Icon={TrashIcon}
            action_className="bg-red-500 text-white flex items-center space-x-2 hover:bg-red-700"
        />
    </div>
  )
}

export default ActionButtons