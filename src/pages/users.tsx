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
  return {
    props: { data: [] },
  };
};
