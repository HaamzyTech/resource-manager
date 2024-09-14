import { TQuantityFormSchema, TResourceFormSchema } from "@/lib/schema/form-schema";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import ActionButtons from "./action-buttons";
// import ActionButtons from "./action-buttons";


export const columns:ColumnDef<TQuantityFormSchema>[] = [
    {
        accessorKey:"date",
        header:"Date",
        cell:({row}) =>{
            const resource = row.original as TQuantityFormSchema;

            return (
                <p>{format(resource.date, "PPP")}</p>
            )
        }
    },
    {
        accessorKey:"quantity",
        header:"Quantity"
    },
    {
        id:"actions",
        header:"Actions",
        cell:({row})=> {

            const resource = row.original as TQuantityFormSchema;

            return (
                <ActionButtons resource={resource} />
            )
        }
    },
]