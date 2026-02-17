import { useForm } from "@inertiajs/react";
import Input from "@/components/Input";
import NavBar from "@/components/nav-bar";


type category = {
    id: number;
    name: string;
}
type props = {
    categories: category[];
}
export default function Create({ categories }: props) {

    const { data, setData, processing, post } = useForm({
        'title': '',
        'description': '',
        'release_date': '',
        'category_id': '',
    })

    return <div>
        <NavBar />
        <div className='flex justify-center py-12'>
            <form
                className='flex flex-col justify-between items-center py-12 border-gray-400 w-fit px-12 rounded-lg border-8 bg-gray-800 text-gray-400 gap-5'
                onSubmit={(e) => {
                    e.preventDefault();
                    post('/movies');
                }}
            >

                <Input htmlFor="title" name="title" id='title' placeholder="movie title" value={data.title} onChange={(e) => setData('title', e.target.value)} required>Title</Input>

                <Input htmlFor="description" name="description" id='description' placeholder="movie description" value={data.description} onChange={(e) => setData('description', e.target.value)} required>Description</Input>

                <Input htmlFor="release_date" name="release_date" id='release_date' placeholder="movie release_date" value={data.release_date} onChange={(e) => setData('release_date', e.target.value)} required>Release Date</Input>

                <select
                    value={data.category_id}
                    onChange={(e) => setData('category_id', e.target.value)}
                    name='category_id'
                    className='border border-gray-400 rounded-3xl text-center py-1'
                >
                    <option value='' disabled>Select Category</option>

                    {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <div className="flex justify-between gap-10">
                    <a href='/movies' className='rounded-lg border border-gray-400 px-3 py-2 text-white bg-blue-400 hover:text-gray-400'>Back</a>
                    <button className="rounded-lg border border-gray-400 px-3 py-2 text-white bg-blue-400 hover:text-gray-400" type='submit' disabled={processing}>Submit</button>
                </div>
            </form>
        </div>
    </div>
}