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
        <div className='flex justify-center py-12'>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    put(`/movies/${movie.id}`)
                }}

                className='flex flex-col justify-between items-center py-12 border-gray-400 w-fit px-12 rounded-lg border-8 bg-gray-800 text-gray-400 gap-5'
            >

                <Input htmlFor="title" name="title" id='title' placeholder="movie title" value={data.title} onChange={((e) => setData('title', e.target.value))}>Title</Input>

                <Input htmlFor="description" name="description" id='description' placeholder="movie description" value={data.description} onChange={((e) => setData('description', e.target.value))}>Description</Input>

                <Input htmlFor="release_date" name="release_date" id='release_date' placeholder="movie release_date" value={data.release_date} onChange={((e) => setData('release_date', e.target.value))}>Release Date</Input>

                <select
                    value={data.category_id}
                    onChange={(e) => setData('category_id', Number(e.target.value))}
                    name='category_id'
                    className='border border-gray-400 rounded-3xl text-center py-1'
                >
                    <option value='' disabled>Select Category</option>

                    {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <div className='flex justify-between gap-2'>
                    <a href={`/movies/${movie.id}`} className='rounded-lg border border-gray-400 px-3 py-2 text-white bg-blue-400 hover:text-gray-400'>Back</a>
                    <button onClick={() => form.delete(`/movies/${movie.id}`)} type="button" className='text-red-700 border border-gray-400 rounded-lg px-3 py-2 hover:bg-red-400'>Delete</button>
                    <button className="rounded-lg border border-gray-400 px-3 py-2 text-white bg-blue-400 hover:text-gray-400" type='submit' disabled={processing}>Save</button>
                </div>
            </form>
        </div>
    </div>
}