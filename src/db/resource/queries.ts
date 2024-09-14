"use server"

import { TMeasureSchema, TQuantityFormSchema, TResourceFormSchema } from "@/lib/schema/form-schema";
import { createClient } from "@/lib/supabase/server";
import { TRecordTotal } from "@/lib/types";


/**
 * GET RESOURCES
 * 
 * @returns 
 */
export async function getResources():Promise<TResourceFormSchema[]|null>{
    const supabase = createClient()

    const {data,error} = await supabase.from('resource')
        .select()
        .returns<TResourceFormSchema[]>()

    if (error){
        console.log(error)
        return null
    }

    return data;
}

export async function getMeasures():Promise<TMeasureSchema[]|null>{
    const supabase = createClient()

    const {data, error} = await supabase.from('measure')
        .select()
        .returns<TMeasureSchema[]>()

    if (error){
        console.log(error)
        return null
    }

    return data;
}

/**
 * GET RESOURCE QUANTITIES
 * 
 * @param resource_id 
 * @returns 
 */
export async function getQuantities( resource_id: number):Promise<TQuantityFormSchema[]|null>{
    
    const supabase = createClient();

    const {data,error} = await supabase.from('resource_quantity')
        .select()
        .match({ product_id: resource_id })
        .returns<TQuantityFormSchema[]>()

    if (error){
        console.log(error)
        return null
    }

    return data
}



export async function getResourceAggregates():Promise<TRecordTotal[]|null>{

    const supabase = createClient()

    const {data,error} = await supabase.rpc('resource_totals')
        .returns<TRecordTotal[]>()

    if (error){
        console.log(error)
        return null
    }

    return data
}