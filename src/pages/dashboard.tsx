import DashboardComponent from "@/components/Dashboard";
import StandardLayout from "@/components/Layout/StandardLayout";
import NavbarComponent from "@/components/Navbar/Navbar";
import { Users } from "@/models/database/database";
import { getApiClient } from "@/services/axios";
// import axios from "axios";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const axios = getApiClient();
  const [users, setUsers] = useState<Users[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  console.log("Users: ", users);
  useEffect(() => {
    axios
      .get("/users")
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

  return (
    <>
      <StandardLayout>
        <DashboardComponent users={users} />
      </StandardLayout>
    </>
  );
}

// Dashboard.getLayout = function getLayout(page: any) {
//   return <StandardLayout>{page}</StandardLayout>;
// };

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
