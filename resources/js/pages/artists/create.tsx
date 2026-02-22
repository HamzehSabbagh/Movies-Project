import { Link, useForm } from "@inertiajs/react";
import Input from "@/components/Input";
import NavBar from "@/components/nav-bar";


type Movie = {
    id: number;
    title: string;
}

type Props = {
    movies: Movie[]
}

export default function Create({ movies }: Props) {
    const { data, setData, processing, post } = useForm({
        'name': '',
        'role': '',
        'movie_ids': [] as number[],
    })

    return <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className='mx-auto w-full max-w-2xl px-4 py-10'>
            <form
                className='space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm [&_input]:w-full'
                onSubmit={(e) => {
                    e.preventDefault();
                    post('/artists');
                }}
            >
                <div>
                    <p className="text-2xl font-semibold text-gray-900">Create Artist</p>
                    <p className="text-sm text-gray-500">Fill in the details below to add a new artist.</p>
                </div>

                <Input htmlFor="name" name="name" id='name' placeholder="artist name" value={data.name} onChange={(e) => setData('name', e.target.value)} required>Name</Input>

                <Input htmlFor="role" name="role" id='role' placeholder="role" value={data.role} onChange={(e) => setData('role', e.target.value)} required>Role</Input>


                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-gray-700">Movies</p>
                    <div className="max-h-48 space-y-2 overflow-y-auto rounded-lg border border-gray-300 bg-white p-3">
                        {movies.map((movie) => {
                            const checked = data.movie_ids.includes(movie.id)

                            return (
                                <label
                                    key={movie.id}
                                    className="flex w-full cursor-pointer items-center rounded px-2 py-1 transition hover:bg-gray-100"
                                >
                                    <span className="text-sm text-gray-800">{movie.title}</span>
                                    <input
                                        type='checkbox'
                                        checked={checked}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setData('movie_ids', [...data.movie_ids, movie.id]);
                                                return;
                                            }
                                            setData('movie_ids', data.movie_ids.filter((id) => id !== movie.id))
                                        }}
                                        className="ml-auto !h-4 !w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                </label>
                            )
                        })}
                    </div>
                    <p className="text-xs text-gray-500">Select one or more movies.</p>
                </div>
                <div className="flex justify-end gap-3 pt-2">
                    <Link href='/artists' className='rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100'>Back</Link>
                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60" type='submit' disabled={processing}>Create</button>
                </div>
            </form>
        </div>
    </div>
}
