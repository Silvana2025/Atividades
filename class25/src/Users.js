import { useEffect, useState } from "react";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        console.log("Fetched users:");
        console.table(data);
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1 className="title">User List</h1>

      <div className="user-list">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <p><span>ID:</span> {user.id}</p>
            <p><span>Name:</span> {user.name}</p>
            <p><span>Username:</span> {user.username}</p>
            <p><span>Email:</span> {user.email}</p>
            <p><span>Phone:</span> {user.phone}</p>
            <p><span>Website:</span> {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
