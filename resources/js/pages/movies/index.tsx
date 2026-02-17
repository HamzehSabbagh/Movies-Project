import Button from "@/components/Button";
import NavBar from "@/components/nav-bar";

type Movie = {
    id: number;
    title: string;
    description: string;
    release_date: string;
    category_id: number;
};

type Props = {
    movies: {
        data: Movie[]
    }
}

export default function Index({ movies }: Props) {
    return <div className="h-auto w-auto">
        <NavBar />
        <div className="px-20 py-6 flex flex-col gap-5">
            {movies.data.length === 0 ? <p>Sorry We Currently Don't Have Any Movies</p> :
                movies.data.map((m) => (
                    <div key={m.id} className='border border-white text-2xl w-auto rounded-lg px-3 py-3 flex justify-between bg-purple-400 text-gray-300'>
                        <div className='flex flex-col'>
                            <p>Title: {m.title}</p>
                            <p>Description: {m.description.slice(0, 100)} {m.description.length > 100 && "..."}</p>
                            <p>Release Date: {m.release_date}</p>
                        </div>

                        <div>
                            <a href={`/movies/${m.id}`} className="border border-white px-2 py-1 rounded-lg text-sm hover:bg-purple-300">Details</a>
                        </div>

                    </div>
                ))
            }
        </div>

        <div className="text-end px-20"><Button href='/movies/create'>Create a Movie</Button></div>
    </div>
}
