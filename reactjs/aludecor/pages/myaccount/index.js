import Account from "@/components/MyAccount/account/account";
import { authLogin } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authLogin);
  //console.log("sesssssssssss", session);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    };
  }

  return {
    props: { session }
  };
}
export default function MyAccount() {
  return (
    <>
      <Account />
    </>
  );
}
