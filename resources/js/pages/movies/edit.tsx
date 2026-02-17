import { useForm } from "@inertiajs/react";
import Input from "@/components/Input";
import NavBar from "@/components/nav-bar";

type Category = {
    id: number;
    name: string;
}

type Movie = {
    id: number;
    title: string;
    description: string;
    release_date: string;
    category_id: number;
};

type prop = {
    movie: Movie
    categories: Category[]
};



export default function Edit({ movie, categories }: prop) {
    const { data, setData, processing, put } = useForm({
        'title': movie.title,
        'description': movie.description,
        'release_date': movie.release_date,
        'category_id': movie.category_id,

    })

    const form = useForm({});

    return <div>
        <NavBar />
        <div className='mx-auto w-full max-w-2xl px-4 py-10'>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    put(`/movies/${movie.id}`)
                }}

                className='space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm [&_input]:w-full'
            >
                <div>
                    <p className="text-2xl font-semibold text-gray-900">Edit Movie</p>
                    <p className="text-sm text-gray-500">Update movie details and save your changes.</p>
                </div>

                <Input htmlFor="title" name="title" id='title' placeholder="movie title" value={data.title} onChange={((e) => setData('title', e.target.value))}>Title</Input>

                <div className="flex flex-col gap-1">
                    <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
                    <textarea className="min-h-32 w-full resize-y rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none ring-blue-500 transition focus:ring-2" id='description' name='description' placeholder="movie description" value={data.description} onChange={((e) => setData('description', e.target.value))}></textarea>
                </div>

                <Input htmlFor="release_date" name="release_date" id='release_date' placeholder="movie release_date" value={data.release_date} onChange={((e) => setData('release_date', e.target.value))}>Release Date</Input>

                <div className="flex flex-col gap-1">
                    <label htmlFor="category_id" className="text-sm font-medium text-gray-700">Category</label>
                    <select
                        id="category_id"
                        value={data.category_id}
                        onChange={(e) => setData('category_id', Number(e.target.value))}
                        name='category_id'
                        className='w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none ring-blue-500 transition focus:ring-2'
                    >
                        <option value='' disabled>Select Category</option>

                        {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                </div>
                <div className='flex justify-end gap-3 pt-2'>
                    <a href={`/movies/${movie.id}`} className='rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-100'>Back</a>
                    <button onClick={() => form.delete(`/movies/${movie.id}`)} type="button" className='rounded-lg border border-red-300 px-4 py-2 text-red-700 transition hover:bg-red-50'>Delete</button>
                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60" type='submit' disabled={processing}>Save</button>
                </div>
            </form>
        </div>
    </div>
}
