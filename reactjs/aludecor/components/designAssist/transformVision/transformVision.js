import AnimatedText from "@/components/Framemotion/framemotion";
import signupAreastyle from "@/components/fabricatorLanding/signupArea/signupArea.module.css";
import transformstyle from "@/components/designAssist/transformVision/transformVision.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function TransformVision({ formContentData }) {
  const allFormContentData = formContentData?.data?.content;
  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    phone_number: "",
    company: "",
    project_type: "all",
    project_file: null
  });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validateIndianPhoneNumber(phoneNumber) {
    // Remove all non-digit characters
    const cleaned = phoneNumber.replace(/\D/g, "");

    // Indian phone number regex (10 digits starting with 6-9)
    const indianPhoneRegex = /^[6-9]\d{9}$/;

    return indianPhoneRegex.test(cleaned);
  }

  function validateFirstName(firstName) {
    // Only letters (no numbers, spaces, or special characters)
    // Maximum 40 characters
    const nameRegex = /^[A-Za-z ]{1,40}$/;
    return (
      firstName.trim() !== "" && // Not empty
      nameRegex.test(firstName) // Only letters, 1-40 charsdataToSend
    );
  }
  const validateForm = () => {
    let isValid = true;
    if (!formData.full_name.trim()) {
      toast.error("First name is required", { autoClose: 5000 });
      isValid = false;
    } else if (!validateFirstName(formData.full_name)) {
      toast.error("First name must contain only letters", { autoClose: 5000 });
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
      toast.error("Please enter a valid phone number", {
        autoClose: 5000
      });
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    console.log("formData", formData);
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const loadingToast = toast.loading("Submitting...");
    try {
      // Create FormData object for file upload
      const dataToSend = new FormData();
      // Append all fields with verification
      dataToSend.append("full_name", formData.full_name);
      dataToSend.append("email_address", formData.email_address);
      dataToSend.append("phone_number", formData.phone_number);
      dataToSend.append("company", formData.company);
      dataToSend.append("project_type", formData.project_type);
      if (formData.project_file) {
        dataToSend.append("project_file", formData.project_file);
      }

      // Debug FormData contents
      // const formDataContents = {};
      // for (const [key, value] of dataToSend.entries()) {
      //   formDataContents[key] = value;
      // }
      // //console.log("Final FormData contents:", formDataContents);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEWSLETTER_URL}wpcf7/design-assist`,
        {
          method: "POST",
          body: dataToSend
        }
      );
      const data = await response.json();

      if (response.ok) {
        toast.update(loadingToast, {
          render: "Enquiry submitted successfully",
          type: "success",
          isLoading: false,
          autoClose: 3000
        });

        //console.log("data", data);
        setMessage(data.message);
        setFormData({
          full_name: "",
          email_address: "",
          phone_number: "",
          company: "",
          project_type: "all",
          project_file: null
        });
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
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  return (
    <section>
      <div className="container">
        <div className="topadding_top">
          <div className={`${signupAreastyle.sswraper} sswraper`}>
            <div className="sstextpart">
              <h2>
                <AnimatedText text={allFormContentData?.heading} />
              </h2>
              <p>{allFormContentData?.subheading}</p>

              {/* <Link href="#" className="common-btn">
                                <label>Get Started <Image width={34} height={16} src="/images/arrow-right.svg" alt="arrow-right" /></label>
                            </Link> */}
            </div>

            <div className="ssimagepart">
              <div className={`${transformstyle.clickform} formsection`}>
                <h3>Your Perfect Façade is Just a Click Away</h3>
                <div className={transformstyle.trustsec}>
                  <span className={transformstyle.trusttxt}>
                    Trusted by 10,000+ Architects
                  </span>
                  <Image
                    width={30}
                    height={30}
                    src="/images/tick_roundwhite.svg"
                    alt="Trusted"
                  />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="formbox">
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Full Name*"
                      value={formData.full_name}
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
                      placeholder="Phone*"
                      value={formData.phone_number}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="formbox">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company (optional)"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="formbox">
                    <select
                      name="project_type"
                      value={formData.project_type}
                      onChange={handleChange}
                    >
                      <option value="all">Project Type</option>
                      <option value="commercial">Commercial</option>
                      <option value="goverment">Goverment</option>
                      <option value="healthCare">HealthCare</option>
                      <option value="healthCare">Residencial</option>
                    </select>
                  </div>

                  <div className="formbox">
                    <div className="upload">
                      <Image
                        width={30}
                        height={30}
                        src="/images/upload_autocard.svg"
                        alt="Upload autocad"
                      />
                      <button className="uploadbtn">
                        {formData.project_file
                          ? formData.project_file.name
                          : "Upload autocad files / Images"}
                      </button>

                      <input
                        className="uploadinput"
                        type="file"
                        name="project_file"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <button className="common-btn purple" type="submit">
                    <label>
                      Get My Free 3D Design
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
