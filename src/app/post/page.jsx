import Link from "next/link";

export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}

export const metadata = {
    title: "All Post | Learning Next.js",
    description: "getting all post by fetching",
};


const Post = async () => {
    // component must be on async 
    const posts = await getPosts();
    // console.log(posts)
    return (
        <div className="space-y-8">
            {/* <p>{JSON.stringify(posts)}</p>
             */}
            {
                posts.map((post) => <div key={post.id}>
                    <strong>{post.title}</strong>
                    <p>{post.body}</p>
                    <Link href={`/post/${post.id}`}><button className="btn bg-amber-800 rounded-3xl">Details</button></Link>
                </div>)
            }
        </div>
    );
};

export default Post;