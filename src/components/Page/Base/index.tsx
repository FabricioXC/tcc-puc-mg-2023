import BaseForm from "@/components/Forms";
import StandardLayout from "@/components/Layout/StandardLayout";
import TableComponent from "@/components/Table";
import { makeTableHeaders } from "@/components/Table/headers";
import { DataType } from "@/models/components/Page/dataPage";
import { PageFactory } from "@/models/components/Page/factory";
import { Users } from "@/models/database/database";
import { UserData } from "@/models/pages/data";
import { getApiClient } from "@/services/axios";
// import axios from "axios";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
interface BasePageProps {
  dataType: DataType;
  hasExternalData?: boolean;
}
const BasePage: React.FC<BasePageProps> = ({ dataType, hasExternalData }) => {
  const [remoteData, setRemoteData] = useState<Users[]>([]);
  const [externalData, setExternalData] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [newClicked, setNewClicked] = useState(false);
  const [editData, setEditData] = useState<UserData | null>(null);
  console.log("RemoteData: ", remoteData);
  const [reloadData, setReloadData] = useState(true);
  const [isLoadingTable, setIsLoadingTable] = useState(false);
  const axios = getApiClient();
  useEffect(() => {
    console.log("AXIOS: ", axios.defaults.headers.Authorization);
    if (reloadData) {
      setIsLoadingTable(true);
      axios
        .get(`/${dataType}`)
        .then(({ data }) => {
          setRemoteData(data[dataType]);
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
        })
        .finally(() => {
          setIsLoadingTable(false);
        });
      setReloadData(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadData]);

  useEffect(() => {
    if ((newClicked || editData) && hasExternalData) {
      PageFactory.makeExternalData(dataType, setExternalData, setErrorMessage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newClicked, editData]);

  console.log(remoteData);
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
            header={makeTableHeaders(dataType)}
            remoteData={remoteData}
            handleNewClicked={handleNewClicked}
            setEditData={setEditData}
            isLoading={isLoadingTable}
          />
        ) : (
          <BaseForm
            handleNewClicked={handleNewClicked}
            newClicked={newClicked}
            setEditData={setEditData}
            editData={editData}
            externalData={externalData}
            reloadData={handleReloadData}
            dataType={dataType}
          />
        )}

        {/* <DashboardComponent users={users} /> */}
      </StandardLayout>
    </>
  );
};
export default BasePage;
// Dashboard.getLayout = function getLayout(page: any) {
//   return <StandardLayout>{page}</StandardLayout>;
// };

// export const getServerSideProps: GetServerSideProps = async () => {
//   // const apiClient = getApiClient(ctx);
//   // const { ["nextauth-token"]: token } = parseCookies(ctx);

//   // if (!token) {
//   //   return {
//   //     redirect: {
//   //       destination: "/",
//   //       permanent: false,
//   //     },
//   //   };
//   // }

//   return {
//     props: { data: [] },
//   };
// };
