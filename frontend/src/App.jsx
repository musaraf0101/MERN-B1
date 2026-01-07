import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setErrors(null);

        const user = await axios.get("http://localhost:3000/api/user/");
        setUsers(user.data.data);
      } catch (error) {
        setErrors(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading</p>;
  if (errors) return <p style={{ color: "red" }}>{errors}</p>;
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, index) => (
            <tr key={index}>
              <td>{u.name}</td>
              <td>{u.age}</td>
              <td>{u.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
