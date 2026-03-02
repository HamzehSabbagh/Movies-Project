import { Link } from "@inertiajs/react";
import NavBar from "@/components/nav-bar";

type PageProps = {
    auth: {
        user: {
            name: string
            role?: {
                name?: string
            } | null
        }
    }
}


export default function Dashboard({ auth }: PageProps) {
    const roleName = auth.user?.role?.name?.toLowerCase() ?? "user";
    const isAdmin = roleName === "admin";

    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f8fafc,_#e2e8f0)]">
            <NavBar />
            <div className="mx-auto w-full max-w-6xl px-4 py-10">
                <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 p-8 text-white">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Dashboard</p>
                        <h1 className="mt-3 text-4xl font-bold">Great Cinema Control Center</h1>
                        <p className="mt-3 max-w-3xl text-slate-200">
                            Manage movies, artists, scripts, and categories from one place.
                        </p>
                        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            {isAdmin ? `Admin: ${auth.user.name}` : `User: ${auth.user.name}`}
                        </div>
                    </div>


                    {isAdmin ? <div className="flex flex-wrap gap-3 p-6"><Link href="/movies/create" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500">
                        Create Movies
                    </Link>
                        <Link href="/scripts/create" className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                            Create Scripts
                        </Link></div> : <div className="flex flex-wrap gap-3 p-6"><Link href="/movies" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500">
                            Browse Movies
                        </Link>
                        <Link href="/scripts" className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                            Browse Scripts
                        </Link></div>}

                </section>

                <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <Link href="/movies" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Catalog</p>
                        <p className="mt-2 text-lg font-semibold text-slate-900">Movies</p>
                        <p className="mt-1 text-sm text-slate-600">
                            {isAdmin
                                ? "Create, edit, and organize movie records."
                                : "Browse movie records and view detailed information."}
                        </p>
                    </Link>
                    <Link href="/artists" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                        <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">Talent</p>
                        <p className="mt-2 text-lg font-semibold text-slate-900">Artists</p>
                        <p className="mt-1 text-sm text-slate-600">
                            {isAdmin
                                ? "Link artists to all movies they worked on."
                                : "Explore artists and see the movies they worked on."}
                        </p>
                    </Link>
                    <Link href="/scripts" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                        <p className="text-xs font-semibold uppercase tracking-wide text-amber-600">Content</p>
                        <p className="mt-2 text-lg font-semibold text-slate-900">Scripts</p>
                        <p className="mt-1 text-sm text-slate-600">
                            {isAdmin
                                ? "Store screenplay content by movie and artist."
                                : "Read screenplay content by movie and artist."}
                        </p>
                    </Link>
                    <Link href="/categories" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">Classification</p>
                        <p className="mt-2 text-lg font-semibold text-slate-900">Categories</p>
                        <p className="mt-1 text-sm text-slate-600">
                            {isAdmin
                                ? "Group movies by genre and theme."
                                : "Browse movies by genre and theme."}
                        </p>
                    </Link>
                </section>
            </div>
        </main>
    );
}
