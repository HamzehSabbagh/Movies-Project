import { useForm } from "@inertiajs/react";
import Input from "@/components/Input";
import NavBar from "@/components/nav-bar";

type Category = {
    id: number;
    name: string;
}

type Props = {
    category: Category
}

export default function Edit({ category }: Props) {
    const { data, setData, processing, put } = useForm({
        'id': category.id,
        'name': category.name,
    });

    return <div>
        <NavBar />
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    put(`/movies/${category.id}`)
                }}

                className="flex flex-col"
            >
                <Input
                    name='name'
                    id='name'
                    placeholder="eg.action"
                    htmlFor="name"
                    required
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                ><p className="w-full text-center py-3 font-bold text-2xl">Edit this Category</p></Input>
                <a href='/categories' className="border border-gray-400 px-3 py-2 rounded-lg text-center hover:bg-gray-900">Back</a>
                <button className="border border-gray-400 px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-400" type='submit' disabled={processing}>Save</button>
            </form>
        </div>
    </div>
}