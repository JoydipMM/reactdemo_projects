"use client";
import { useState } from "react";
import shippingContentstyles from "@/components/shippingAddress/shippingAddress.module.css";
import AnimatedText from "../Framemotion/framemotion";
import { useRouter } from "next/router";
import ShippingProductDetails from "./shippingProductDetails";
import { ToastContainer, toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { indiaStates } from "@/helper/staticData";

export default function Shippingaddress() {
  const { data: session } = useSession();
  const router = useRouter();
  const { query } = router;
  const product_id = query.product_Id ?? ""; // fallback product_id

  const countries = [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "GB", name: "United Kingdom" },
    { code: "AU", name: "Australia" },
    { code: "DE", name: "Germany" },
    { code: "FR", name: "France" },
    { code: "IN", name: "India" },
    { code: "JP", name: "Japan" },
    { code: "CN", name: "China" },
    { code: "BR", name: "Brazil" }
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    billing: {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: ""
    },
    agreeToPolicy: false,
    is_sample: true
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (["street", "city", "zip", "country", "state"].includes(name)) {
      setFormData({
        ...formData,
        billing: {
          ...formData.billing,
          [name]: value
        }
      });
    } else if (name === "agreeToPolicy") {
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
    if (!formData.firstName || !formData.lastName) {
      toast.error("First and last name are required");
      return false;
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Valid email is required");
      return false;
    }
    if (!formData.phone || formData.phone.length < 7) {
      toast.error("Valid phone number is required");
      return false;
    }
    if (
      !formData.billing.street ||
      !formData.billing.city ||
      !formData.billing.zip ||
      !formData.billing.country
    ) {
      toast.error("Complete billing address is required");
      return false;
    }
    if (!formData.agreeToPolicy) {
      toast.error("You must agree to the privacy policy");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    toast.info("Loading....");
    const requestData = {
      product_id: parseInt(product_id),
      quantity: 1,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      is_sample: true,
      billing: {
        address_1: formData.billing.street,
        city: formData.billing.city,
        state: formData.billing.state, // Add field in form if dynamic
        postcode: formData.billing.zip,
        country: formData.billing.country
      }
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_IMAGE_URL}order/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.token}`
          },
          body: JSON.stringify(requestData)
        }
      );

      if (!response.ok) {
        const errorMsg =
          data?.message || `Failed with status ${response.status}`;
        toast.error(`Error: ${errorMsg}`);
        return;
      }
      const data = await response.json();
      toast.success("Order placed successfully!");
      console.log("API Success Response:", data);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        billing: {
          street: "",
          city: "",
          state: "",
          zip: "",
          country: ""
        },
        agreeToPolicy: false,
        is_sample: true
      });
      // router.push('/thank-you'); // optional redirect
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section className="container">
        <div className="commonpadding">
          <form onSubmit={handleSubmit}>
            <div className={shippingContentstyles.shippwrap}>
              <div className={shippingContentstyles.shipplft}>
                <h2>
                  <span>Where may we send your samples?</span>
                  <AnimatedText text="Please enter your shipping address" />
                </h2>
                <h3>
                  <AnimatedText text="Personal Data" />
                </h3>

                <div className="formsection">
                  <div className="formbox">
                    <input
                      name="firstName"
                      placeholder="First name*"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="formbox">
                    <input
                      name="lastName"
                      placeholder="Last name*"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="formbox">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="formbox">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number*"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <h3>
                  <AnimatedText text="Address" />
                </h3>

                <div className="formsection">
                  <div className="formbox">
                    <input
                      name="street"
                      placeholder="Address*"
                      value={formData.billing.street}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="formbox">
                    <input
                      name="city"
                      placeholder="City*"
                      value={formData.billing.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="formbox">
                    <select
                      name="country"
                      value={formData.billing.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Country*</option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="formbox">
                    <select
                      name="state"
                      value={formData.billing.state}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select State*</option>
                      {indiaStates.map((state) => (
                        <option key={state.code} value={state.code}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="formbox">
                    <input
                      name="zip"
                      placeholder="ZIP Code*"
                      value={formData.billing.zip}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="checkboxLabel">
                    <input
                      type="checkbox"
                      name="agreeToPolicy"
                      checked={formData.agreeToPolicy}
                      onChange={handleChange}
                      required
                    />
                    I have read and agreed to the privacy policy *
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>

              <ShippingProductDetails />
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
