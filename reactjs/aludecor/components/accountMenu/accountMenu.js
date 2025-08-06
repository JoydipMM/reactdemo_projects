import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";
import styles from "./accountMenu.module.css";
import { signOut } from "next-auth/react";

export default function AccountMenu() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.profile_dropdown_container}>
      <Link
        href={session ? "/myaccount" : "/login"}
        className="search-btn"
        onMouseEnter={() => session && setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Image
          width={24}
          height={24}
          src="/images/profile-circle.svg"
          alt="profile-circle.svg"
        />
        {/* {session ? `Hi, ${session?.user?.name}!` : `Login`} */}
        {session ? (
          <span>
            Hi, {session?.user?.name}
            <Image
              className="parrow"
              width={14}
              height={14}
              src="/images/arrow-down.svg"
              alt="profile-circle.svg"
            />
          </span>
        ) : (
          "Sign in"
        )}
      </Link>
      {session && isOpen && (
        <div
          className={styles.dropdown_menu}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <Link href="/myaccount" className={styles.dropdown_item}>
            My Account
          </Link>
          <button
            onClick={async () =>
              await signOut({
                redirect: true,
                callbackUrl: "/login"
              })
            }
            className={`${styles.dropdown_item} ${styles.dropdown_item_button}`}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}
