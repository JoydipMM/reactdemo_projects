import Image from "next/image";

import React, { useState } from "react";

import AnimatedText from "@/components/Framemotion/framemotion";
import contactcontentstyles from "@/components/csr/contactContent/contactcontent.module.css";
import keybenefitsstyles from "../keyBenefits/keybenefits.module.css";
import { toast, ToastContainer } from "react-toastify";
export default function KeyBenefits({ informationData }) {
  const allInformationData = informationData.data?.content;
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    company: "",
    use_case: ""
  });
  const handleActiveChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  function validateFirstName(firstName) {
    // Only letters (no numbers, spaces, or special characters)
    // Maximum 40 characters
    const nameRegex = /^[a-zA-Z ]{1,40}$/;
    return (
      firstName.trim() !== "" && // Not empty
      nameRegex.test(firstName) // Only letters, 1-40 chars
    );
  }
  const validateForm = () => {
    let isValid = true;
    if (!formData.full_name.trim()) {
      toast.error("Full name is required", { autoClose: 3000 });
      isValid = false;
    } else if (!validateFirstName(formData.full_name)) {
      toast.error("Full name must contain only letters", { autoClose: 3000 });
      isValid = false;
    }
    if (!formData.email_address.trim()) {
      toast.error("Email is required", { autoClose: 3000 });
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email_address)) {
      toast.error("Enter a valid email address", { autoClose: 3000 });
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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEWSLETTER_URL}wpcf7/firewall/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );
      const data = await response.json();
      if (response.ok) {
        toast.update(loadingToast, {
          render: "Data Send Successfully!!",
          type: "success",
          isLoading: false,
          autoClose: 3000
        });
        //  console.log("data", data);
        setMessage(data.message);
        setFormData({
          full_name: "",
          email_address: "",
          company: "",
          use_case: ""
        });
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
      <section className="commonpadding">
        <div className="container">
          <div className={`${keybenefitsstyles.top_content}`}>
            <h2 className="centertie">
              <AnimatedText text={allInformationData?.heading} />
            </h2>
            <p>{allInformationData?.subheading}</p>
          </div>

          <div
            className={`${contactcontentstyles.message_content} ${keybenefitsstyles.message_content}`}
          >
            <div
              className={`${contactcontentstyles.left} ${keybenefitsstyles.left}`}
            >
              <h2>
                <AnimatedText text={allInformationData?.left_heading} />
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: allInformationData?.left_description
                }}
              ></div>
            </div>
            <div className={contactcontentstyles.right}>
              <h2>
                <AnimatedText text={allInformationData?.right_heading} />
              </h2>

              <form onSubmit={handleAccountSubmit}>
                <div className="formsection">
                  <div className="formbox">
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Name"
                      value={formData.full_name}
                      onChange={handleActiveChange}
                    />
                  </div>

                  <div className="formbox">
                    <input
                      type="email"
                      name="email_address"
                      placeholder="Email"
                      value={formData.email_address}
                      onChange={handleActiveChange}
                    />
                  </div>

                  <div className="formbox">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleActiveChange}
                    />
                  </div>

                  <div className="formbox">
                    <input
                      type="text"
                      name="use_case"
                      placeholder="Use Case"
                      value={formData.use_case}
                      onChange={handleActiveChange}
                    />
                  </div>

                  <div className="formbox w100">
                    <button className="common-btn purple" type="submit">
                      {" "}
                      <label>
                        Send
                        <Image
                          width={34}
                          height={16}
                          src="/images/arrow-right.svg"
                          alt=""
                        />
                      </label>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer autoClose={false} />
    </>
  );
}
