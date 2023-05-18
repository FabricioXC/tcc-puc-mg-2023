import StandardLayout from "@/components/Layout/StandardLayout";
import NavbarComponent from "@/components/Navbar/Navbar";
import { Users } from "@/models/database/database";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { DashboardIndicator, DashboardMainContainer } from "./styles";
interface DashboardComponentProps {
  users: Users[];
}

const DashboardComponent: React.FC<DashboardComponentProps> = ({ users }) => {
  //   const [users, setUsers] = useState<Users[]>([]);
  //   const [errorMessage, setErrorMessage] = useState("");
  //   console.log("Users: ", users);
  //   useEffect(() => {
  //     axios
  //       .get("/api/users")
  //       .then(({ data }) => {
  //         setUsers(data.users);
  //       })
  //       .catch((error) => {
  //         let message;
  //         if (error.response) {
  //           message = error.response.data.message;
  //         } else {
  //           message = error.message;
  //         }
  //         setErrorMessage(message);
  //         console.log("Users Error: ", error);
  //       });
  //   }, []);

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
    <>
      {/* <NavbarComponent /> */}
      <DashboardMainContainer>
        <DashboardIndicator>
          <div className="text-lg">Usuários cadastrados:</div>
          {/* {errorMessage && <div className="text-red-500">{errorMessage}</div>} */}
          <div>{users?.length}</div>
        </DashboardIndicator>
        {/* {users.map((user, i) => (
              <p key={i}>
                {user?.first_name} {user?.last_name} | {user?.email}
              </p>
            ))} */}
      </DashboardMainContainer>
    </>
  );
};

// DashboardComponent.getLayout = function getLayout(page: any) {
//   return <StandardLayout>{page}</StandardLayout>;
// };
export default DashboardComponent;
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
