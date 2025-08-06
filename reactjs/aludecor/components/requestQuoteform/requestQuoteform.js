import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import { useState } from "react";
import requestqstyle from "@/components/requestQuoteform/requestQuoteform.module.css";

export default function Requestquoteform({ requestFormData, onSuccess }) {
  // console.log("requestFormData", requestFormData);
  const allFormData = requestFormData?.data?.content;
  const allFormAttribute = allFormData?.attributes;
  const material = allFormAttribute?.["material-grade"];
  const series = allFormAttribute?.["product-series"];
  const shade_code = allFormAttribute?.["shade-code"];
  //console.log("shade_code", shade_code);

  // console.log("allFormAttribute", allFormAttribute);
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email_address: "",
    shade_code: shade_code.values.join(", "),
    series: series.values.join(", "),
    material: material.values.join(", "),
    product_name: allFormData?.name,
    message: ""
  });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleSubmitData = async (e) => {
    //console.log("formData", formData);
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setSubmitSuccess(true);
    const submitToast = toast.loading("Submitting...");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEWSLETTER_URL}wpcf7/product-details-quote`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );
      const data = await response.json();
      //console.log("data", data);
      if (response.ok) {
        toast.update(submitToast, {
          render: "Data Submitted Successfully...",
          type: "success",
          isLoading: false,
          autoClose: 3000
        });
        onSuccess?.(); // Close modal after toast
        //console.log("data", data);
        setMessage(data.message);
        setFormData({
          full_name: "",
          phone_number: "",
          email_address: "",
          shade_code: shade_code.values.join(", "),
          series: series.values.join(", "),
          material: material.values.join(", "),
          product_name: allFormData?.name,
          message: ""
        });
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      //console.error("Error submitting form:", error);
      toast.update(submitToast, {
        render: "Error submitting form:",
        type: "error",
        isLoading: false,
        autoClose: 3000
      });
    } finally {
      setIsSubmitting(false);
    }

    // toast.update(loadingToast, {
    //   render: "Data Submitted Successfully...",
    //   type: "success",
    //   isLoading: false,
    //   autoClose: 3000
    // });
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
  function validateIndianPhoneNumber(phoneNumber) {
    // Remove all non-digit characters
    const cleaned = phoneNumber.replace(/\D/g, "");

    // Indian phone number regex (10 digits starting with 6-9)
    const indianPhoneRegex = /^[6-9]\d{9}$/;

    return indianPhoneRegex.test(cleaned);
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
    // if (!formData.last_name.trim()) {
    //   toast.error("Last name is required", { autoClose: 3000 });
    //   isValid = false;
    // }
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
    return isValid;
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="modalTitle">Enquiry</div>
      <form onSubmit={handleSubmitData}>
        <div className="formsection">
          <div className="formbox">
            <label>Full Name*</label>
            <input
              type="input"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formbox">
            <label>Email*</label>
            <input
              type="email"
              name="email_address"
              value={formData.email_address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formbox">
            <label>Phone*</label>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formbox">
            <label>Series</label>
            <input
              type="text"
              name="shadeSeries"
              placeholder=""
              value={formData.series}
              readOnly
            />
          </div>
          <div className="formbox">
            <label>Material / Grade</label>
            <input
              type="text"
              name="shadeMaterial"
              placeholder=""
              value={formData.material}
              readOnly
            />
          </div>
          <div className="formbox">
            <label>Name</label>
            <input
              type="text"
              name="shadeName"
              placeholder=""
              value={formData.product_name}
              readOnly
            />
          </div>
          <div className="formbox w100">
            <label>Comment</label>
            <textarea name="message" placeholder="" onChange={handleChange} />
          </div>
        </div>
        <button className="common-btn purple" type="submit">
          {" "}
          <label>
            {" "}
            Submit{" "}
            <Image
              width={34}
              height={16}
              src="/images/arrow-right.svg"
              alt=""
            />
          </label>
        </button>
      </form>
    </>
  );
}
