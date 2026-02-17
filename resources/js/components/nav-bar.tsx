import { Link } from '@inertiajs/react';
import Button from './Button';

export default function NavBar() {
    return <nav className='flex justify-between w-full border-b border-gray-200 px-3 py-6'>
        <div>
            <a href='/' className='font-bold text-4xl text-purple-500'>Great Cinema</a>
        </div>

        <div className='flex justify-between gap-4'>
            <Link href='/' className='font-bold text-lg hover:text-gray-500 py-1'>Home</Link>
            <Link href='/about' className='font-bold text-lg hover:text-gray-500 py-1'>About</Link>
            <Link href='/contact' className='font-bold text-lg hover:text-gray-500 py-1'>Contact</Link>
        </div>

        <div className='flex gap-6'>
            <Button href='/movies'>Movies</Button>
            <Button href='/categories'>Categories</Button>
            <Button href='/scripts'>Scripts</Button>
            <Button href='/'>Artists</Button>
        </div>

    </nav>
}
