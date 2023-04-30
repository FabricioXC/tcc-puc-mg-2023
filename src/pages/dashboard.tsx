import { Users } from "@/models/database";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState<Users[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  console.log("Users: ", users);
  useEffect(() => {
    axios
      .get("/api/users")
      .then(({ data }) => {
        setUsers(data.users);
      })
      .catch((error) => {
        let message;
        if (error.response) {
          message = error.response.data.message;
        } else {
          message = error.message;
        }
        setErrorMessage(message);
      });
  }, []);

  return (
    <div className="p-6">
      <div style={{ background: "#fff" }}>
        <h1 className="mb-4 text-lg">Users:</h1>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {users.map((user, i) => (
          <p key={i}>
            {user?.first_name} {user?.last_name} | {user?.email}
          </p>
        ))}
      </div>
    </div>
  );
}
