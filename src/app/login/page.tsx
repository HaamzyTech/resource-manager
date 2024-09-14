import React from 'react'
import LoginForm from './_components/login-form'

type Props = {
    
}

const LoginPage:React.FC<Props> = ({}) => {
  return (
    <div className="flex items-center">
      <div className="bg-primary w-1/2 h-screen flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl text-white">ZEL-Resource Manager</h1>
      </div>
      <div className="w-1/2 flex flex-col h-screen items-center justify-center ">
        <div className="w-1/2 space-y-6">
        <h2 className="font-bold text-2xl">Login</h2>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default LoginPage