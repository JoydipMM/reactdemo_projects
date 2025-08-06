import Image from "next/image";
import LeftSupport from "../leftSupport/leftSupport";
import warrantystyles from "../warranty/warranty.module.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { toast, ToastContainer } from "react-toastify";

import "react-datepicker/dist/react-datepicker.css";
import AnimatedText from "../Framemotion/framemotion";
import { useSession } from "next-auth/react";
export default function Warranty() {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email_address: "",
    country: "",
    product_name: "",
    purchase_place: "",
    product_invoice: null
  });
  const [purchase_date, setPurchaseDate] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  // const handleFileChange = (e) => {
  //   setProductInvoice(e.target.files[0]);
  // };

  const validateForm = () => {
    const missingFields = [];

    if (!formData.full_name) missingFields.push("full_name");
    if (!formData.country) missingFields.push("country");
    if (!formData.email_address) missingFields.push("email_address");
    if (!formData.phone_number) missingFields.push("phone_number");
    if (!formData.product_name) missingFields.push("product_name");
    if (!purchase_date) missingFields.push("purchase_date");
    if (!formData.purchase_place) missingFields.push("purchase_place");
    if (!termsAccepted) missingFields.push("terms");

    if (missingFields.length > 0) {
      toast.error(
        `Please fill in all required fields: ${missingFields.join(", ")}`
      );
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email_address)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    console.log("formData", formData);
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const loadingToast = toast.loading("Submitting...");
    try {
      const formPayload = new FormData();
      formPayload.append("full_name", formData?.full_name);
      formPayload.append("phone_number", formData?.phone_number);
      formPayload.append("email_address", formData?.email_address);
      formPayload.append("country", formData?.country);
      formPayload.append("product_name", formData?.product_name);
      formPayload.append(
        "purchase_date",
        purchase_date.toLocaleDateString("en-CA")
      );
      formPayload.append("purchase_place", formData?.purchase_place);
      if (formData.product_invoice) {
        formPayload.append("product_invoice", formData.product_invoice);
      }
      console.log("formPayload", formPayload);
      for (let pair of formPayload.entries()) {
        console.log(`${pair[0]}:`, pair[1]);
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEWSLETTER_URL}wpcf7/warranty/register`,
        {
          method: "POST",
          body: formPayload,
          headers: {
            Authorization: `Bearer ${session?.user?.token}`
          }
        }
      );
      // console.log("response", response);
      const data = await response.json();
      console.log("data", data);
      if (response.ok) {
        toast.update(loadingToast, {
          render: "Enquiry submitted successfully",
          type: "success",
          isLoading: false,
          autoClose: 3000
        });
        setMessage(data.message);
        setFormData({
          full_name: "",
          phone_number: "",
          email_address: "",
          country: "",
          product_name: "",
          purchase_place: "",
          product_invoice: null
        });
        setPurchaseDate(null);
        setTermsAccepted(false);
      } else {
        toast.update(loadingToast, {
          render: data.message || "Server error occurred",
          type: "error",
          isLoading: false,
          autoClose: 3000
        });
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Submission error:", error); // Log the full error
      toast.update(loadingToast, {
        render: `Error submitting form: ${error.message || "Please try again later"}`, // Show actual error
        type: "error",
        isLoading: false,
        autoClose: 3000
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <section>
        <div className="container">
          <div className={warrantystyles.warrntywrp}>
            <div className={warrantystyles.leftwrp_warrnty}>
              <LeftSupport />
            </div>
            <div className={warrantystyles.rightwrp_warrnty}>
              <h2>
                <AnimatedText text="Warranty Registration Form" />
              </h2>
              <p>
                Aludecor products are covered by industry leading warranties,
                offering confidence and peace of mind.
              </p>
              <h3>
                <AnimatedText text="Customer Information" />
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="formsection">
                  {/* Name Field */}
                  <div className="formbox">
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Name*"
                      value={formData.full_name}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Country Field */}
                  <div className="formbox">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option value="">Choose country*</option>
                      <option value="US">United States</option>
                      <option value="IN">India</option>
                      <option value="UK">United Kingdom</option>
                    </select>
                  </div>

                  {/* Email Field */}
                  <div className="formbox">
                    <input
                      type="email"
                      name="email_address"
                      placeholder="Email*"
                      value={formData.email_address}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="formbox">
                    <input
                      type="tel"
                      name="phone_number"
                      placeholder="Phone number*"
                      value={formData.phone_number}
                      onChange={handleChange}
                    />
                  </div>

                  <h3>Product Information</h3>

                  {/* Product Name */}
                  <div className="formbox">
                    <input
                      name="product_name"
                      type="text"
                      placeholder="Product Name*"
                      value={formData.product_name}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Purchase Date */}
                  <div className="formbox datebox">
                    <DatePicker
                      // selected="2025-06-13"
                      selected={purchase_date}
                      onChange={(date) => setPurchaseDate(date)}
                      // onChange={handleChange}
                      //  value=
                      placeholderText="Purchase Date*"
                      dateFormat="yyyy-MM-dd"
                    />
                  </div>

                  {/* Place of Purchase */}
                  <div className="formbox w100">
                    <input
                      name="purchase_place"
                      type="text"
                      placeholder="Place of Purchase*"
                      value={formData.purchase_place}
                      onChange={handleChange}
                    />
                  </div>

                  {/* File Upload */}
                  <div className="formbox w100">
                    <div className="upload">
                      <Image
                        width={50}
                        height={50}
                        src="/images/upload.svg"
                        alt="Upload"
                      />
                      <button type="button" className="uploadbtn">
                        {formData.product_invoice
                          ? formData.product_invoice.name
                          : "Upload invoice/receipt*"}
                      </button>
                      <input
                        className="uploadinput"
                        type="file"
                        name="product_invoice"
                        onChange={handleChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                        required
                      />
                    </div>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="checkboxfrm">
                    <label className="checkboxLabel">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        required
                      />
                      I accept the terms and conditions*
                      <span className="checkmark"></span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="formbox w100">
                    <button
                      className="common-btn purple"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      <label>
                        Submit Details{" "}
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
      <ToastContainer />
    </>
  );
}
