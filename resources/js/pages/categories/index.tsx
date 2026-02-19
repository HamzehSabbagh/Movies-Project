import { Link } from "@inertiajs/react";
import NavBar from "@/components/nav-bar";
import Pagination from "@/components/Pagination";



type Category = {
    id: number;
    name: string;
}

type PaginationLinks = {
    url: string | null;
    active: boolean;
    label: string;
}

type Props = {
    categories: {
        data: Category[]
        links: PaginationLinks[];
    }
}

export default function Index({ categories }: Props) {
    return <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="mx-auto w-full max-w-6xl px-4 py-8">
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <p className="text-3xl font-bold text-gray-900">Categories</p>
                    <p className="text-sm text-gray-500">Organize movies by genre and theme.</p>
                </div>
                <Link
                    href='/categories/create'
                    className='rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500'
                >
                    Create Category
                </Link>
            </div>

            {categories.data.length === 0 ? (
                <p className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-500">
                    No categories yet.
                </p>
            ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.data.map((c) =>
                        <Link
                            key={c.id}
                            href={`/categories/${c.id}`}
                            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                            <p className="bg-gradient-to-r from-purple-500 to-red-600 bg-clip-text text-center text-2xl font-semibold text-transparent">
                                {c.name}
                            </p>
                        </Link>
                    )}
                </div>
            )}

            <div className="mt-6">
                <Pagination paginations={categories.links} />
            </div>
        </div>
    </div>
}
