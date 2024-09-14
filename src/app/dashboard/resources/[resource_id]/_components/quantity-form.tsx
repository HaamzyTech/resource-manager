"use client"

import SubmitButton from '@/components/custom/submit-button'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { QuantityFormSchema, TQuantityFormSchema } from '@/lib/schema/form-schema'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon, Save } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'

type Props = {
    quantity?: TQuantityFormSchema
    product_id?: number
    onSubmit: (value:TQuantityFormSchema) => Promise<void>
}

const QuantityForm:React.FC<Props> = ({
    quantity, product_id, onSubmit
}) => {

    const form = useForm<TQuantityFormSchema>({
        resolver:zodResolver(QuantityFormSchema),
        defaultValues: {
            id: quantity?.id,
            product_id: quantity?.product_id ?? product_id,
            quantity: quantity?.quantity,
            date: quantity?.date
        }
    })

    async function submitForm(values:TQuantityFormSchema){
        await onSubmit(values);
        
        if (quantity === undefined || quantity === null){
            form.reset()
        }
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(submitForm)} className="space-y-4">
            <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                <FormLabel>Date of Capture</FormLabel>
                <Popover>
                    <PopoverTrigger asChild>
                    <FormControl>
                        <Button
                        variant={"outline"}
                        className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                        )}
                        >
                        {field.value ? (
                            format(field.value, "PPP")
                        ) : (
                            <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                    </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                    />
                    </PopoverContent>
                </Popover>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField 
                control={form.control}
                name="quantity"
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Quantity</FormLabel>
                        <FormControl>
                            <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            {/* <FormField 
                control={form.control}
                name="measure"
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Measure</FormLabel>
                        <FormControl>
                            <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            /> */}
            <SubmitButton submitting={form.formState.isSubmitting} className="w-full" Icon={Save} title='Save' />
        </form>
    </Form>
  )
}

export default QuantityForm