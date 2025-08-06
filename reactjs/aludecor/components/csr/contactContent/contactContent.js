import Image from "next/image";

import React, { useState } from "react";

import AnimatedText from "@/components/Framemotion/framemotion";
import contactcontentstyles from "../contactContent/contactcontent.module.css";
import { toast, ToastContainer } from "react-toastify";
export default function Contactcontent({ partnerData }) {
  const allData = partnerData?.data?.content;
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email_address: "",
    reason_contact: "",
    state: "",
    message: "",
    saveAddress: false
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function validateIndianPhoneNumber(phoneNumber) {
    // Remove all non-digit characters
    const cleaned = phoneNumber.replace(/\D/g, "");

    // Indian phone number regex (10 digits starting with 6-9)
    const indianPhoneRegex = /^[6-9]\d{9}$/;

    return indianPhoneRegex.test(cleaned);
  }
  const validateForm = () => {
    let isValid = true;

    if (!formData.first_name.trim()) {
      toast.error("First name is required", { autoClose: 5000 });
      isValid = false;
    }
    if (!formData.email_address.trim()) {
      toast.error("Email is required", { autoClose: 5000 });
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email_address)) {
      toast.error("Enter a valid email address", { autoClose: 5000 });
      isValid = false;
    }
    if (!formData.phone_number.trim()) {
      toast.error("Phone number is required", { autoClose: 5000 });
      isValid = false;
    } else if (!validateIndianPhoneNumber(formData.phone_number)) {
      toast.error("Please enter a valid phone number", { autoClose: 5000 });
      isValid = false;
    }
    if (!formData.reason_contact) {
      toast.error("Please select a reason for contacting", { autoClose: 5000 });
      isValid = false;
    }
    if (!formData.state) {
      toast.error("Please select a state", { autoClose: 5000 });
      isValid = false;
    }
    if (!formData.saveAddress) {
      toast.error("You must accept the terms", { autoClose: 5000 });
      isValid = false;
    }

    return isValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const loadingToast = toast.loading("Submitting...");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEWSLETTER_URL}wpcf7/newsletter/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );
      const data = await response.json();

      if (response.ok) {
        toast.update(loadingToast, {
          render: "Data Submitted Successfully...",
          type: "success",
          isLoading: false,
          autoClose: 3000
        });
        //console.log("data", data);
        setMessage(data.message);
        setFormData({
          first_name: "",
          last_name: "",
          phone_number: "",
          email_address: "",
          reason_contact: "",
          state: "",
          message: "",
          saveAddress: false
        });
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      //console.error("Error submitting form:", error);
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
          <div className={contactcontentstyles.message_content}>
            <div className={contactcontentstyles.left}>
              <div className="pic">
                <Image src={allData?.image?.url} fill={true} alt="" />
              </div>
              <h2>
                <AnimatedText text={allData?.heading} />
              </h2>
              <p>{allData?.description}</p>
            </div>
            <div className={contactcontentstyles.right}>
              <h2>
                <AnimatedText text="Send us a message" />
              </h2>

              <form onSubmit={handleSubmit}>
                {/* {loading && <Loader />} */}
                <div className="formsection">
                  <div className="formbox">
                    <input
                      name="first_name"
                      placeholder="First name*"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="formbox">
                    <input
                      name="last_name"
                      placeholder="Last name*"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="formbox">
                    <input
                      type="email"
                      name="email_address"
                      placeholder="Email*"
                      value={formData.email_address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="formbox">
                    <input
                      type="tel"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      placeholder="Phone number*"
                      required
                    />
                  </div>
                  <div className="formbox">
                    <select
                      name="reason_contact"
                      value={formData.reason_contact}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Reason for contacting *</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Information">Information</option>
                      <option value="Job Information">Job Information</option>
                    </select>
                  </div>
                  <div className="formbox">
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select State</option>
                      {states.map((state, index) => (
                        <option value={state} key={`state-${index}`}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="formbox w100">
                    <textarea
                      placeholder="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div>
                  <label className="checkboxLabel">
                    <input
                      type="checkbox"
                      name="saveAddress"
                      checked={formData.saveAddress}
                      onChange={handleChange}
                      required
                    />
                    I have read and accept the terms.
                    <span className="checkmark"></span>
                  </label>
                </div>
                <button className="common-btn purple" type="submit">
                  <label>
                    Contact Us for Collaboration
                    <Image
                      width={34}
                      height={16}
                      src="/images/arrow-right.svg"
                      alt=""
                    />
                  </label>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
