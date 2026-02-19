import { Link } from "@inertiajs/react";
import NavBar from "@/components/nav-bar";


type Movie = {
    id: number;
    title: string;
}

type Artist = {
    id: number;
    name: string;
    role: string;
    movies: Movie[];
}

type Props = {
    artist: Artist;
}

export default function Show({ artist }: Props) {
    return <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="mx-auto w-full max-w-6xl px-4 py-10">
            <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold text-gray-900">{artist.name}</p>
                <p className="mt-1 text-sm text-gray-500">Artist details</p>
                <p className="mt-4 text-gray-700">
                    <span className="font-semibold text-gray-900">Role:</span> {artist.role}
                </p>
                <div className="mt-5 flex gap-3">
                    <Link
                        href={`/artists/${artist.id}/edit`}
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                    >
                        Edit
                    </Link>
                    <Link
                        href="/artists"
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                    >
                        Back
                    </Link>
                </div>
            </div>

            <div className="mb-4">
                <p className="text-lg font-semibold text-gray-900">Movies worked on</p>
            </div>

            {artist.movies.length === 0 ? (
                <p className="rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center text-gray-500">
                    No movies linked to this artist.
                </p>
            ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {artist.movies.map((movie) => (
                        <Link
                            key={movie.id}
                            href={`/movies/${movie.id}`}
                            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <p className="text-lg font-semibold text-gray-900">{movie.title}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    </div>
}
