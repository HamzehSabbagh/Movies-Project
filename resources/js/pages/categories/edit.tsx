import { Link } from "@inertiajs/react";
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

    const form = useForm({})

    return <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="mx-auto w-full max-w-2xl px-4 py-10">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    put(`/categories/${category.id}`)
                }}

                className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm [&_input]:w-full"
            >
                <div>
                    <p className="text-2xl font-semibold text-gray-900">Edit Category</p>
                    <p className="text-sm text-gray-500">Update this category name.</p>
                </div>
                <Input
                    name='name'
                    id='name'
                    placeholder="eg.action"
                    htmlFor="name"
                    required
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                >
                    Category Name
                </Input>
                <div className="flex justify-end gap-3 pt-2">
                    <Link href={`/categories/${category.id}`} className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">Back</Link>
                    <button className="rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-50" type='button' onClick={() => form.delete(`/categories/${category.id}`)} >Delete</button>
                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60" type='submit' disabled={processing}>Save</button>
                </div>
            </form>
        </div>
    </div>
}
