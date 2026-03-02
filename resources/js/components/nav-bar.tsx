import { Link, usePage } from '@inertiajs/react';

type PageProps = {
    auth: {
        user: {
            first_name?: string;
            image_url?: string;
            role?: {
                name?: string;
            } | null;
        } | null;
    };
};

export default function NavBar() {
    const { auth } = usePage<PageProps>().props;
    const isAuthenticated = Boolean(auth.user);
    const isAdmin = auth.user?.role?.name?.toLowerCase() === 'admin';
    const userImage = auth.user?.image_url ?? '/images/default-avatar.svg';


    const primaryLinks = isAdmin
        ? [
            { href: '/movies', label: 'Movies' },
            { href: '/categories', label: 'Categories' },
            { href: '/scripts', label: 'Scripts' },
            { href: '/artists', label: 'Artists' },
        ]
        : [
            { href: '/movies', label: 'Movies' },
            { href: '/categories', label: 'Categories' },
            { href: '/scripts', label: 'Scripts' },
            { href: '/artists', label: 'Artists' },
        ];

    return (
        <nav className="w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <Link href={isAuthenticated ? "/dashboard" : "/guest"} className="bg-gradient-to-r from-purple-500 to-red-600 bg-clip-text text-transparent">
                        <p className='text-2xl font-extrabold tracking-tight'>Great Cinema</p>
                    </Link>

                    <div className="flex items-center gap-2">
                        {isAuthenticated ? (
                            <>
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
                                    {isAdmin ? 'Admin' : 'User'}
                                </span>
                                <Link href='/profile' className="text-sm text-slate-600">
                                    <img
                                        src={userImage}
                                        alt="Profile"
                                        className="h-12 w-12 rounded-full object-cover border border-white/20"
                                        onError={(e) => {
                                            e.currentTarget.src = '/images/default-avatar.svg';
                                        }}
                                    />
                                </Link>
                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700 transition hover:border-rose-700 hover:bg-rose-700 hover:text-white"
                                >
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
                                    Guest
                                </span>
                                <Link href="/login" className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                                    Login
                                </Link>
                                <Link href="/register" className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                        <Link href={isAuthenticated ? "/dashboard" : "/guest"} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                            Home
                        </Link>
                        {!isAdmin && (
                            <>
                                <Link href="/about" className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                                    About
                                </Link>
                                <Link href="/contact" className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                                    Contact
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {primaryLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav >
    );
}
