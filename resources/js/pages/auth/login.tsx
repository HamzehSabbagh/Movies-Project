import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import Input from "@/components/Input";
import NavBar from "@/components/nav-bar";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, processing, post, errors } = useForm({
        email: "",
        password: "",
        remember: false as boolean,
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
            <NavBar />
            <main className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-14 sm:px-6">
                <section className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white/95 p-8 shadow-xl shadow-slate-300/30 backdrop-blur sm:p-10">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome Back</h1>
                    <p className="mt-2 text-sm text-slate-600">Sign in to continue.</p>

                    <form
                        className="mt-8 space-y-5"
                        onSubmit={(e) => {
                            e.preventDefault();
                            post("/login");
                        }}
                    >
                        <Input
                            htmlFor="email"
                            name="email"
                            placeholder="you@example.com"
                            id="email"
                            value={data.email}
                            required
                            onChange={(e) => {
                                setData("email", e.target.value);
                            }}
                        >
                            Email
                        </Input>
                        {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}

                        <div className="flex flex-col">
                            <label htmlFor="password">Password</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="w-full rounded-lg border border-gray-400 px-2 py-1 pr-16"
                                    value={data.password}
                                    onChange={(e) => {
                                        setData("password", e.target.value);
                                    }}
                                    type={showPassword ? "text" : "password"}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute inset-y-0 right-2 my-auto h-7 rounded px-2 text-xs font-medium text-slate-600 hover:bg-slate-100"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                        </div>

                        <label className="flex items-center gap-2 text-sm text-slate-700">
                            <input
                                type="checkbox"
                                checked={data.remember}
                                onChange={(e) => setData("remember", e.target.checked)}
                            />
                            Remember me
                        </label>

                        <div className="text-sm">
                            <Link href="/forgot-password" className="text-slate-700 underline hover:text-slate-900">
                                Forgot your password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="mt-2 w-full rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
                        >
                            {processing ? "Signing in..." : "Sign in"}
                        </button>
                    </form>
                </section>
            </main>
        </div>
    );
}
