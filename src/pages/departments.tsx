import DashboardComponent from "@/components/Dashboard";
import BaseForm from "@/components/Forms";
import DepartmentsManagement from "@/components/Forms/User";
import StandardLayout from "@/components/Layout/StandardLayout";
import NavbarComponent from "@/components/Navbar/Navbar";
import TableComponent from "@/components/Table";
import { makeTableHeaders } from "@/components/Table/headers";
import { Departments } from "@/models/database/database";
import { UserData } from "@/models/pages/data";
import axios from "axios";
import { reload } from "firebase/auth";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

export default function Departments() {
  const [departments, setDepartments] = useState<Departments[]>([]);
  const [profiles, setProfiles] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [newClicked, setNewClicked] = useState(false);
  const [editData, setEditData] = useState<UserData | null>(null);
  console.log("Departments: ", departments);
  const [reloadData, setReloadData] = useState(true);

  useEffect(() => {
    if (reloadData) {
      axios
        .get("/api/departments")
        .then(({ data }) => {
          setDepartments(data.departments);
        })
        .catch((error) => {
          let message;
          if (error.response) {
            message = error.response.data.message;
          } else {
            message = error.message;
          }
          setErrorMessage(message);
          console.log("Departments Error: ", error);
        });
      setReloadData(false);
    }
  }, [reloadData]);

  // useEffect(() => {
  //   if (newClicked || editData) {
  //     axios
  //       .get("/api/profiles")
  //       .then(({ data }) => {
  //         let arr: string[] = [];
  //         data.profiles.forEach((e: { profile: any }) => {
  //           arr.push(e.profile);
  //         });
  //         setProfiles(arr);
  //       })
  //       .catch((error) => {
  //         let message;
  //         if (error.response) {
  //           message = error.response.data.message;
  //         } else {
  //           message = error.message;
  //         }
  //         setErrorMessage(message);
  //         console.log("Profile Error: ", error);
  //       });
  //   }
  // }, [newClicked, editData]);

  console.log(departments);
  console.log("Profiles: ", profiles);
  console.log("Edit Data: ", editData);
  const handleNewClicked = () => {
    setNewClicked(!newClicked);
  };
  const handleReloadData = () => {
    setReloadData(true);
  };

  return (
    <>
      <StandardLayout>
        {!newClicked && !editData ? (
          <TableComponent
            header={makeTableHeaders("departments")}
            remoteData={departments}
            handleNewClicked={handleNewClicked}
            setEditData={setEditData}
          />
        ) : (
          <BaseForm
            handleNewClicked={handleNewClicked}
            newClicked={newClicked}
            setEditData={setEditData}
            editData={editData}
            // externalData={profiles}
            reloadData={handleReloadData}
            dataType="departments"
          />
        )}

        {/* <DashboardComponent departments={departments} /> */}
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
