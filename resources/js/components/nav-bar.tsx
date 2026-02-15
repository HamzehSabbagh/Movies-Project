import { Link } from '@inertiajs/react';

export default function NavBar() {
    return <nav className='flex justify-between w-full border-b border-gray-200 px-3 py-6'>
        <div>
            <p className='font-bold text-4xl text-purple-500'>Great Cinema</p>
        </div>

        <div className='flex justify-between gap-4'>
            <Link href='/' className='font-bold text-lg hover:text-gray-500 py-1'>Home</Link>
            <Link href='/about' className='font-bold text-lg hover:text-gray-500 py-1'>About</Link>
            <Link href='/contact' className='font-bold text-lg hover:text-gray-500 py-1'>Contact</Link>
        </div>

        <div className='flex gap-6'>
            <Link className='rounded-lg border border-gray-600 px-3 py-2 bg-gray-400 text-black'>Movies</Link>
            <Link className='rounded-lg border border-gray-600 px-3 py-2 bg-gray-400 text-black'>Categories</Link>
            <Link className='rounded-lg border border-gray-600 px-3 py-2 bg-gray-400 text-black'>Scripts</Link>
            <Link className='rounded-lg border border-gray-600 px-3 py-2 bg-gray-400 text-black'>Movies</Link>
        </div>

    </nav>
}