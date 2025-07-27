import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <h1>Page Nout Found 404 !</h1>
            <Link href='/' className='button text-red-600'><button>Go to Home</button></Link>
        </div>
    );
};

export default NotFoundPage;