import { Link, useForm } from "@inertiajs/react";
import Input from "@/components/Input";
import NavBar from "@/components/nav-bar";

type Movie = {
    id: number;
    title: string;
}

type Artist = {
    id: number;
    name: string;
    role: string;
    movies: Movie[];
}

type Props = {
    artist: Artist;
    movies: Movie[];
}

export default function Edit({ artist, movies }: Props) {
    const { data, setData, processing, put } = useForm({
        name: artist.name,
        role: artist.role,
        movie_ids: artist.movies.map((movie) => movie.id),
    });

    const deleteForm = useForm({});

    return <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className='mx-auto w-full max-w-2xl px-4 py-10'>
            <form
                className='space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm [&_input]:w-full'
                onSubmit={(e) => {
                    e.preventDefault();
                    put(`/artists/${artist.id}`);
                }}
            >
                <div>
                    <p className="text-2xl font-semibold text-gray-900">Edit Artist</p>
                    <p className="text-sm text-gray-500">Update artist details and linked movies.</p>
                </div>

                <Input
                    htmlFor="name"
                    name="name"
                    id='name'
                    placeholder="artist name"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                >
                    Name
                </Input>

                <Input
                    htmlFor="role"
                    name="role"
                    id='role'
                    placeholder="role"
                    value={data.role}
                    onChange={(e) => setData('role', e.target.value)}
                    required
                >
                    Role
                </Input>

                <div className="flex flex-col gap-1">
                    <label htmlFor="movie_ids" className="text-sm font-medium text-gray-700">Movies</label>
                    <select
                        id='movie_ids'
                        value={data.movie_ids.map(String)}
                        onChange={(e) => setData('movie_ids', Array.from(e.target.selectedOptions, (option) => Number(option.value)))}
                        multiple
                        name='movie_ids'
                        className='min-h-32 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none ring-blue-500 transition focus:ring-2'
                    >
                        {movies.map((movie) => <option key={movie.id} value={movie.id}>{movie.title}</option>)}
                    </select>
                    <p className="text-xs text-gray-500">Hold Ctrl (Windows) / Cmd (Mac) to select multiple movies.</p>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                    <Link href={`/artists/${artist.id}`} className='rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100'>Back</Link>
                    <button
                        type='button'
                        onClick={() => deleteForm.delete(`/artists/${artist.id}`)}
                        className='rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-50'
                    >
                        Delete
                    </button>
                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60" type='submit' disabled={processing}>Save</button>
                </div>
            </form>
        </div>
    </div>
}
