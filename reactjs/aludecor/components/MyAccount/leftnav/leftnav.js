import Link from "next/link";
import supportstyles from "@/components/leftSupport/leftSupport.module.css";
import accountstyles from "@/components/MyAccount/leftnav/leftnav.module.css";
import Image from "next/image";
import AnimatedText from "@/components/Framemotion/framemotion";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function LeftNav({ usertype = "" }) {
  const { data: session, status } = useSession();
  let userImage = "/images/accountleft/propic.jpg";
  // console.log(session);
  //console.log(usertype);
  if (usertype == "specifiers") {
    userImage = "/images/Specifer.png";
  } else if (usertype == "fabricators") {
    userImage = "/images/Fabricator.png";
  } else if (usertype == "channel_partners") {
    userImage = "/images/Channel-Partner.png";
  } else {
    userImage = "/images/user.png";
  }
  return (
    <>
      <div className={supportstyles.leftsupport}>
        <div className={`${supportstyles.callsec} ${accountstyles.callsec}`}>
          <div className={`${accountstyles.propic}`}>
            <div className={`${accountstyles.propicarea}`}>
              <Image
                width={370}
                height={370}
                src={usertype == "" ? "/images/user.png" : userImage}
                alt="user"
              />
              {/* <Link className={`${accountstyles.clickarea}`} href="#">
                <Image
                  width={60}
                  height={60}
                  src="/images/accountleft/click.svg"
                  alt=""
                />
              </Link> */}
            </div>
            <p>{session?.user?.displayname}</p>
          </div>
        </div>

        <div className={`${supportstyles.calllink} ${accountstyles.calllink}`}>
          <ul>
            <li>
              <Link href="/myaccount">
                <Image
                  width={24}
                  height={24}
                  src="/images/profile-circle.svg"
                  alt=""
                />{" "}
                My profile
              </Link>
            </li>
            <li>
              <Link href="/myaccount/download">
                <Image
                  width={24}
                  height={24}
                  src="/images/accountleft/licon-2.svg"
                  alt=""
                />{" "}
                Downloads
              </Link>
            </li>
            <li>
              <Link href="/myaccount/settings">
                <Image
                  width={24}
                  height={24}
                  src="/images/accountleft/licon-3.svg"
                  alt=""
                />{" "}
                Settings
              </Link>
            </li>
          </ul>
        </div>

        <a
          onClick={async () =>
            await signOut({
              redirect: true,
              callbackUrl: "/login"
            })
          }
          className="common-btn"
        >
          <label>
            <Image
              width={24}
              height={24}
              src="/images/accountleft/licon-4.svg"
              alt=""
            />{" "}
            Log out
          </label>
        </a>
      </div>
    </>
  );
}
