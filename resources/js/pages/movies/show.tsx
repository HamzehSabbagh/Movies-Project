import { Link } from "@inertiajs/react";
import NavBar from "@/components/nav-bar";


type Movie = {
    id: number;
    title: string;
    description: string;
    release_date: string;
    category_id: number;
    artists: {
        id: number;
        name: string;
    }[];
    category?: {
        id: number;
        name: string;
    } | null;
};

type Props = {
    movie: Movie;
};

export default function Show({ movie }: Props) {
    return <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="mx-auto w-full max-w-3xl px-4 py-10">
            <div key={movie.id} className='space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'>
                <div>
                    <p className="text-3xl font-bold text-gray-900">{movie.title}</p>
                    <p className="text-sm text-gray-500">Movie details</p>
                </div>

                <div className='space-y-4 text-gray-700'>
                    <p>
                        <span className="font-semibold text-gray-900">Description:</span> {movie.description}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-900">Release Date:</span> {movie.release_date}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-900">Category:</span> {movie.category?.name ?? "Uncategorized"}
                    </p>
                    <div>
                        <p className="font-semibold text-gray-900">Artists:</p>
                        {movie.artists.length === 0 ? (
                            <p className="text-gray-500">No artists linked.</p>
                        ) : (
                            <ul className="mt-2 list-inside list-disc space-y-1">
                                {movie.artists.map((artist) => (
                                    <li key={artist.id}>{artist.name}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                    <Link href='/movies' className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">Back</Link>
                    <Link href={`/movies/${movie.id}/edit`} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500">Edit</Link>
                </div>
            </div>
        </div>
    </div>
}
