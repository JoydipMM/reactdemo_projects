"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import sustanabilitystyles from "@/components/Home/sustainability/sustanability.module.css";

import AnimatedText from "@/components/Framemotion/framemotion";
import distributorystyles from "../distributor/distributor.module.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Distributor({ distributorData }) {
  const allData = distributorData?.data?.content;
  const allbefDatas = allData?.benifits;
  const [formData, setFormData] = useState({
    full_name: "",
    product_name: "",
    email_address: "",
    phone_number: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ""
  });

  const validateForm = () => {
    if (!formData.full_name.trim()) {
      toast.error("Full name is required");
      return false;
    }
    if (!formData.email_address.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email_address)) {
      toast.error("Please enter a valid email");
      return false;
    }
    if (!formData.phone_number.trim()) {
      toast.error("Phone number is required");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEWSLETTER_URL}wpcf7/distributor/enroll`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      toast.success("Thank you! We will contact you soon.");
      setFormData({
        full_name: "",
        product_name: "",
        email_address: "",
        phone_number: "",
        message: ""
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className={`${distributorystyles.distributor_wrapper}`}>
        <div className="container">
          <h2 className="titlecenter">
            <span>{allData?.pre_heading}</span>
            <AnimatedText text={allData?.heading} />
          </h2>

          <div className={`${distributorystyles.distributor_item}`}>
            <ul>
              {allbefDatas &&
                allbefDatas.map((allbefData, index) => {
                  return (
                    <li key={`allbefDataID-${index}`}>{allbefData?.title}</li>
                  );
                })}
            </ul>
          </div>

          <div className={`${distributorystyles.distributor_content}`}>
            <div className="left">
              <div
                className={`${sustanabilitystyles.sustainab_mrp} ${distributorystyles.sustainab_mrp}`}
              >
                <div
                  className={`${sustanabilitystyles.sustain_leftbox} ${distributorystyles.sustain_leftbox}`}
                >
                  <Image
                    src="/images/export/distributor.jpg"
                    alt=""
                    fill={true}
                  />
                </div>

                <div
                  className={`${sustanabilitystyles.sustain_rightbox} ${distributorystyles.sustain_rightbox}`}
                >
                  <div
                    className={`${sustanabilitystyles.sustainab_rightboxinner} ${distributorystyles.sustainab_rightboxinner}`}
                  >
                    <h2>
                      <span>{allData?.name}</span>
                    </h2>
                    <p className={`${distributorystyles.designation}`}>
                      {allData?.designation}
                    </p>
                    <p
                      className={`${sustanabilitystyles.sust_txt} ${distributorystyles.sust_txt}`}
                      style={{ marginBottom: 0 }}
                    >
                      {allData?.feedback}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-col">
                    <input
                      name="full_name"
                      placeholder="Full Name"
                      value={formData.full_name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-col">
                    <input
                      name="product_name"
                      placeholder="Product Name/Code"
                      value={formData.product_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-col">
                    <input
                      type="email"
                      name="email_address"
                      placeholder="Email"
                      value={formData.email_address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-col">
                    <input
                      type="tel"
                      name="phone_number"
                      placeholder="Phone Number"
                      value={formData.phone_number}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-col-full">
                    <textarea
                      name="message"
                      placeholder="Project Details (Optional)"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-col-full">
                    <button className="common-btn purple" type="submit">
                      <label>
                        {isSubmitting
                          ? "Submitting..."
                          : "Join our global network"}
                        {!isSubmitting && (
                          <Image
                            width={34}
                            height={16}
                            src="/images/arrow-right.svg"
                            alt=""
                          />
                        )}
                      </label>
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
