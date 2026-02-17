import NavBar from "@/components/nav-bar";

type Movie = {
    id: number;
    title: string;
    description: string;
    release_date: string;
    category_id: number;
    category?: {
        id: number;
        name: string;
    } | null;
};

type Props = {
    movie: Movie;
};

export default function Show({ movie }: Props) {
    return <div className="h-screen">
        <NavBar />
        <div key={movie.id} className='border border-white text-2xl w-auto rounded-lg px-3 py-3 bg-purple-400 text-gray-300 flex flex-col justify-between'>
            <div className='flex flex-col'>
                <p className="font-bold text-center text-4xl pb-10">{movie.title}</p>
                <p className="pb-5">Description: <span className="font-semibold">{movie.description}</span></p>
                <p>Release Date: {movie.release_date}</p>
                <p className="pt-5" key={movie.category?.id}>Category: <span className="font-black">{movie.category?.name}</span></p>
            </div>

            <div className="flex justify-between pt-10">
                <a href='/movies' className="border border-white px-4 py-3 rounded-lg hover:bg-purple-500">Back</a>
                <a href={`/movies/${movie.id}/edit`} className="border border-white px-4 py-3 rounded-lg hover:bg-purple-500">Edit</a>
            </div>
        </div>
    </div>
}