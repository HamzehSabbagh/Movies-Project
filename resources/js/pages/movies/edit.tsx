import { useState } from 'react';
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
    const [categoryId, setCategoryId] = useState<string>(String(movie.category_id ?? ""));
    const [title, setTitle] = useState<string>(String(movie.title ?? ""));
    const [description, setDescription] = useState<string>(String(movie.description ?? ""));
    const [releaseDate, setReleaseDate] = useState<string>(String(movie.release_date ?? ""));
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content") ?? "";



    return <div>
        <NavBar />
        <div className='flex justify-center py-12'>
            <form method='POST' action={`/movies/${movie.id}`} className='flex flex-col justify-between items-center py-12 border-gray-400 w-fit px-12 rounded-lg border-8 bg-gray-800 text-gray-400 gap-5'>

                <input type="hidden" name="_method" value="PATCH" />

                <input type="hidden" name="_token" value={csrfToken} />

                <Input htmlFor="title" name="title" id='title' placeholder="movie title" value={title} onChange={((e) => setTitle(e.target.value))}>Title</Input>

                <Input htmlFor="description" name="description" id='description' placeholder="movie description" value={description} onChange={((e) => setDescription(e.target.value))}>Description</Input>

                <Input htmlFor="release_date" name="release_date" id='release_date' placeholder="movie release_date" value={releaseDate} onChange={((e) => setReleaseDate(e.target.value))}>Release Date</Input>

                <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    name='category_id'
                    className='border border-gray-400 rounded-3xl text-center py-1'
                >
                    <option value='' disabled>Select Category</option>

                    {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <div className='flex justify-between gap-2'>
                    <a href={`/movies/${movie.id}`} className='rounded-lg border border-gray-400 px-3 py-2 text-white bg-blue-400 hover:text-gray-400'>Back</a>
                    <button form='delete' type="submit" className='text-red-700 border border-gray-400 rounded-lg px-3 py-2 hover:bg-red-400'>Delete</button>
                    <button className="rounded-lg border border-gray-400 px-3 py-2 text-white bg-blue-400 hover:text-gray-400" type='submit'>Submit</button>
                </div>
            </form>

            <form method="POST" action={`/movies/${movie.id}`} id='delete'>
                <input type="hidden" name="_token" value={csrfToken} />
                <input type="hidden" name="_method" value="DELETE" />
            </form>
        </div>
    </div>
}