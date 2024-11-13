"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import InputFields from "../InputFields";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}$/,
      "Birthday must be in the format YYYY-MM-DD!"
    ),
  sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  img: z.any(),
});

type Inputs = z.infer<typeof schema>;

const StudentForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: Partial<Inputs>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: data,
  });

  const onSubmit = handleSubmit((formData) => {
    console.log(formData);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new student" : "Update student details"}
      </h1>

      <span className="text-xs text-gray-400 font-medium"> 
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputFields
          label="Username"
          name="username"
          register={register}
          error={errors.username}
        />
        <InputFields
          label="Email"
          name="email"
          register={register}
          error={errors.email}
        />
        <InputFields
          label="Password"
          name="password"
          type="password"
          register={register}
          error={errors.password}
        />
      </div>

      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputFields
          label="First Name"
          name="firstName"
          register={register}
          error={errors.firstName}
        />
        <InputFields
          label="Last Name"
          name="lastName"
          register={register}
          error={errors.lastName}
        />
        <InputFields
          label="Phone"
          name="phone"
          register={register}
          error={errors.phone}
        />
        <InputFields
          label="Address"
          name="address"
          register={register}
          error={errors.address}
        />
        <InputFields
          label="Blood Type"
          name="bloodType"
          register={register}
          error={errors.bloodType}
        />
        <InputFields
          label="Birthday"
          name="birthday"
          type="date"
          register={register}
          error={errors.birthday}
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Sex</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("sex")}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">{errors.sex.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="Upload" width={28} height={28} />
            <span>Upload a photo</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {/* {errors.img?.message && (
            <p className="text-xs text-red-400">{errors.img.message}</p>
          )} */}
        </div>

      </div>

      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default StudentForm;
