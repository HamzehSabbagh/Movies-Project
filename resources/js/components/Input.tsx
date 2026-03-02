import type { ReactNode } from "react";

type props = {
    htmlFor?: string;
    id?: string;
    name?: string;
    placeholder?: string;
    children?: ReactNode;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    type?: string;
}

export default function Input({ htmlFor, id, name, placeholder, children, value, onChange, required, type }: props) {
    return <div className="flex flex-col">
        <label htmlFor={htmlFor} className="mb-1 text-sm font-medium text-slate-700">{children}</label>
        <input
            id={id}
            name={name}
            placeholder={placeholder}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            value={value ?? ""}
            onChange={onChange}
            type={type}
            required={required}
        />
    </div>
}
