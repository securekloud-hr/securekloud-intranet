
import React, { useState, useEffect } from "react";

export default function LoginPage({ onLogin }) {
  const [users, setUsers] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    fetch("/data/users.json")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  const handleLogin = () => {
    const user = users.find(u => u.id === selectedId);
    if (user) {
      localStorage.setItem("userId", user.id);
      onLogin(user);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Select Employee to Login</h2>
      <select onChange={(e) => setSelectedId(e.target.value)} className="border p-2">
        <option value="">-- Select User --</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <button
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
