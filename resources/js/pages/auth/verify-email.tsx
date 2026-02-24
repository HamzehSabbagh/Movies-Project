import { Link, useForm } from "@inertiajs/react";
import NavBar from "@/components/nav-bar";

type VerifyEmailProps = {
    status?: string;
};

export default function VerifyEmail({ status }: VerifyEmailProps) {
    const { post, processing } = useForm({});

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
            <NavBar />
            <main className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-14 sm:px-6">
                <section className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white/95 p-8 shadow-xl shadow-slate-300/30 backdrop-blur sm:p-10">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Verify Your Email</h1>
                    <p className="mt-3 text-sm text-slate-600">
                        We sent a verification link to your email address. Click it to activate your account.
                    </p>

                    {status === "verification-link-sent" && (
                        <p className="mt-4 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">
                            A new verification link has been sent.
                        </p>
                    )}

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                        <button
                            type="button"
                            onClick={() => post("/email/verification-notification")}
                            disabled={processing}
                            className="rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
                        >
                            {processing ? "Sending..." : "Resend Verification Email"}
                        </button>

                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-100"
                        >
                            Log out
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}
