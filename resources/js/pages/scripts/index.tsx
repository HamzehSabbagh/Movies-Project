import NavBar from "@/components/nav-bar";
import Pagination from "@/components/Pagination";
import { Link } from "@inertiajs/react";

type Script = {
    id: number;
    title: string;
    content: string;
    movie_id: number;
    movie: {
        id: number;
        title: string;
    } | null;
}

type PaginateLinks = {
    url: string | null;
    active: boolean;
    label: string;
}

type Props = {
    scripts: {
        data: Script[]
        links: PaginateLinks[]
    };
}

export default function Index({ scripts }: Props) {
    const PREVIEW_LIMIT = 220;

    return <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="mx-auto w-full max-w-6xl px-4 py-8">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <p className="text-3xl font-bold text-gray-900">Scripts</p>
                    <p className="text-sm text-gray-500">Read and manage screenplay entries linked to movies.</p>
                </div>
                <Link
                    href="/scripts/create"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                >
                    Create Script
                </Link>
            </div>

            {scripts.data.length === 0 ? (
                <p className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-500">
                    There are no scripts yet.
                </p>
            ) : (
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {scripts.data.map((s) => (
                        <div
                            key={s.id}
                            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <p className="text-xl font-semibold text-gray-900">{s.title}</p>
                            <p className="mt-2 text-sm text-gray-500">
                                Movie: <span className="font-medium text-gray-700">{s.movie?.title ?? "Unlinked movie"}</span>
                            </p>
                            <p className="mt-3 text-sm text-gray-700">
                                {s.content.slice(0, PREVIEW_LIMIT)}{s.content.length > PREVIEW_LIMIT ? "..." : ""}
                            </p>
                            <div className="mt-4">
                                <Link
                                    href={`/scripts/${s.id}`}
                                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                                >
                                    Show
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="mt-6">
                <Pagination paginations={scripts.links} />
            </div>
        </div>
    </div>
}
