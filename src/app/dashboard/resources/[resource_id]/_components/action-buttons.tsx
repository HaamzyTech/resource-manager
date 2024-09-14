import ActionAlert from '@/components/custom/action-alert-dialog'
import FormDialog from '@/components/custom/form-dialog'
import { Button } from '@/components/ui/button'
import { TQuantityFormSchema, TResourceFormSchema } from '@/lib/schema/form-schema'
import { EyeIcon, PencilLineIcon, TrashIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { softDelete } from '@/db/resource/action'
import { useQueryClient } from '@tanstack/react-query'
import UpdateQuantityHandler from './update-quantity-handler'
import { format } from 'date-fns'

type Props = {
    resource: TQuantityFormSchema
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
        <FormDialog
            className="flex items-center border border-green-500 text-green-500 rounded-md  py-2 px-3 text-sm hover:border-green-700 hover:text-green-700 hover:bg-slate-100"
            title={`Edit ${format(resource.date, 'PPP')}`}
            description="resource Details Update"
            button_text=''
            Icon={PencilLineIcon}
            size="max-w-4xl bg-white"
        >
            {(fn)=>(
                <UpdateQuantityHandler quantity={resource} closeDialog={fn} />
            )}
        </FormDialog>

        <ActionAlert
            className="flex items-center space-x-2 text-sm border text-red-500 border-red-500 py-2 px-3 rounded-md hover:border-red-700 hover:text-red-700 hover:bg-slate-100"
            title={`Delete Record ${format(resource.date, 'PPP')}`}
            description={`Are you sure you want to delete the record ${format(resource.date, 'PPP')}, all information related to this record will be accessible. `}
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