
export type TErrorResponse = {
    code: string 
    message: string
} 

export type TRecordTotal = {
    resource_id: number
    resource_name: string
    resource_total: number
    measure: string 
    description: string
}