"use client"

import { TMeasureSchema, TResourceFormSchema } from "@/lib/schema/form-schema";
import { ColumnDef } from "@tanstack/react-table";
import ActionButtons from "./action-buttons";


export function createColumns(measures: TMeasureSchema[] ):ColumnDef<TResourceFormSchema>[]  {

    console.log(measures)
    return [
        {
            accessorKey:"name",
            header:"Resource Name"
        },
        {
            accessorKey:"description",
            header:"Description"
        },
        {
            accessorKey:"measure",
            header:"Unit of Measure",
            cell:({row}) => {
                const record = row.original
                const measure = measures?.find((value)=> value?.id == record?.measure)

                
                return (
                    <div className="">
                        {measure?.name}
                    </div>
                )
            },
            meta: {measures}
        },
        {
            id:"actions",
            header:"Actions",
            cell:({row})=> {

                const resource = row.original as TResourceFormSchema;

                return (
                    <ActionButtons resource={resource} />
                )
            }
        }
    ]
}