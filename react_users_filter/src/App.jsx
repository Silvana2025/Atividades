import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [newUser, setNewUser] = useState({ name: "", email: "", website: "" });


    useEffect(() => {
    document.title = "Lista de Usuarios";
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Erro ao carregar usuários:", err));
  }, []);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleClear = () => {
    
    setSearch("");
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Lista de Usuários</h1>
         <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <input
          className="search"
          type="text"
          placeholder="Filtrar por nome ou email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        
            <button onClick={handleClear} className="clear-btn">
              Limpar filtro
            </button>
          
        </div>

        <p>
        
        Exibindo {filtered.length} de {users.length} usuários
  </p>

      </header>

      <ul className="list">
        {filtered.map((u) => (
          <li className="card" key={u.id}>
            <div className="title">{u.name}</div>
            <div className="muted">{u.email}</div>
            <a
              className="link"
              href={`http://${u.website}`}
              target="_blank"
              rel="noreferrer"
            >
              {u.website}
            </a>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;