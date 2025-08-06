import { useSession } from "next-auth/react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { getServerSession } from "next-auth";
import { useEffect } from "react";
import { authLogin } from "@/pages/api/auth/[...nextauth]";

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

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const handleLogout = async () => {
    await signOut({ redirect: false, callbackUrl: "/login" }); // Ensure logout completes
    router.push("/login");
  };
  return (
    <>
      <section className="container">
        <div className="commonpadding">
          <h1>Welcome, {session?.user?.displayname}!</h1>
          <p>Email: {session?.user?.email}</p>
          {/* <p>Token: {session?.user?.token}</p> */}
          <button className="common-btn purple" onClick={handleLogout}>
            <label>
              Logout
              <Image
                width={34}
                height={16}
                src="/images/arrow-right.svg"
                alt="arrow-right"
              />
            </label>
          </button>
        </div>
      </section>
    </>
  );
}
