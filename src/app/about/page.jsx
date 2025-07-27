'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {
    const router = useRouter()
    const isLoggedin = false;
    const handleNavigation=() =>{
        if(isLoggedin){
            router.push('/about/address')
        }
        else{
            router.push('/')
        }
        
    }
    return (
        <div className='font-bold'>
            i am about
             <Link href='/about/address'><li>Address Page</li></Link>
             <button onClick={handleNavigation} className='button text-2xl text-sky-300'>Address Page</button>
        </div>
    );
};

export default page;