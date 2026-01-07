import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors,setErrors] = useState(null)

  const fetchPost = async () => {
    try {
      setLoading(true);
      setErrors(null)
      const posts = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPost(posts.data.slice(0,5));
    } catch (error) {
      setErrors(error.message)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);


  if(loading) return <p>Loading...</p>
  if(errors) return <p style={{color:"red"}}>{errors}</p>
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
