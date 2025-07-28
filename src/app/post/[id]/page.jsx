import React from 'react';

const getSinglePost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}

const SinglePost = async ({ params }) => {
    const p = await params;
    const id = p.id;
    const singlePost = await getSinglePost(id);
    console.log(singlePost)
    return (
        <div className='flex flex-col justify-center'>
            <strong>{id}</strong>
            <h1 className='text-2xl font-bold text-amber-300'>{singlePost.title}</h1>
            <p>{singlePost.body}</p>
        </div>
    );
};

export default SinglePost;