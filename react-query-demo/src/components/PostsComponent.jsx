// src/components/PostsComponent.jsx
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data;
};

function PostsComponent() {
    const {
        data: posts,
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 5000,
        cacheTime: 1000 * 60 * 5,
        refetchOnWindowFocus: true,   // 👈 refetch when user focuses the tab
        keepPreviousData: true,       // 👈 keep old data while fetching new
    });

    if (isLoading) return <p>Loading posts...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div>
            <button onClick={() => refetch()}>Refetch Posts</button>
            <ul>
                {posts.slice(0, 10).map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostsComponent;