import { Link } from "@inertiajs/react";
import NavBar from "@/components/nav-bar";

export default function Home() {
    return <main className='min-h-screen bg-gray-50'>
        <NavBar />
        <div className="mx-auto w-full max-w-6xl px-4 py-10">
            <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-medium uppercase tracking-wide text-gray-500">Great Cinema</p>
                <p className="mt-2 text-4xl font-bold text-gray-900">Manage Movies, Artists, Scripts, and Categories</p>
                <p className="mt-3 max-w-3xl text-gray-600">
                    Keep your cinema data organized in one place. Track movie records, assign artists, manage scripts, and browse by category.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/movies" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500">
                        Browse Movies
                    </Link>
                    <Link href="/scripts" className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                        View Scripts
                    </Link>
                </div>
            </section>

            <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Link href="/movies" className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <p className="text-lg font-semibold text-gray-900">Movies</p>
                    <p className="mt-1 text-sm text-gray-600">Create, edit, and organize movie records.</p>
                </Link>
                <Link href="/artists" className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <p className="text-lg font-semibold text-gray-900">Artists</p>
                    <p className="mt-1 text-sm text-gray-600">Link artists to all movies they worked on.</p>
                </Link>
                <Link href="/scripts" className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <p className="text-lg font-semibold text-gray-900">Scripts</p>
                    <p className="mt-1 text-sm text-gray-600">Store screenplay content by movie and artist.</p>
                </Link>
                <Link href="/categories" className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <p className="text-lg font-semibold text-gray-900">Categories</p>
                    <p className="mt-1 text-sm text-gray-600">Group movies by genre and theme.</p>
                </Link>
            </section>
        </div>
    </main>;
}
