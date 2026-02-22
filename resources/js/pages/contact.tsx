import { Link } from "@inertiajs/react";
import NavBar from "@/components/nav-bar";

export default function Contact() {
    return <main className='min-h-screen bg-gray-50'>
        <NavBar />
        <div className="mx-auto w-full max-w-4xl px-4 py-10">
            <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <p className="text-3xl font-bold text-gray-900">Contact</p>
                <p className="mt-3 text-gray-600">
                    For project questions, feedback, or collaboration requests, use the details below.
                </p>
            </section>

            <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <p className="text-sm font-medium uppercase tracking-wide text-gray-500">Email</p>
                    <p className="mt-2 text-lg font-semibold text-gray-900">team@greatcinema.local</p>
                    <p className="mt-1 text-sm text-gray-600">General support and feature requests.</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                    <p className="text-sm font-medium uppercase tracking-wide text-gray-500">Hours</p>
                    <p className="mt-2 text-lg font-semibold text-gray-900">Mon - Fri, 9:00 - 18:00</p>
                    <p className="mt-1 text-sm text-gray-600">UTC+3 standard response window.</p>
                </div>
            </section>

            <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <p className="text-xl font-semibold text-gray-900">Quick Links</p>
                <div className="mt-4 flex flex-wrap gap-3">
                    <Link href="/movies/create" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500">
                        Add Movie
                    </Link>
                    <Link href="/artists/create" className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                        Add Artist
                    </Link>
                    <Link href="/scripts/create" className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                        Add Script
                    </Link>
                </div>
            </section>
        </div>
    </main>;
}
