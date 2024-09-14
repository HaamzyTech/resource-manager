"use client"

import { LucideIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';

type Props = {
  children: ( fn:()=>void ) => React.ReactNode;
  title: string
  description?: string
  button_text?: string
  Icon?: LucideIcon
  className: string
  size?: string
}

const FormDialog : React.FC<Props> = ({children, title, description, button_text,Icon,className,size}) => {

  const [open, setOpen] = useState<boolean>(false)

  const closeDialog = () => {
    setOpen( (current) => !current )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className={className}>
            { Icon && <><Icon className="w-4 h-4" /> {button_text && <span className="">{button_text}</span>}</> }
        </DialogTrigger>
        <DialogContent className={size}>
          <DialogHeader className="border-b pb-2">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>

          {/* Form */}
          {children(closeDialog)}

        </DialogContent>
    </Dialog>
  )
}

export default FormDialog