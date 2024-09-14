"use client"

import SubmitButton from '@/components/custom/submit-button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { ResourceFormSchema, TMeasureSchema, TResourceFormSchema } from '@/lib/schema/form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Save } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'

type Props = {
    resource?: TResourceFormSchema
    onSubmit: (values :TResourceFormSchema) => Promise<void>
    measures: TMeasureSchema[] | null
}

const ResourceForm:React.FC<Props> = ({
    resource, onSubmit, measures
}) => {
    const form = useForm<TResourceFormSchema>({
        resolver: zodResolver(ResourceFormSchema),
        defaultValues:{
            id: resource?.id ,
            name: resource?.name ?? "",
            description: resource?.description ?? "",
            measure: resource?.measure
        }
    })

    async function submitForm(values:TResourceFormSchema){
        await onSubmit(values);
        
        if (resource == undefined){
            form.reset()
        }
    }

    
  return (
    <div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)} className="space-y-4">
                <FormField 
                    control={form.control}
                    name="name"
                    render={({field})=>(
                        <FormItem>
                            <FormLabel>Name</FormLabel>

                            <FormControl>
                                <Input {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField 
                    control={form.control}
                    name="description"
                    render={({field})=>(
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="measure"
                    render={({field}) =>(
                        <FormItem>
                        <FormLabel>Unit of Measure</FormLabel>
                        <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Select a unit of Measure" />
                                </SelectTrigger>
                                <SelectContent className="bg-white w-full rounded-lg py-4 pr-4">
                                    { measures && measures?.map((measure)=>(
                                        <SelectItem key={measure.name} value={measure.id!.toString()}>{measure.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <SubmitButton submitting={form.formState.isSubmitting} className="w-full" Icon={Save} title='Save' />
            </form>
        </Form>
    </div>
  )
}

export default ResourceForm