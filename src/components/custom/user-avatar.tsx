import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { TProfileFormSchema } from '@/lib/schema/form-schema'

type Props = {
  profile: TProfileFormSchema | null
}

const UserAvatar:React.FC<Props> = ({profile}) => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Avatar className="">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>
            {profile?.first_name?.at(0) ?? ""}
            {profile?.last_name?.at(0) ?? ""}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h4 className="font-bold">
            {`${profile?.first_name ?? ""} ${profile?.last_name ?? ""}`}
          </h4>
          <p className="text-slate-500 text-sm">
            {profile?.email}
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserAvatar