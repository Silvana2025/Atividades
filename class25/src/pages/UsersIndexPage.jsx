import React from "react";

// Example user data
const users = [
  { id: 1, name: "Tom", active: true },
  { id: 2, name: "John Bonso", active: false },
  { id: 3, name: "Anna Furtado", active: true },
  { id: 4, name: "Lady Gaga", active: false },
  { id: 5, name: "Silvana", active: true },
  { id: 6, name: "Lucas", active: false },
  { id: 7, name: "Joao Pedro", active: true },
  { id: 8, name: "Manuela", active: false },
];

// Main component
function UserList() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>User List</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td style={{ textAlign: "center" }}>
                {user.active ? (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                    alt="Active"
                    width="24"
                  />
                ) : (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/190/190406.png"
                    alt="Inactive"
                    width="24"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;

