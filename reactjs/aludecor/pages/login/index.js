import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Loginarea from "@/components/logIn/logIn";
import { getServerSession } from "next-auth";
import { authLogin } from "../api/auth/[...nextauth]";

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authLogin);
  const { callbackUrl } = context.query;

  if (session) {
    return {
      redirect: {
        destination: callbackUrl || "/dashboard",
        permanent: false
      }
    };
  }

  return {
    props: {
      callbackUrl: callbackUrl || null
    }
  };
}

export default function Login({ callbackUrl }) {
  return (
    <>
      <Breadcrumb pagehierarchy={["Login"]} />
      <Loginarea callbackUrl={callbackUrl} />
    </>
  );
}
