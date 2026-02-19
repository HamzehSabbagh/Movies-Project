import NavBar from "@/components/nav-bar";

type Artist = {
    id: number;
    name: string;
    role: string;
}

type Props = {
    artists: Artist[]
}

export default function Index({ artists }: Props) {
    return <div>
        <NavBar />
        <div className="flex flex-col">
            <div>
                <p className="font-bold text-5xl text-center py-3">Artists</p>
            </div>
            <div>

            </div>
        </div>
    </div>
}