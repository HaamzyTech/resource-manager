"use server"

import { QuantityFormSchema, ResourceFormSchema, TQuantityFormSchema, TResourceFormSchema } from "@/lib/schema/form-schema";
import { createClient } from "@/lib/supabase/server";
import { TErrorResponse } from "@/lib/types";



/**
 * Create Resource
 * 
 * @param values 
 * @returns 
 */
export async function createResource(values:TResourceFormSchema){

    const parsed = ResourceFormSchema.parse({
        ...values
    })

    const supabase = createClient()

    const {data,error} = await supabase.from('resource')
    .insert({
        name: parsed.name,
        description: parsed.description,
        measure: parsed.measure
    })
    .match({is_deleted: false })

    if(error){
        console.log(error)
        const errorResponse:TErrorResponse = {
            code: error.code ?? '400',
            message: error.message ?? "Error while creating new resource"
        }

        return errorResponse;
    }

    return true;

}


export async function updateResource(values:TResourceFormSchema){

    const parsed = ResourceFormSchema.parse({
        ...values
    });

    const supabase = createClient();

    const {data, error} = await supabase.from('resource')
        .update({
            name: parsed.name,
            description: parsed.description,
            measure: parsed.measure
        })
        .match({id:parsed?.id});
    
    if(error){
        console.log(error)
        const errorResponse:TErrorResponse = {
            code: error.code ?? '400',
            message: error.message ?? "Error while creating new resource"
        }

        return errorResponse;
    }

    return true;   
}

/**
 * Resource Soft Delete
 * 
 * @param resource_id 
 * @returns 
 */
export async function softDelete(resource_id:number){

    const supabase = createClient();

    const {data,error} = await supabase.from('resource')
        .update({
            is_deleted: true
        })
        .match({ id: resource_id })
    
    if(error){
        console.log(error)
        const errorResponse:TErrorResponse = {
            code: error.code ?? '400',
            message: error.message ?? "Error while creating new resource"
        }

        return errorResponse;
    }
    
    return true
}


/**
 * CREATE QUANTITY RECORD
 * 
 * @param values 
 * @returns 
 */
export async function createQuantity(values:TQuantityFormSchema){

    const parsed = QuantityFormSchema.parse({
        ...values
    })

    const supabase = createClient();

    const {data,error} = await supabase.from('resource_quantity')
        .insert({
            date: parsed.date,
            quantity: parsed.quantity,
            product_id: parsed.product_id
        })

    if(error){
        console.log(error)
        const errorResponse:TErrorResponse = {
            code: error.code ?? '400',
            message: error.message ?? "Error while creating new record"
        }

        return errorResponse;
    }

    return true;
}


export async function updateQuantity(values:TQuantityFormSchema){
    
    const parsed = QuantityFormSchema.parse({
        ...values 
    });

    const supabase = createClient();

    const {data, error} = await supabase.from('resource_quantity')
        .update({
            date: parsed.date,
            quantity: parsed.quantity,
            product_id: parsed.product_id
        })
        .match({id: parsed.id})

    if(error){
        console.log(error)
        const errorResponse:TErrorResponse = {
            code: error.code ?? '400',
            message: error.message ?? "Error while updating record"
        }

        return errorResponse;
    }

    return true;
}