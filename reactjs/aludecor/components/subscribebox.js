import { useRef, useState } from "react";

const SubscribeForm = () => {
  const emailInputRef = useRef();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const registrationHandler = async (e) => {
    //console.log("trigegred");
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    setIsLoading(true); // Set loading to true when API call starts
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: enteredEmail })
      });
      const data = await response.json();
      //console.log("data", data);
      if (response.ok) {
        // console.log(data);
        //  setMessage("✅ Subscription successful!");
        setMessage(data.message);
        emailInputRef.current.value = "";
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("❌ Network error. Try again.");
    } finally {
      setIsLoading(false); // Set loading to false when API call completes
    }
  };

  return (
    <div>
      <form onSubmit={registrationHandler}>
        <input
          type="email"
          placeholder="Enter your email"
          ref={emailInputRef}
          required
        />
        <button
          type="submit"
          className="common-btn"
          disabled={isLoading} // Disable button during loading
        >
          <label>{isLoading ? "loading" : "Subscribe"}</label>
          {/* Show different text based on loading state */}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SubscribeForm;
