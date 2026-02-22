import { Link } from "@inertiajs/react";
import NavBar from "@/components/nav-bar";
import Pagination from "@/components/Pagination";

type Artist = {
    id: number;
    name: string;
    role: string;
}

type PaginationLinks = {
    url: string | null;
    active: boolean;
    label: string;
}

type Props = {
    artists: {
        data: Artist[]
        links: PaginationLinks[]
    }
}

export default function Index({ artists }: Props) {
    return <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="mx-auto w-full max-w-6xl px-4 py-8">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <p className="text-3xl font-bold text-gray-900">Artists</p>
                    <p className="text-sm text-gray-500">Discover the creative people behind your favorite movies.</p>
                </div>
                <Link
                    href="/artists/create"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                >
                    Create Artist
                </Link>
            </div>

            {artists.data.length === 0 ? (
                <p className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-500">
                    There is currently no artists data.
                </p>
            ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {artists.data.map((a) => (
                        <div
                            key={a.id}
                            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <p className="text-lg font-semibold text-gray-900">{a.name}</p>
                            <p className="mt-1 text-sm text-gray-600">{a.role}</p>
                            <div className="mt-4">
                                <Link
                                    href={`/artists/${a.id}`}
                                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                                >
                                    Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="mt-6">
                <Pagination paginations={artists.links} />
            </div>
        </div>
    </div>
}
