export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}

const Post = async () => {
    // component must be on sync 
    const posts = await getPosts();
    console.log(posts)
    return (
        <div className="space-y-8">
            {/* <p>{JSON.stringify(posts)}</p>
             */}
        {
            posts.map((post) =><div key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
            </div>)
        }
        </div>
    );
};

export default Post;