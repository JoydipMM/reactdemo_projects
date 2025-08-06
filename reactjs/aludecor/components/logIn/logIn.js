import Image from "next/image";
import Link from "next/link";
import contctstyles from "@/components/contactUs/contactContent/contactContent.module.css";
import AnimatedText from "../Framemotion/framemotion";
import loginstyles from "@/components/logIn/logIn.module.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
export default function Login({ callbackUrl }) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const router = useRouter();

  // Get callbackUrl from props or from query parameters as fallback
  const redirectUrl = callbackUrl || router.query.callbackUrl || "/myaccount";

  const handleLoginChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    if (!formData.username.trim()) {
      toast.error("Email is required", { autoClose: 3000 });
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.username)) {
      toast.error("Enter a valid email address", { autoClose: 3000 });
      isValid = false;
    }
    if (!formData.password.trim()) {
      toast.error("Password is required", { autoClose: 3000 });
      isValid = false;
    }
    return isValid;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const loadingToast = toast.loading("Submitting...");

    const result = await signIn("credentials", {
      redirect: false,
      username: formData.username,
      password: formData.password,
      callbackUrl: redirectUrl // Pass the redirect URL to NextAuth
    });
    if (result.error) {
      toast.update(loadingToast, {
        render: `Invalid credentials`,
        type: "error",
        isLoading: false,
        autoClose: 3000
      });
    } else {
      toast.update(loadingToast, {
        render: "LoggedIn Successfully!!",
        type: "success",
        isLoading: false,
        autoClose: 3000
      });
      setFormData({
        username: "",
        password: ""
      });
      // console.log("result", result);
      router.push(redirectUrl); // Redirect to dashboard
    }
  };

  return (
    <>
      <section className="container">
        <div className="commonpadding">
          <div
            className={`${contctstyles.contactdetails} ${loginstyles.contactdetails}`}
          >
            <div
              className={`${contctstyles.contactrgt} ${loginstyles.contactrgt}`}
            >
              <form onSubmit={handleLoginSubmit}>
                <h2 className="titlecenter">
                  {" "}
                  <AnimatedText text="Login into your account" />{" "}
                </h2>
                <p>
                  Please fill in the fields below to login into your account.
                </p>
                <div className="formsection">
                  <div className="formbox w100">
                    <input
                      type="email"
                      name="username"
                      placeholder="Email*"
                      value={formData.username}
                      onChange={handleLoginChange}
                      required
                    />
                  </div>
                  <div className="formbox w100">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password*"
                      value={formData.password}
                      onChange={handleLoginChange}
                      required
                    />
                  </div>
                </div>
                {/* <div>
                <label class="checkboxLabel">
                  <input type="checkbox" name="saveAddress" />
                  Do you want to save your address?
                  <span class="checkmark"></span>
                </label>
              </div> */}
                <button className="common-btn purple" type="submit">
                  {" "}
                  <label>
                    {" "}
                    Login into your account{" "}
                    <Image
                      width={34}
                      height={16}
                      src="/images/arrow-right.svg"
                      alt="arrow-right"
                    />
                  </label>
                </button>
              </form>
              <ToastContainer autoClose={false} />
              <p>
                Click on <Link href="/createaccount"> create account</Link> if
                you don’t have an account.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
