import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/Framemotion/framemotion";
import contactstyles from "../contact/contact.module.css";
import { toast } from "react-toastify";

export default function Contact({ discussData }) {
  const allData = discussData?.data?.content;
  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    phone_number: "",
    country: "",
    inquiry_type: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        `${process.env.NEXT_PUBLIC_NEWSLETTER_URL}wpcf7/inquiry`,
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
        email_address: "",
        phone_number: "",
        country: "",
        inquiry_type: ""
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
      <section className={`${contactstyles.projectcontact} topadding_bottom`}>
        <div className="container">
          <div className={contactstyles.projectcontact_row}>
            <div className="left">
              <h2>
                <AnimatedText text={allData?.heading} />
              </h2>

              <div dangerouslySetInnerHTML={{ __html: allData?.content }}></div>
            </div>
            <div className="right">
              <form onSubmit={handleSubmit} className="inquiry-form">
                <div className="form-container">
                  <div className="form-row">
                    <input
                      name="full_name"
                      placeholder="Full Name*"
                      value={formData.full_name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-row">
                    <input
                      type="email"
                      name="email_address"
                      placeholder="Email*"
                      value={formData.email_address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-row">
                    <input
                      type="tel"
                      name="phone_number"
                      placeholder="Phone Number"
                      value={formData.phone_number}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-row">
                    <input
                      name="country"
                      placeholder="Country*"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-row">
                    <select
                      name="inquiry_type"
                      value={formData.inquiry_type}
                      onChange={handleChange}
                    >
                      <option value="">Inquiry Type</option>
                      <option value="Information">Information</option>
                      <option value="Job Information">Job Information</option>
                    </select>
                  </div>
                </div>

                <button
                  className="common-btn white"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <label>
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
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
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
