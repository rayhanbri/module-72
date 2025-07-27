'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    // dashboard e jate eita na dhekai sei bebosta
    const pathName = usePathname()
    console.log(pathName, pathName.includes('dashboard'))

    if (!pathName.includes('dashboard')) {
        return (
            <nav className='flex justify-center my-3'>
                <ul className='flex justify-around w-1/2'>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/services'><li>Services</li></Link>
                    <Link href='/about'><li>About</li></Link>

                </ul>
            </nav>
        );
    }

};

export default Navbar;