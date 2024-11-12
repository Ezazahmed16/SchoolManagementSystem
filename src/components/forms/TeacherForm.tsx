'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    userName: z.string()
        .min(3, { message: 'At least 3 charecter' })
        .max(20, { message: 'Max 20 charecter' }),
    email: z.string()
        .email({ message: "Invalid Email Address" }),
    password: z.string()
        .min(8, { message: 'At least 8 charecter' }),
    firstName: z.string().min(1, { message: 'First name is required!' }),
    lastName: z.string().min(1, { message: 'Last name is required!' }),
    phone: z.string().min(1, { message: 'Phone Number is required!' }),
    address: z.string().min(1, { message: 'Address is required!' }),
    birthday: z.date({ message: 'Birth Date is required!' }),
    sex: z.enum(["male", "female", "others"], { message: "Sex is required" }),
    img: z.instanceof(File, { message: "Image is required" }),
});

const TeacherForm = ({ type, data }: { type: "create" | "update"; data?: any }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = handleSubmit(data => {
        console.log(data)
    })

    return (
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
            <h1 className="text-xl font-semibold">Create a new teacher</h1>
            <span>Authentication Information</span>

            <div className="flex flex-col gap-2 w-full md:w-1/4">
                <label className="text-xs text-gray-500">User Name</label>
                <input type="text" {...register('userName')} className="ring-[1.5px] ring-gray-500 p-2 rounded-md text-sm w-full" />
                {errors.userName?.message && <p className="text-red-500 text-sm font-bold">{errors.userName?.message.toString()}</p>}
            </div>
            <span>Personal Information</span>


            {/* Submit Button */}
            <button className="bg-blue-400 text-white p-2 rounded-md">{type === "create" ? "Create" : "Update"}</button>
        </form>
    )
}

export default TeacherForm