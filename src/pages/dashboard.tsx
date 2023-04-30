import { Users } from "@/models/database";
import axios from "axios";
import { GetServerSideProps } from "next";
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
        console.log("Users Error: ", error);
      });
  }, []);

  //   useEffect(() => {

  //   const test = async () => {
  //     const users = await User.findAll({
  //         attributes: ["first_name", "last_name", "email"],
  //         //   include: "tasks",
  //         limit: 100,
  //       });
  //       import User from "../../database/models/user";
  //   }
  //   }, []);

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

export const getServerSideProps: GetServerSideProps = async () => {
  // const apiClient = getApiClient(ctx);
  // const { ["nextauth-token"]: token } = parseCookies(ctx);

  // if (!token) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: { data: [] },
  };
};
