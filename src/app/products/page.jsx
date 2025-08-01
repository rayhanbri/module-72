import React from 'react';

const page =async() => {
    const res = await fetch('http://localhost:3000/api/items');
    const data =await res.json();
    console.log(data)
    
    return (
        <div>
            hello i am product
            {JSON.stringify(data)}
        </div>
    );
};

export default page;