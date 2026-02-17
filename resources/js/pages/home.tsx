import NavBar from "@/components/nav-bar";

export default function Home() {
    return <main className='h-full w-full flex flex-col justify-between'>
        <NavBar />
        <div><p className="text-lg text-center">Welcome to <br /><span className="font-extrabold text-4xl bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Great Cinema</span></p></div>
    </main>;
}
