import { Link } from '@inertiajs/react';
import type { ReactNode } from "react";

type Props = {
    href: string;
    children: ReactNode;
}




export default function Button({ href, children }: Props) {
    return <Link href={href} className='rounded-lg border border-white px-3 py-2 bg-gray-200 text-black'>{children}</Link>
}