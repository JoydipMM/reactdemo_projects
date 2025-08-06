import Breadcrumb from "@/components/breadCrumb/Breadcrumb";
import Createaccountarea from "@/components/createAccount/createAccount";

export default function Createaccount() {
  return (
    <>
      <Breadcrumb pagehierarchy={["Create Account"]} />
      <Createaccountarea />
    </>
  );
}
