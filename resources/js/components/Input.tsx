import type { ReactNode } from "react";

type props = {
    htmlFor: string;
    id: string;
    name: string;
    placeholder: string;
    children: ReactNode;
}

export default function Input({ htmlFor, id, name, placeholder, children }: props) {
    return <div className="flex flex-col">
        <label htmlFor={htmlFor}>{children}</label>
        <input id={id} name={name} placeholder={placeholder} className="border rounded-lg border-gray-400 px-2 py-1" />
    </div>
}