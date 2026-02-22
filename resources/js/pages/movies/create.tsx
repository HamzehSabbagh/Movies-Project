import { useForm } from "@inertiajs/react";
import Input from "@/components/Input";
import NavBar from "@/components/nav-bar";


type Category = {
    id: number;
    name: string;
}
type Artist = {
    id: number;
    name: string;
}
type Props = {
    categories: Category[];
    artists: Artist[];
}
export default function Create({ categories, artists }: Props) {

    const { data, setData, processing, post } = useForm({
        'title': '',
        'description': '',
        'release_date': '',
        'category_id': '',
        'artist_ids': [] as number[],
    })

    return <div>
        <NavBar />
        <div className='mx-auto w-full max-w-2xl px-4 py-10'>
            <form
                className='space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm [&_input]:w-full'
                onSubmit={(e) => {
                    e.preventDefault();
                    post('/movies');
                }}
            >
                <div>
                    <p className="text-2xl font-semibold text-gray-900">Create Movie</p>
                    <p className="text-sm text-gray-500">Fill in the details below to add a new movie.</p>
                </div>

                <Input htmlFor="title" name="title" id='title' placeholder="movie title" value={data.title} onChange={(e) => setData('title', e.target.value)} required>Title</Input>

                <div className="flex flex-col gap-1">
                    <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id='description'
                        name='description'
                        placeholder="movie description"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="min-h-32 w-full resize-y rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none ring-blue-500 transition focus:ring-2"
                        required
                    />
                </div>

                <Input htmlFor="release_date" name="release_date" id='release_date' placeholder="movie release_date" value={data.release_date} onChange={(e) => setData('release_date', e.target.value)} required>Release Date</Input>

                <div className="flex flex-col gap-1">
                    <label htmlFor="category_id" className="text-sm font-medium text-gray-700">Category</label>
                    <select
                        id="category_id"
                        value={data.category_id}
                        onChange={(e) => setData('category_id', e.target.value)}
                        name='category_id'
                        className='w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none ring-blue-500 transition focus:ring-2'
                        required
                    >
                        <option value='' disabled>Select Category</option>

                        {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-gray-700">Artists</p>
                    <div className="max-h-48 space-y-2 overflow-y-auto rounded-lg border border-gray-300 bg-white p-3">
                        {artists.map((artist) => {
                            const checked = data.artist_ids.includes(artist.id);

                            return (
                                <label key={artist.id} className="flex w-full cursor-pointer items-center rounded px-2 py-1 transition hover:bg-gray-100">
                                    <span className="text-sm text-gray-800">{artist.name}</span>
                                    <input
                                        type="checkbox"
                                        checked={checked}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setData('artist_ids', [...data.artist_ids, artist.id]);
                                                return;
                                            }

                                            setData('artist_ids', data.artist_ids.filter((id) => id !== artist.id));
                                        }}
                                        className="ml-auto h-4! w-4! rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                </label>
                            );
                        })}
                    </div>
                    <p className="text-xs text-gray-500">Select one or more artists.</p>
                </div>
                <div className="flex justify-end gap-3 pt-2">
                    <a href='/movies' className='rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-100'>Back</a>
                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60" type='submit' disabled={processing}>Create</button>
                </div>
            </form>
        </div>
    </div>
}
