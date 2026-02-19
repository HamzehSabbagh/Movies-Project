import { Link } from "@inertiajs/react";
import Button from "@/components/Button";
import NavBar from "@/components/nav-bar";
import Pagination from "@/components/Pagination";


type Movie = {
    id: number;
    title: string;
    description: string;
    release_date: string;
    category_id: number;
};

type PaginationLink = {
    url: string | null;
    label: string;
    active: boolean;
}

type Props = {
    movies: {
        data: Movie[];
        links: PaginationLink[]
    }
}

export default function Index({ movies }: Props) {
    return <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="mx-auto w-full max-w-6xl px-4 py-8">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <p className="text-3xl font-bold text-gray-900">Movies</p>
                    <p className="text-sm text-gray-500">Browse and manage your movie library.</p>
                </div>
                <Button href='/movies/create'>Create Movie</Button>
            </div>

            <div className="flex flex-col gap-4">
                {movies.data.length === 0 ? <p>Sorry We Currently Don't Have Any Movies</p> :
                    movies.data.map((m) => (
                        <div key={m.id} className='rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md'>
                            <div className='flex items-start justify-between gap-4'>
                                <div className='space-y-2'>
                                    <p className="text-xl font-semibold text-gray-900">{m.title}</p>
                                    <p className="text-sm text-gray-600">Description: {m.description.slice(0, 100)} {m.description.length > 100 && "..."}</p>
                                    <p className="text-sm text-gray-500">Release Date: {m.release_date}</p>
                                </div>

                                <Link href={`/movies/${m.id}`} className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                                    Details
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="mt-6">
                <Pagination paginations={movies.links} />
            </div>
        </div>
    </div>
}
