'use client'
import React from 'react';
const PorductAddForm = () => {
    const handleSubmit =async(e) => {
        e.preventDefault();
        const from = e.target;
        // console.log('wow')
        const product = from.productName.value;
        // console.log(product);
        const payload={product}
        const res = await fetch('http://localhost:3000/api/items',{
            method : 'POST',
            body:JSON.stringify(payload),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const result = res.json();
        console.log(result)


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="productName" id="" placeholder='Product Name' />
               <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default PorductAddForm;