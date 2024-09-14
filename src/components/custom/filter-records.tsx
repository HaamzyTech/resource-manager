"use client"

import React, { useEffect } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { CalendarIcon, FilterIcon, X } from 'lucide-react'
import { format, subDays } from 'date-fns'
import { DateRange } from 'react-day-picker'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { Calendar } from '../ui/calendar'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Props = {}

const FilterDatePicker = (props: Props) => {

    const router = useRouter()
    const pathname = usePathname();
    const searchParams = useSearchParams()

    const [date, setDate] = React.useState<DateRange | undefined>({
        from: subDays(new Date(), 6),
        to: new Date(), 
    })


    useEffect(() => {
        setDate({
            from: searchParams.get("from") ? new Date(Date.parse(searchParams.get("from") || "")) :subDays(new Date(), 6),
            to: searchParams.get("to") ? new Date (Date.parse(searchParams.get("to") || "")) : new Date()
        });
    }, [searchParams]);


    function handleFilter(){
        router.push(`${pathname}?name=${searchParams.get('name')}&from=${date?.from?.toLocaleDateString()}&to=${date?.to?.toLocaleDateString()}`)
    }

    function handleClearFilter(){
        router.push(`${pathname}?name=${searchParams.get("name")}`)
    }

    if (searchParams.get("from") || searchParams.get("to")){
        return(
            <Button 
                variant="outline" 
                className="flex items-center space-x-2 bg-red-100"
                onClick={handleClearFilter}
            >
                <X className='w-4 h-4' />
                <span>Clear Filter</span>
            </Button>
        )
    }

  return (
    <Popover>
        <PopoverTrigger className="flex items-center space-x-2 border rounded-lg border-gray-300 px-4 py-1.5">
            <FilterIcon className="w-4 h-4"/>
            <span>Filter</span>
        </PopoverTrigger>
        <PopoverContent className="mr-2 pr-3 space-y-4">
            <div className={cn("grid gap-2",)}>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                            "justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                                {date?.from ? (
                                    date.to ? (
                                        <>
                                            {format(date.from, "LLL dd, y")} -{" "}
                                            {format(date.to, "LLL dd, y")}
                                        </>
                                    ) : (
                                        format(date.from, "LLL dd, y")
                                    )
                                ) : (
                                    <span>Pick a date</span>
                                )}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={setDate}
                            numberOfMonths={2}
                            disabled={(date) =>
                                date > new Date() || date < new Date("2010-01-01")
                                }
                        />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="">
                <Button 
                    variant="outline"
                    onClick={handleFilter}
                >Apply Filter</Button>
            </div>
        </PopoverContent>
    </Popover>
  )
}

export default FilterDatePicker