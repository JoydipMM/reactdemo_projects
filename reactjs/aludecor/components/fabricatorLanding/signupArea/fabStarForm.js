import signupAreastyle from "@/components/fabricatorLanding/signupArea/signupArea.module.css";
import { updatedApiFetcher } from "@/helper/updatedAPIFetcher";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
export default function FabStarForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    password: "",
    cnf_password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.password !== formData.cnf_password) {
      toast.error("Passwords don't match");
      return;
    }

    try {
      // Create FormData object
      const formPayload = new FormData();
      formPayload.append("first_name", formData.first_name);
      formPayload.append("last_name", formData.last_name);
      formPayload.append("email_address", formData.email_address);
      formPayload.append("password", formData.password);
      formPayload.append("cnf_password", formData.cnf_password);

      // Make API call
      const result = await updatedApiFetcher(
        `${process.env.NEXT_PUBLIC_NEWSLETTER_URL}wpcf7/fabstar/signup`, // Adjust your endpoint
        {
          method: "POST",
          data: formPayload // Convert to regular object
        }
      );
      console.log("result", result);
      toast.success("Account created successfully!");
      // Reset form after successful submission
      setFormData({
        first_name: "",
        last_name: "",
        email_address: "",
        password: "",
        cnf_password: ""
      });
    } catch (error) {
      console.error("Signup error:", error);
      // Error is already handled by apiFetcher
    }
  };
  return (
    <div className="ssimagepart">
      <form
        onSubmit={handleSubmit}
        className={`${signupAreastyle.formarea} formsection`}
      >
        <h3>Sign Up for Fabstar</h3>
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
            type="password"
            name="password"
            placeholder="Password*"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formbox">
          <input
            type="password"
            name="cnf_password"
            placeholder="Confirm Password*"
            value={formData.cnf_password}
            onChange={handleChange}
            required
          />
        </div>

        <button className="common-btn white" type="submit">
          <label>
            Create Account{" "}
            <Image
              width={34}
              height={16}
              src="/images/arrow-right.svg"
              alt="right"
            />
          </label>
        </button>
      </form>
    </div>
  );
}
