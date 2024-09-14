import {z} from "zod"

/**
 * User Login
 */
export const LoginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8,{message:"The password must be atleast 8 characters"})
})

export type TLoginFormSchema = z.infer<typeof LoginFormSchema>


/**
 * Resource Form
 */
export const ResourceFormSchema = z.object({
    id:z.number().optional(),
    name: z.string().min(2,{message:"The name must be at least 2 characters"}),
    description: z.string().min(2,{message:"The description must be at least 2 characters"}),
    measure: z.coerce.number(),
})

export type TResourceFormSchema = z.infer<typeof ResourceFormSchema>


/**
 * QUANTITY FORM
 */
export const QuantityFormSchema = z.object({
    id:z.number().optional(),
    product_id:z.number(),
    date:z.coerce.date(),
    quantity: z.coerce.number(),
    measure: z.number().optional()
})

export type TQuantityFormSchema = z.infer<typeof QuantityFormSchema>


/**
 *  Measure
 */
export const MeasureFormSchema = z.object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string()
})

export type TMeasureSchema = z.infer<typeof MeasureFormSchema>

/**
 * User Profile
 */
export const ProfileFormSchema = z.object({
    id: z.number().optional(),
    first_name:z.string().min(2,{message:"The first name should be at lest 2 characters"}),
    last_name: z.string().min(2,{message:"The last name should be at least 2 characters"}),
    email: z.string().email(),
    avatar: z.string().optional()
})

export type TProfileFormSchema = z.infer<typeof ProfileFormSchema>