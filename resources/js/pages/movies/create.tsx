import { useState } from "react";
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

    const [categoryId, setCategoryId] = useState('')

    return <div>
        <NavBar />
        <div className='flex justify-center py-12'>
            <form method='POST' action='/movies' className='flex flex-col justify-between items-center py-12 border-gray-400 w-fit px-12 rounded-lg border-8 bg-gray-800 text-gray-400 gap-5'>

                <Input htmlFor="title" name="title" id='title' placeholder="movie title">Title</Input>

                <Input htmlFor="description" name="descirption" id='descirption' placeholder="movie descirption">Descirption</Input>

                <Input htmlFor="release_date" name="release_date" id='release_date' placeholder="movie release_date">Release Date</Input>

                <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    name='category_id'
                    className='border border-gray-400 rounded-3xl text-center py-1'
                >
                    <option value='' disabled>Select Category</option>

                    {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>

                <button className="rounded-lg border border-gray-400 px-3 py-2 text-white bg-blue-400 hover:text-gray-400" type='submit'>Submit</button>
            </form>
        </div>
    </div>
}