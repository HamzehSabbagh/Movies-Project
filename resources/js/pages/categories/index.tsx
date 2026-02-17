import NavBar from "@/components/nav-bar";

type Category = {
    id: number;
    name: string;
}

type Props = {
    categories: Category[]
}

export default function Index({ categories }: Props) {
    return <div>
        <NavBar />
        <div className="flex flex-col gap-10"><p className="text-center text-6xl font-extrabold py-6 pb-6">Category</p>
            <div className="flex justify-around flex-wrap gap-4">

                {categories.map((c) =>
                    <a key={c.id} className="border flex border-gray-400 px-4 py-4 rounded-4xl w-1/4 hover:bg-gray-200" href={`/categories/${c.id}`}>
                        <p className="text-2xl text-center w-full bg-gradient-to-r from-purple-400 to-red-700 text-transparent bg-clip-text">{c.name}</p>
                    </a>
                )}
            </div>
            <a href='/categories/create' className='border border-b-gray-400 rounded-lg px-3 py-2 w-fit self-end mx-3 hover:bg-gray-200'>Create a Category</a>
        </div>
    </div>
}