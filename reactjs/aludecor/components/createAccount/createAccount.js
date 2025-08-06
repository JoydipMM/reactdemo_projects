import Image from "next/image";
import Link from "next/link";
import contctstyles from "@/components/contactUs/contactContent/contactContent.module.css";

import loginstyles from "@/components/logIn/logIn.module.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import AnimatedText from "@/components/Framemotion/framemotion";

export default function Createaccountarea() {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    user_role: "",
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    confirmpassword: ""
  });
  const router = useRouter();
  const handleActiveChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function validateFirstName(firstName) {
    // Only letters (no numbers, spaces, or special characters)
    // Maximum 40 characters
    const nameRegex = /^[a-zA-Z]{1,40}$/;
    return (
      firstName.trim() !== "" && // Not empty
      nameRegex.test(firstName) // Only letters, 1-40 chars
    );
  }
  const validateForm = () => {
    let isValid = true;
    if (!formData.first_name.trim()) {
      toast.error("First name is required", { autoClose: 3000 });
      isValid = false;
    } else if (!validateFirstName(formData.first_name)) {
      toast.error("First name must contain only letters", { autoClose: 3000 });
      isValid = false;
    }
    // if (!formData.last_name.trim()) {
    //   toast.error("Last name is required", { autoClose: 3000 });
    //   isValid = false;
    // }
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
    if (!formData.user_role) {
      toast.error("Account type is required", { autoClose: 3000 });
      isValid = false;
    }
    if (!formData.confirmpassword.trim()) {
      toast.error("Confirm Password is required", { autoClose: 3000 });
      isValid = false;
    } else if (formData.password !== formData.confirmpassword) {
      toast.error("Passwords do not match", { autoClose: 3000 });
      isValid = false;
    }
    return isValid;
  };

  const handleAccountSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (!validateForm()) {
      return;
    }
    const loadingToast = toast.loading("Submitting...");
    try {
      const response = await fetch("/api/proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        toast.update(loadingToast, {
          render: "User Created Successfully, Please login to continue!!",
          type: "success",
          isLoading: false,
          autoClose: 3000
        });
        //  console.log("data", data);
        setMessage(data.message);
        setFormData({
          user_role: "",
          first_name: "",
          last_name: "",
          username: "",
          password: "",
          confirmpassword: ""
        });
        router.push("/login"); // Redirect to dashboard
      } else {
        console.log("data", data);
        setMessage(data.message);
        toast.update(loadingToast, {
          render: `${data.message}`,
          type: "error",
          isLoading: false,
          autoClose: 3000
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.update(loadingToast, {
        render: "Error submitting form:",
        type: "error",
        isLoading: false,
        autoClose: 3000
      });
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
              <form onSubmit={handleAccountSubmit}>
                <h2 className="titlecenter">
                  <AnimatedText text="Create your account" />
                </h2>
                <p>
                  Please fill in the fields below to create an online account.
                </p>
                <div className="formsection">
                  <div className="formbox w100">
                    <select
                      name="user_role"
                      value={formData.user_role}
                      onChange={handleActiveChange}
                      required
                    >
                      <option value="">Account type*</option>
                      <option value="specifiers">Specifiers</option>
                      <option value="fabricators">Fabricators</option>
                      <option value="channel_partners">Channel Partners</option>
                    </select>
                  </div>
                  <div className="formbox w100">
                    <input
                      name="first_name"
                      placeholder="First Name*"
                      onChange={handleActiveChange}
                      value={formData.first_name}
                      required
                    />
                  </div>
                  <div className="formbox w100">
                    <input
                      name="last_name"
                      placeholder="Last Name"
                      value={formData.last_name}
                      onChange={handleActiveChange}
                    />
                  </div>
                  <div className="formbox w100">
                    <input
                      type="email"
                      name="username"
                      placeholder="Email*"
                      value={formData.username}
                      onChange={handleActiveChange}
                      required
                    />
                  </div>
                  <div className="formbox w100">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password*"
                      value={formData.password}
                      onChange={handleActiveChange}
                      required
                    />
                  </div>
                  <div className="formbox w100">
                    <input
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirm Password*"
                      value={formData.confirmpassword}
                      onChange={handleActiveChange}
                      required
                    />
                  </div>
                </div>
                <button className="common-btn purple" type="submit">
                  <label>
                    Create account
                    <Image
                      width={34}
                      height={16}
                      src="/images/arrow-right.svg"
                      alt=""
                    />
                  </label>
                </button>
                <p>
                  Click on <Link href="/login">login</Link> if you already have
                  an account.
                </p>
              </form>
              <ToastContainer autoClose={false} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
