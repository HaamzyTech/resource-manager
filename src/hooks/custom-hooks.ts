import { getMeasures, getQuantities, getResourceAggregates, getResources } from "@/db/resource/queries";
import { useQuery } from "@tanstack/react-query";


/**
 * Use Resource
 * 
 * @returns 
 */
export function useResources(){
    const queryKey = ['resource_list'];
    const queryFn = async ()=>{
        return await getResources();
    }

    return useQuery({queryKey,queryFn});
}


/**
 * User Resource aggregates
 * 
 * @returns 
 */
export function useResourcesAggregates(){
    const queryKey = ['resource_aggregates'];
    const queryFn = async ()=>{
        return await getResourceAggregates();
    }

    return useQuery({queryKey,queryFn});
}


/**
 * Use Quantity
 * 
 * @returns 
 */
export function useQuantities( resource_id:number ){
    const queryKey = ['quantity_list', resource_id];
    const queryFn = async ()=>{
        return await getQuantities( resource_id );
    }

    return useQuery({queryKey,queryFn});
}


export function useMeasure(){
    const queryKey = ['measure_list'];
    const queryFn = async ()=>{
        return await getMeasures();
    }

    return useQuery({queryKey,queryFn});
}