import BasePage from "@/components/Page/Base";
import { GetServerSideProps } from "next";

export default function Users() {
  return (
    <>
      <BasePage dataType="users" hasExternalData />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // ctx.req.headers["Authorization"] = "Teste de autorization";
  // console.log("ctx: ", ctx.req.headers["Authorization"]);
  return {
    props: { data: [] },
  };
};
