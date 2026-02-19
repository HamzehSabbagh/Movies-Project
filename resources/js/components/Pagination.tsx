import { Link } from "@inertiajs/react";

type PaginationLink = {
    url: string | null;
    label: string;
    active: boolean;
}

type Props = {
    paginations: PaginationLink[]
}

export default function Pagination({ paginations }: Props) {
    return <div className="flex flex-wrap items-center gap-2">
        {paginations.map((p, i) => {
            if (!p.url) {
                return (
                    <span
                        key={i}
                        className="rounded-lg border border-gray-200 px-3 py-1 text-sm text-gray-400"
                        dangerouslySetInnerHTML={{ __html: p.label }}
                    />
                );
            }

            return (
                <Link
                    key={i}
                    href={p.url}
                    className={`rounded-lg border px-3 py-1 text-sm transition ${
                        p.active
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                    preserveScroll
                    dangerouslySetInnerHTML={{ __html: p.label }}
                />
            );
        })}
    </div>
}
