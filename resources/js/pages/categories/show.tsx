import NavBar from "@/components/nav-bar";

type Movie = {
    id: number;
    title: string;
    category_id: number;
}

type Category = {
    id: number;
    name: string;
    movies: Movie[];
}

type Props = {
    category: Category;
}


export default function Show({ category }: Props) {
    return <div>
        <NavBar />
        <div className="flex flex-col">
            <div>
                <div
                    className="text-center text-6xl font-extrabold py-6 pb-5"
                    key={category.id}><p className="bg-gradient-to-r from-purple-400 to-red-700 text-transparent bg-clip-text "
                    >
                        {category.name}
                    </p>

                </div>
                <div className="text-center pb-16"><a
                    href={`/categories/${category.id}/edit`}
                    className="border border-gray-400 px-3 py-2 rounded-lg w-fit hover:bg-gray-900"
                >Edit</a></div>
            </div>
            <div>
                <p className="text-center">List of Movies that Contain this Category</p>
            </div>
            <div className='flex px-2'>
                {category.movies.map((e) => <a
                    href={`/movies/${e.id}`}
                    className="border border-gray-400 rounded-2xl px-12 py-12 w-1/4 hover:bg-gray-800"
                    key={e.id}>
                    <p className="text-2xl font-bold">{e.title}</p>
                </a>)}
            </div>
        </div>
    </div>
}