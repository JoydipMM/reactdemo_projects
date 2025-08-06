import Downloads from "@/components/MyAccount/downloads/downloads";
import { authLogin } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authLogin);
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

export default function Download() {
  return (
    <>
      <Downloads />
    </>
  );
}
