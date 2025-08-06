import Image from "next/image";
import LeftNav from "@/components/MyAccount/leftnav/leftnav";
import warrantystyles from "@/components/warranty/warranty.module.css";
import React, { useEffect, useState } from "react";
import AnimatedText from "@/components/Framemotion/framemotion";
import accountstyles from "../account/account.module.css";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { apiFetcher } from "@/helper/apiFetcher";

export default function AccountInfo() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [text, setText] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    description: "",
    phone: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!session?.user?.token || isLoading) return;

      setIsLoading(true);
      const toastId = toast.loading("fetching Data...");
      try {
        const result = await apiFetcher(
          `${process.env.NEXT_PUBLIC_IMAGE_URL}my-account/profile`,
          {
            method: "GET",
            token: session?.user?.token
          }
        );
        setApiData(result);
        setUserData(result.data.content);
        setIsLoading(false);
        console.log("ACCount DATA", result);
      } catch (error) {
        toast.error(`Download failed: ${error.message || "Network error"}`);
      } finally {
        setIsLoading(false);
        toast.dismiss(toastId);
      }
    };
    fetchData();
  }, [session]);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await apiFetcher(
        `${process.env.NEXT_PUBLIC_IMAGE_URL}my-account/profile/update`, // Adjust your endpoint
        {
          method: "POST",
          data: {
            first_name: formData.firstName || session?.user?.firstName,
            last_name: formData.lastName || userData?.lastName,
            user_description: text || userData?.user_description,
            user_phone: formData.phone || userData?.user_phone
          },
          token: session?.user?.token // Adjust token source as needed
        }
      );

      toast.success("Profile updated successfully!");

      // Reset form if needed
    } catch (error) {
      console.error("Profile update error:", error);
      // Error is already handled by apiFetcher
    }
  };
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  return (
    <>
      <section>
        <div className="container">
          <div
            className={`${warrantystyles.warrntywrp} ${accountstyles.warrntywrp}`}
          >
            <div className={warrantystyles.leftwrp_warrnty}>
              <LeftNav usertype={userData?.user_role} />
            </div>
            <div className={warrantystyles.rightwrp_warrnty}>
              <h3>
                <AnimatedText text="Basic Information" />
              </h3>
              <form onSubmit={handleProfileSubmit}>
                <div className="formsection">
                  <div className="formbox">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      placeholder={userData?.first_name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="formbox">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      placeholder={userData?.last_name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="formbox w100">
                    <textarea
                      placeholder={userData?.user_description}
                      value={text}
                      onChange={(e) => {
                        const value = e.target.value;
                        const words = value.trim().split(/\s+/);

                        // Allow update but truncate if over 200 words
                        if (words.length <= 200) {
                          setText(value);
                        } else {
                          // Truncate to 200 words and update
                          const trimmed = words.slice(0, 200).join(" ");
                          setText(trimmed);
                        }
                      }}
                    ></textarea>

                    <div className="word-count">
                      {wordCount}
                      /200
                    </div>
                  </div>

                  <h3>
                    <AnimatedText text="Email Address" />
                  </h3>

                  <div className="formbox">
                    <input
                      type="email"
                      name="email"
                      placeholder={session?.user?.email}
                      className="verified"
                      readOnly
                    />
                  </div>

                  <div className="formbox">
                    <span className="verified-txt">
                      This is your userName, it cannot be changed!
                    </span>
                  </div>

                  <h3>
                    <AnimatedText text="Phone Number" />
                  </h3>

                  <div className="formbox">
                    <select defaultValue="India">
                      <option value="India">India</option>
                    </select>
                  </div>

                  <div className="formbox">
                    <div className="phone-row">
                      <select defaultValue="+91">
                        <option value="+91">+91</option>
                      </select>
                      <input
                        type="number"
                        name="phone"
                        value={formData.phone}
                        placeholder={userData?.user_phone}
                        className={userData?.user_phone ? "verified" : ""}
                        onChange={handleChange}
                      />
                    </div>
                    <span className="verified-txt2">
                      {userData?.user_phone
                        ? "Yay! This number is stored in the database!"
                        : ""}
                    </span>
                  </div>

                  <div className="formbox w200">
                    <button className="common-btn purple" type="submit">
                      <label>Save</label>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
