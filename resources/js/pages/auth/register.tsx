import { useForm } from "@inertiajs/react";
import { useState } from "react";
import Input from "@/components/Input";
import NavBar from "@/components/nav-bar";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, processing, post, errors } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
            <NavBar />
            <main className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-14 sm:px-6">
                <section className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white/95 p-8 shadow-xl shadow-slate-300/30 backdrop-blur sm:p-10">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Create Account</h1>
                    <p className="mt-2 text-sm text-slate-600">
                        Register a new account to manage your content.
                    </p>

                    <form
                        className="mt-8 space-y-5"
                        onSubmit={(e) => {
                            e.preventDefault();
                            post("/register");
                        }}
                    >
                        <div className="grid gap-5 sm:grid-cols-2">
                            <Input
                                htmlFor="first_name"
                                name="first_name"
                                placeholder="John"
                                id="first_name"
                                value={data.first_name}
                                required
                                onChange={(e) => {
                                    setData("first_name", e.target.value);
                                }}
                            >
                                First Name
                            </Input>
                            {errors.first_name && <p className="text-sm text-red-600">{errors.first_name}</p>}

                            <Input
                                htmlFor="last_name"
                                name="last_name"
                                placeholder="Doe"
                                id="last_name"
                                value={data.last_name}
                                required
                                onChange={(e) => {
                                    setData("last_name", e.target.value);
                                }}
                            >
                                Last Name
                            </Input>
                            {errors.last_name && <p className="text-sm text-red-600">{errors.last_name}</p>}
                        </div>

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
                                    placeholder="At least 8 characters"
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

                        <Input
                            type="password"
                            htmlFor="password_confirmation"
                            name="password_confirmation"
                            placeholder="Re-enter password"
                            id="password_confirmation"
                            value={data.password_confirmation}
                            required
                            onChange={(e) => {
                                setData("password_confirmation", e.target.value);
                            }}
                        >
                            Confirm Password
                        </Input>
                        {errors.password_confirmation && (
                            <p className="text-sm text-red-600">{errors.password_confirmation}</p>
                        )}

                        <button
                            type="submit"
                            disabled={processing}
                            className="mt-2 w-full rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
                        >
                            {processing ? "Creating account..." : "Create account"}
                        </button>
                    </form>
                </section>
            </main>
        </div>
    );
}
