import { useEffect, useState } from "react";
import "./Posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        console.log("Fetched posts:");
        console.table(data);
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Posts</h1>

      <div className="post-grid">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <p><span>User ID:</span> {post.userId}</p>
            <p><span>Post ID:</span> {post.id}</p>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
