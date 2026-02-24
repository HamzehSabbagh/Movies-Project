import NavBar from "@/components/nav-bar";
import { Link } from "@inertiajs/react";

export default function UserHome() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-slate-100">
            <NavBar />
            <main className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
                <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                    <h1 className="text-3xl font-bold text-slate-900">User Dashboard</h1>
                    <p className="mt-3 text-slate-600">
                        This page is only for authenticated users with the <span className="font-semibold">user</span> role.
                    </p>
                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="mt-6 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-100"
                    >
                        Log out
                    </Link>
                </section>
            </main>
        </div>
    );
}
