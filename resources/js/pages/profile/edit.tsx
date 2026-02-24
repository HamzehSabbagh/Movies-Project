import { useForm, usePage } from "@inertiajs/react";
import NavBar from "@/components/nav-bar";

type AuthUser = {
    first_name: string;
    last_name: string;
    email: string;
};

type SharedProps = {
    auth: {
        user: AuthUser;
    };
};

export default function EditProfile() {
    const { auth } = usePage<SharedProps>().props;

    const profileForm = useForm({
        first_name: auth.user.first_name ?? "",
        last_name: auth.user.last_name ?? "",
        email: auth.user.email ?? "",
    });

    const deleteForm = useForm({
        password: "",
    });

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
                            profileForm.patch("/profile");
                        }}
                    >
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex flex-col">
                                <label htmlFor="first_name">First Name</label>
                                <input
                                    id="first_name"
                                    className="rounded-lg border border-gray-400 px-2 py-1"
                                    value={profileForm.data.first_name}
                                    onChange={(e) => profileForm.setData("first_name", e.target.value)}
                                />
                                {profileForm.errors.first_name && (
                                    <p className="mt-1 text-sm text-red-600">{profileForm.errors.first_name}</p>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="last_name">Last Name</label>
                                <input
                                    id="last_name"
                                    className="rounded-lg border border-gray-400 px-2 py-1"
                                    value={profileForm.data.last_name}
                                    onChange={(e) => profileForm.setData("last_name", e.target.value)}
                                />
                                {profileForm.errors.last_name && (
                                    <p className="mt-1 text-sm text-red-600">{profileForm.errors.last_name}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="rounded-lg border border-gray-400 px-2 py-1"
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
                            <label htmlFor="delete_password">Password</label>
                            <input
                                id="delete_password"
                                type="password"
                                className="rounded-lg border border-gray-400 px-2 py-1"
                                value={deleteForm.data.password}
                                onChange={(e) => deleteForm.setData("password", e.target.value)}
                            />
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
