import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type InputFieldProps = {
    label: string;
    type?: string;
    register: any;
    name: string;
    defaultValue?: string;
    error?: FieldError;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputFields = ({
    label,
    type = "text",
    register,
    name,
    defaultValue = "",
    error,
    inputProps,
}: InputFieldProps) => {
    return (
        <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="text-xs text-gray-500">{label}</label>
            <input
                type={type}
                {...register(name)}
                defaultValue={defaultValue}
                className="ring-[1.5px] ring-gray-500 p-2 rounded-md text-sm w-full"
                {...inputProps}
            />
            {error?.message && (
                <p className="text-red-500 text-sm font-bold">{error.message}</p>
            )}
        </div>
    );
};

export default InputFields;
