import signupAreastyle from "@/components/fabricatorLanding/signupArea/signupArea.module.css";
import { updatedApiFetcher } from "@/helper/updatedAPIFetcher";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { indiaStates } from "./staticData";
import { apiFetcher } from "./apiFetcher";
export default function JoiningForm({ type = "channel_partners" }) {
  useEffect(() => {
    if (
      type &&
      ["specifiers", "fabricators", "channel_partners"].includes(type)
    ) {
      setFormData((prev) => ({
        ...prev,
        user_role: type
      }));
    }
  }, [type]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    user_role: type, // Default value
    first_name: "",
    last_name: "",
    user_phone: "",
    gstin_number: "",
    address: {
      city: "",
      state: ""
    },
    acceptedTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (["city", "state"].includes(name)) {
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [name]: value
        }
      });
    } else if (name === "acceptedTerms") {
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validateForm = () => {
    if (!formData.username || !formData.username.includes("@")) {
      toast.error("Please enter a valid email address");
      return false;
    }

    if (!formData.password || formData.password.length < 2) {
      toast.error("Password must be at least 2 characters");
      return false;
    }

    if (!formData.first_name || formData.first_name.trim().length < 1) {
      toast.error("Please enter your Full name");
      return false;
    }

    if (!formData.user_phone || !/^\d{10}$/.test(formData.user_phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return false;
    }

    if (!formData.gstin_number || formData.gstin_number.length < 15) {
      toast.error("Please enter a valid 15-digit GSTIN number");
      return false;
    }
    if (!formData.address.state) {
      toast.error("Please select your state");
      return false;
    }

    // City validation
    if (!formData.address.city) {
      toast.error("Please select your city");
      return false;
    }

    // Terms acceptance validation
    if (!formData.acceptedTerms) {
      toast.error("You must accept the terms and conditions");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    toast.info("Loading....");
    try {
      // Create FormData object
      const apiData = {
        username: formData.username,
        password: formData.password,
        user_role: formData.user_role,
        first_name: formData.first_name,
        last_name: formData.last_name,
        user_phone: formData.user_phone,
        gstin_number: formData.gstin_number,
        address: {
          city: formData.address.city,
          state: formData.address.state
        }
      };

      // Make API call
      const response = await fetch("/api/proxy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apiData)
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Registration successful!");
        // Reset form
        setFormData({
          username: "",
          password: "",
          user_role: type,
          first_name: "",
          last_name: "",
          user_phone: "",
          gstin_number: "",
          address: {
            city: "",
            state: ""
          },
          acceptedTerms: false
        });
      } else {
        toast.error(`${data.message}`);
      }
    } catch (error) {
      console.error("Registration failed:", error);
      // Error is already handled by apiFetcher
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="ssimagepart">
      <div className={`${signupAreastyle.formarea} formsection`}>
        <h3>
          Become a {type == "specifiers" ? "specifiers" : "Channel Partner"}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="formbox">
            <input
              type="text"
              name="first_name"
              placeholder="Full Name*"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formbox">
            <input
              type="email"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Email*"
              required
            />
          </div>
          <div className="formbox">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password*"
              required
              minLength={2}
            />
          </div>
          <div className="formbox">
            <input
              type="tel"
              name="user_phone"
              value={formData.user_phone}
              onChange={handleChange}
              pattern="\d{10}"
              title="10-digit phone number"
              placeholder="Phone Number*"
              required
            />
          </div>

          <div className="formbox">
            <select
              name="state"
              value={formData.address.state}
              onChange={handleChange}
              required
            >
              <option value="">State*</option>
              {indiaStates.map((state) => (
                <option
                  key={state.code}
                  value={state.code}
                  style={{ color: "black" }}
                >
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div className="formbox">
            <select
              name="city"
              value={formData.address.city}
              onChange={handleChange}
              required
              disabled={!formData.address.state}
            >
              <option value="">City</option>
              <option value={"kolkata"} style={{ color: "black" }}>
                Kolkata
              </option>
            </select>
          </div>
          <div className="formbox">
            <input
              type="text"
              name="gstin_number"
              value={formData.gstin_number}
              onChange={handleChange}
              placeholder="GSTIN Number*"
              required
            />
          </div>

          <div className="checkboxfrm">
            <label className="checkboxLabel">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptedTerms"
                checked={formData.acceptedTerms}
                onChange={handleChange}
                required
              />
              I agree to be contacted by Aludecor for
              {type == "specifiers" ? " specifiers" : " dealership"}{" "}
              opportunities.
              <span className="checkmark"></span>
            </label>
          </div>

          <button
            className="common-btn white"
            type="submit"
            disabled={isSubmitting}
          >
            <label>
              {" "}
              Become a {type == "specifiers" ? "specifiers" : "Dealer"} Now
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
  );
}
