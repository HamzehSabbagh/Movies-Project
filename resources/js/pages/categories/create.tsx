import { useForm } from "@inertiajs/react";
import Input from "@/components/Input";
import NavBar from "@/components/nav-bar";

export default function Create() {
    const { data, setData, post, processing } = useForm({ name: "" })

    return <div>
        <NavBar />
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    post('/categories');
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
                ><p className="w-full text-center py-3 font-bold text-2xl">Create a Category</p></Input>
                <a href='/categories' className="border border-gray-400 px-3 py-2 rounded-lg text-center hover:bg-gray-200">Back</a>
                <button className="border border-gray-400 px-3 py-2 rounded-lg bg-blue-400 hover:bg-blue-500" type='submit' disabled={processing}>Save</button>
            </form>
        </div>
    </div>
}