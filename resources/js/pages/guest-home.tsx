import { Link } from "@inertiajs/react";
import NavBar from "@/components/nav-bar";

export default function GuestHome() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
            <NavBar />
            <main className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
                <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                    <h1 className="text-3xl font-bold text-slate-900">Guest Page</h1>
                    <p className="mt-3 text-slate-600">
                        You are viewing the public guest page. Log in to access user or admin areas.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <Link href="/login" className="rounded-xl bg-slate-900 px-4 py-2 text-white hover:bg-slate-700">
                            Login
                        </Link>
                        <Link href="/register" className="rounded-xl border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">
                            Register
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}
