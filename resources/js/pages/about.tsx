import { Link } from "@inertiajs/react";
import NavBar from "@/components/nav-bar";


export default function About() {
    return <main className='min-h-screen bg-gray-50'>
        <NavBar />
        <div className="mx-auto w-full max-w-5xl px-4 py-10">
            <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <p className="text-3xl font-bold text-gray-900">About Great Cinema</p>
                <p className="mt-3 text-gray-600">
                    Great Cinema is a data management app for tracking movies, artists, scripts, and categories.
                    It is designed for quick CRUD workflows and clear relationship mapping between entities.
                </p>
            </section>

            <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <p className="text-xl font-semibold text-gray-900">How It Works</p>
                <div className="mt-4 space-y-3 text-gray-700">
                    <p><span className="font-semibold text-gray-900">Movies:</span> Core records with release date and category.</p>
                    <p><span className="font-semibold text-gray-900">Artists:</span> Many-to-many relation with movies.</p>
                    <p><span className="font-semibold text-gray-900">Scripts:</span> Linked to one movie and one artist.</p>
                    <p><span className="font-semibold text-gray-900">Categories:</span> One category can contain many movies.</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/movies" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500">
                        Explore Movies
                    </Link>
                    <Link href="/artists" className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                        Explore Artists
                    </Link>
                </div>
            </section>
        </div>
    </main>;
}
