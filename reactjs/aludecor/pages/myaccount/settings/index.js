import Settingsarea from "@/components/MyAccount/settings/settings";
import { authLogin } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";

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
export default function Settings() {
  const { data: session, status } = useSession();
  return (
    <>
      <Settingsarea session={session} />
    </>
  );
}
