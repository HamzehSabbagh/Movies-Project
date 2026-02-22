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
}

type Script = {
    id: number;
    title: string;
    content: string;
    movie_id: number;
    artist_id: number;
}

type Props = {
    script: Script;
    movies: Movie[];
    artists: Artist[];
}

export default function Edit({ script, movies, artists }: Props) {
    const { data, setData, processing, put } = useForm({
        title: script.title,
        content: script.content,
        movie_id: String(script.movie_id),
        artist_id: String(script.artist_id),
    });

    const deleteForm = useForm({});

    return <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className='mx-auto w-full max-w-2xl px-4 py-10'>
            <form
                className='space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm [&_input]:w-full'
                onSubmit={(e) => {
                    e.preventDefault();
                    put(`/scripts/${script.id}`);
                }}
            >
                <div>
                    <p className="text-2xl font-semibold text-gray-900">Edit Script</p>
                    <p className="text-sm text-gray-500">Update screenplay details and save changes.</p>
                </div>

                <Input
                    name='title'
                    placeholder="script title"
                    htmlFor="title"
                    id='title'
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    required
                >
                    Title
                </Input>

                <div className="flex flex-col gap-1">
                    <label htmlFor="content" className="text-sm font-medium text-gray-700">Content</label>
                    <textarea
                        id='content'
                        name='content'
                        placeholder="script content"
                        value={data.content}
                        onChange={(e) => setData('content', e.target.value)}
                        className="min-h-48 w-full resize-y rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none ring-blue-500 transition focus:ring-2"
                        required
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="artist_id" className="text-sm font-medium text-gray-700">Artist</label>
                    <select
                        id="artist_id"
                        value={data.artist_id}
                        onChange={(e) => setData('artist_id', e.target.value)}
                        name='artist_id'
                        className='w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none ring-blue-500 transition focus:ring-2'
                        required
                    >
                        <option value='' disabled>Select Artist</option>
                        {artists.map((artist) => <option key={artist.id} value={artist.id}>{artist.name}</option>)}
                    </select>
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="movie_id" className="text-sm font-medium text-gray-700">Movie</label>
                    <select
                        id="movie_id"
                        value={data.movie_id}
                        onChange={(e) => setData('movie_id', e.target.value)}
                        name='movie_id'
                        className='w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none ring-blue-500 transition focus:ring-2'
                        required
                    >
                        <option value='' disabled>Select Movie</option>
                        {movies.map((movie) => <option key={movie.id} value={movie.id}>{movie.title}</option>)}
                    </select>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                    <Link href={`/scripts/${script.id}`} className='rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100'>Back</Link>
                    <button
                        type='button'
                        onClick={() => deleteForm.delete(`/scripts/${script.id}`)}
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
