import React from 'react'
import { LucideIcon } from 'lucide-react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog'

type Props = {
    className: string
    title: string
    description: string
    action?: ()=>{}
    Icon?: LucideIcon
    button_text?: string
    action_title: string
    Action_Icon?:LucideIcon
    action_className?: string
}

const ActionAlert: React.FC<Props>  = ({className, Icon, button_text, title, description, action, action_title, action_className,Action_Icon}) => {
  return (
    <AlertDialog>
        <AlertDialogTrigger className={className}>
            { Icon && <><Icon className="w-4 h-4" /> {button_text && <span className="">{button_text}</span>}</> }
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
                <AlertDialogTitle>{title}</AlertDialogTitle>
                <AlertDialogDescription>{description}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className={action_className} onClick={action}>
                    {Action_Icon && <Action_Icon className="w-4 h-4" />}
                    <span>{action_title}</span>
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default ActionAlert