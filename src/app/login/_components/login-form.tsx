"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginFormSchema, TLoginFormSchema } from '@/lib/schema/form-schema'
import { Input } from '@/components/ui/input'
import SubmitButton from '@/components/custom/submit-button'
import { signIn } from '@/db/auth/actions'
import { useToast } from '@/hooks/use-toast'

type Props = {}

const LoginForm:React.FC<Props> = ({

}) => {
    const form = useForm<TLoginFormSchema>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues:{

        }
    })

    const {toast} = useToast()

    async function onSubmit(values:TLoginFormSchema){

        const error = await signIn(values);

        if (error){
            toast({
                title: "Login Error",
                description: error.message,
                variant:"destructive"
            })
        }
    }

  return (
    <div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField 
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <SubmitButton submitting={form.formState.isSubmitting} className="w-full" title='Login' />
            </form>
        </Form>
    </div>
  )
}

export default LoginForm