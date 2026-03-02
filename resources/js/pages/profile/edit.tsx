import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import NavBar from "@/components/nav-bar";

type AuthUser = {
    first_name: string;
    last_name: string;
    email: string;
    image_url: string;
};

type SharedProps = {
    auth: {
        user: AuthUser;
    };
};

export default function EditProfile() {
    const { auth } = usePage<SharedProps>().props;

    const [showPassword, setShowPassword] = useState(false);

    const profileForm = useForm({
        first_name: auth.user.first_name ?? "",
        last_name: auth.user.last_name ?? "",
        email: auth.user.email ?? "",
        image: null as File | null
    });

    const deleteForm = useForm({
        password: "",
    });

    const userImage = profileForm.data.image ? URL.createObjectURL(profileForm.data.image) : auth.user.image_url

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
            <NavBar />
            <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
                <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                    <h1 className="text-3xl font-bold text-slate-900">Profile</h1>
                    <p className="mt-2 text-sm text-slate-600">Update your personal information.</p>

                    <form
                        className="mt-8 space-y-4"
                        onSubmit={(e) => {
                            e.preventDefault();
                            profileForm.patch("/profile", { forceFormData: true });
                        }}
                    >
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex flex-col">
                                <label htmlFor="first_name" className="mb-1 text-sm font-medium text-slate-700">First Name</label>
                                <input
                                    id="first_name"
                                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                                    value={profileForm.data.first_name}
                                    onChange={(e) => profileForm.setData("first_name", e.target.value)}
                                />
                                {profileForm.errors.first_name && (
                                    <p className="mt-1 text-sm text-red-600">{profileForm.errors.first_name}</p>
                                )}
                            </div>

                            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                <p className="mb-3 text-sm font-medium text-slate-700">Profile Image</p>
                                <img
                                    src={userImage}
                                    alt="Profile"
                                    className="mb-3 h-20 w-20 rounded-full border border-slate-200 object-cover shadow-sm"
                                />
                                <input
                                    type='file'
                                    accept="image/*"
                                    className="block w-full text-sm text-slate-700 file:mr-4 file:rounded-lg file:border-0 file:bg-slate-900 file:px-3 file:py-2 file:font-medium file:text-white hover:file:bg-slate-700"
                                    onChange={(e) => profileForm.setData('image', e.target.files?.[0] ?? null)}
                                />
                                {profileForm.errors.image && (
                                    <p className="mt-1 text-sm text-red-600">{profileForm.errors.image}</p>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="last_name" className="mb-1 text-sm font-medium text-slate-700">Last Name</label>
                                <input
                                    id="last_name"
                                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                                    value={profileForm.data.last_name}
                                    onChange={(e) => profileForm.setData("last_name", e.target.value)}
                                />
                                {profileForm.errors.last_name && (
                                    <p className="mt-1 text-sm text-red-600">{profileForm.errors.last_name}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="mb-1 text-sm font-medium text-slate-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                                value={profileForm.data.email}
                                onChange={(e) => profileForm.setData("email", e.target.value)}
                            />
                            {profileForm.errors.email && (
                                <p className="mt-1 text-sm text-red-600">{profileForm.errors.email}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={profileForm.processing}
                            className="rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
                        >
                            {profileForm.processing ? "Saving..." : "Save Profile"}
                        </button>
                    </form>
                </section>

                <section className="mt-8 rounded-2xl border border-red-200 bg-white p-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-red-700">Delete Account</h2>
                    <p className="mt-2 text-sm text-slate-600">
                        This action is permanent. Enter your password to confirm.
                    </p>

                    <form
                        className="mt-6 space-y-4"
                        onSubmit={(e) => {
                            e.preventDefault();
                            deleteForm.delete("/profile");
                        }}
                    >
                        <div className="flex flex-col">
                            <label htmlFor="delete_password" className="mb-1 text-sm font-medium text-slate-700">Password</label>
                            <div className="mt-1 flex items-center gap-2">
                                <input
                                    id="delete_password"
                                    type={showPassword ? "text" : "password"}
                                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                                    value={deleteForm.data.password}
                                    onChange={(e) => deleteForm.setData("password", e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="rounded-lg border border-slate-300 bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            {deleteForm.errors.password && (
                                <p className="mt-1 text-sm text-red-600">{deleteForm.errors.password}</p>
                            )}
                        </div>

                        <div className="flex gap-3 ">
                            <button
                                type="submit"
                                disabled={deleteForm.processing}
                                className="rounded-xl border bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-red-300"
                            >
                                {deleteForm.processing ? "Deleting..." : "Delete Account"}
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}
