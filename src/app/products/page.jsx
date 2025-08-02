import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
    const res = await fetch('http://localhost:3000/api/items', {
        cache: 'force-cache'
        // ekhon notun add kora product add dhekhabhe na
        // ekhon ei problem solve korar jonno post  er api the revalidate path korte hobe 
        //eta korle server network req kome jai 
    });
    const data = await res.json();
    if(data.data.length > 3){
        redirect('/')
        // etao next navigation theke import kora lagbhe 
    }
    console.log(data)

    return (
        <ul>
            {
                data.data.map(singleData => (
                    <li key={singleData._id}>
                        {singleData.productName}
                    </li>
                ))
            }
        </ul>
    );
};

export default page;