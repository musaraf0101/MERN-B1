import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");

    setPost(posts.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <ul>
        {post.map((u) => (
          <li>{u.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
