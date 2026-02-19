import { Link } from "@inertiajs/react";
import NavBar from "@/components/nav-bar";


type Movie = {
    id: number;
    title: string;
    category_id: number;
}

type Category = {
    id: number;
    name: string;
    movies: Movie[];
}

type Props = {
    category: Category;
}


export default function Show({ category }: Props) {
    return <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="mx-auto w-full max-w-6xl px-4 py-10">
            <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm" key={category.id}>
                <p className="bg-gradient-to-r from-purple-500 to-red-600 bg-clip-text text-4xl font-bold text-transparent">
                    {category.name}
                </p>
                <p className="mt-1 text-sm text-gray-500">Category overview</p>
                <div className="mt-5 flex gap-3">
                    <Link
                        href={`/categories/${category.id}/edit`}
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                    >
                        Edit
                    </Link>
                    <Link
                        href={'/categories'}
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                    >
                        Back
                    </Link>
                </div>
            </div>

            <div className="mb-4">
                <p className="text-lg font-semibold text-gray-900">Movies in this category</p>
            </div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                {category.movies.map((e) => (
                    <Link
                        href={`/movies/${e.id}`}
                        className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                        key={e.id}
                    >
                        <p className="text-lg font-semibold text-gray-900">{e.title}</p>
                    </Link>
                ))}
            </div>
            {category.movies.length === 0 && (
                <p className="rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center text-gray-500">
                    No movies found in this category.
                </p>
            )}
        </div>
    </div>
}
