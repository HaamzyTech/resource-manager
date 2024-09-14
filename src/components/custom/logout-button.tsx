import React from 'react'
import { Button } from '../ui/button'
import { signOut } from '@/db/auth/actions'

type Props = {}

const LogoutButton:React.FC<Props> = ({}) => {
  return (
    <div>
        <form action={signOut}>
            <Button className="bg-primary w-full hover:bg-secondary hover:text-black">
                Logout
            </Button>
        </form>
    </div>
  )
}

export default LogoutButton