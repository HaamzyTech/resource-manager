import LogoutButton from '@/components/custom/logout-button'
import UserAvatar from '@/components/custom/user-avatar'
import { Separator } from '@/components/ui/separator'
import { getMyProfile } from '@/db/auth/queries'
import React, { ReactNode } from 'react'
import SideMenu from './_components/side-menu'

type Props = {
    children: ReactNode
}

const Layout:React.FC<Props> = async ({children}) => {

    const profile = await getMyProfile();
    

  return (
    <div className="flex items-start h-screen">
        {/* side menu */}
        <div className="w-3/12 p-4 space-y-6 relative h-full">
            <UserAvatar profile={profile} />

            <SideMenu />

            <div className="absolute w-full bottom-4 left-0 p-4">
                <LogoutButton />
            </div>
        </div>
        <Separator orientation="vertical" className="h-screen"/>
        
        {/* Main Body */}
        <div className="p-4 w-full">
            {children}
        </div>
    </div>
  )
}

export default Layout