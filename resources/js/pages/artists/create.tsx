import { Link, useForm } from "@inertiajs/react";
import NavBar from "@/components/nav-bar";
import Input from "@/components/Input";

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
        'movie_id': [] as number[],
    })

    return <div>
        <NavBar />
        <div>
            <form
                className='space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm [&_input]:w-full'
                onSubmit={(e) => {
                    e.preventDefault();
                    post('/artists');
                }}
            >
                <div>
                    <p className="text-2xl font-semibold text-gray-900">Create an artist</p>
                    <p className="text-sm text-gray-500">Fill in the details below to add a new artist.</p>
                </div>

                <Input htmlFor="name" name="name" id='name' placeholder="artist name" value={data.name} onChange={(e) => setData('name', e.target.value)} required>Name</Input>

                <Input htmlFor="role" name="role" id='role' placeholder="role" value={data.role} onChange={(e) => setData('role', e.target.value)} required>Role</Input>
                <div></div>
            </form>
        </div>
    </div>
}