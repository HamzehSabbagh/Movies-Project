import { Link } from "@inertiajs/react";
import NavBar from "@/components/nav-bar";

type Script = {
    id: number;
    title: string;
    content: string;
    movie: {
        id: number;
        title: string;
    } | null;
    artist: {
        id: number;
        name: string;
    } | null;
}

type Props = {
    script: Script;
}

export default function Show({ script }: Props) {
    return <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="mx-auto w-full max-w-4xl px-4 py-10">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold text-gray-900">{script.title}</p>
                <p className="mt-1 text-sm text-gray-500">Script details</p>

                <div className="mt-4 space-y-2 text-sm text-gray-700">
                    <p>
                        <span className="font-semibold text-gray-900">Movie:</span> {script.movie?.title ?? "Unlinked movie"}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-900">Artist:</span> {script.artist?.name ?? "Unlinked artist"}
                    </p>
                </div>

                <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">Content</p>
                    <pre className="whitespace-pre-wrap text-sm leading-6 text-gray-800">{script.content}</pre>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <Link
                        href="/scripts"
                        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                    >
                        Back
                    </Link>
                    <Link
                        href={`/scripts/${script.id}/edit`}
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
                    >
                        Edit
                    </Link>
                </div>
            </div>
        </div>
    </div>
}
