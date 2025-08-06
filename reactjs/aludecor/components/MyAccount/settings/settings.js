import LeftNav from "@/components/MyAccount/leftnav/leftnav";
import warrantystyles from "@/components/warranty/warranty.module.css";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // optional: icon library
import AnimatedText from "@/components/Framemotion/framemotion";
import settingstyles from "@/components/MyAccount/settings/settings.module.css";
import Modal from "@/components/Modal/Modal";
import { apiFetcher } from "@/helper/apiFetcher";
import { toast, ToastContainer } from "react-toastify";
import { signOut } from "next-auth/react";

export default function Settingsarea({ session }) {
  const [currentPassword, setCurrentPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [isSecondtModalOpen, setIsSecondModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmText, setConfirmText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
    confirm_password: ""
  });
  const sessionToken = session?.user?.token;

  //form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleCancel = () => {
    setPassword("");
    setConfirmText("");
    setError("");
    setIsSecondModalOpen(false);
  };

  const handlePopUpSubmit = async () => {
    console.log("sessionToken", sessionToken);
    if (!password || !confirmText) {
      toast.error("Please fill in all fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      return;
    }

    if (confirmText !== "DELETE") {
      toast.error('Confirmation text must be "DELETE"', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const result = await apiFetcher(
        `${process.env.NEXT_PUBLIC_IMAGE_URL}my-account/delete-account`,
        {
          method: "DELETE",
          data: {
            password: password,
            confirm_text: confirmText
          },
          token: sessionToken
        }
      );
      toast.success("Account deleted successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      await signOut({ redirect: true, callbackUrl: "/login" });
    } catch (err) {
      toast.error(err.message || "Something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.new_password !== formData.confirm_password) {
      toast.error("Passwords don't match");
      return;
    }

    if (formData.current_password === formData.new_password) {
      toast.error("New password must be different");
      return;
    }

    // Use the global API mutation hook

    // Call the API directly using the global mutation hook
    try {
      const result = await apiFetcher(
        `${process.env.NEXT_PUBLIC_IMAGE_URL}my-account/change-password`,
        {
          method: "POST",
          data: {
            current_password: formData.current_password,
            new_password: formData.new_password,
            confirm_password: formData.confirm_password
          },
          token: sessionToken
        }
      );

      // Show success toast
      toast.success("Password changed successfully!");
      // Reset form data
      setFormData({
        current_password: "",
        new_password: "",
        confirm_password: ""
      });

      await signOut({ redirect: true, callbackUrl: "/login" });
    } catch (error) {
      console.error("Error changing password:", error);
      // Error toast is already handled by apiFetcher
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <div
            className={`${warrantystyles.warrntywrp} ${settingstyles.settingwrp}`}
          >
            <div className={warrantystyles.leftwrp_warrnty}>
              <LeftNav />
            </div>
            <div className={warrantystyles.rightwrp_warrnty}>
              <h3>
                <AnimatedText text="Settings" />
              </h3>
              <div className="divider"></div>
              <form onSubmit={handleSubmit}>
                <div className={`${settingstyles.settingwrps} formsection`}>
                  <div className="formbox passwordinput">
                    <input
                      type={currentPassword ? "text" : "password"}
                      placeholder="Current password"
                      name="current_password"
                      value={formData.current_password}
                      onChange={handleChange}
                      required
                      minLength="8"
                    />
                    <button
                      type="button"
                      onClick={() => setCurrentPassword(!currentPassword)}
                    >
                      {currentPassword ? (
                        <Eye size={20} />
                      ) : (
                        <EyeOff size={20} />
                      )}
                    </button>
                  </div>

                  <div className="formbox passwordinput">
                    <input
                      type={newPassword ? "text" : "password"}
                      placeholder="New password"
                      name="new_password"
                      value={formData.new_password}
                      onChange={handleChange}
                      required
                      minLength="8"
                    />
                    <button
                      type="button"
                      onClick={() => setNewPassword(!newPassword)}
                    >
                      {newPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                    </button>
                  </div>
                  <div className="formbox passwordinput">
                    <input
                      type={confirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      name="confirm_password"
                      value={formData.confirm_password}
                      onChange={handleChange}
                      required
                      minLength="8"
                    />
                    <button
                      type="button"
                      onClick={() => setConfirmPassword(!confirmPassword)}
                    >
                      {confirmPassword ? (
                        <Eye size={20} />
                      ) : (
                        <EyeOff size={20} />
                      )}
                    </button>
                  </div>

                  <div className="formbox w100">
                    <button className="common-btn purple" type="submit">
                      {" "}
                      <label> Save </label>
                    </button>
                  </div>
                </div>
              </form>

              <ul className={settingstyles.listing}>
                <li>
                  <button onClick={() => setIsSecondModalOpen(true)}>
                    Delete Account
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Modal area */}

        {/* <Modal
          id={`${settingstyles.formmodal}`}
          isOpen={isFirstModalOpen}
          // onClose={() => setIsFirstModalOpen(false)}
          title="First Modal"
        >
          <h2>Log Out</h2>
          <p>
            You won't receive messages and notifications ffor your ads sure
            until you log in again. Are you sure you want to log out?
          </p>
          <div className="btnwrp">
            <Link href="#" className="common-btn purple">
              <label> Delete </label>
            </Link>
            <Link href="#" className="common-btn">
              <label> Cancel </label>
            </Link>
          </div>
        </Modal> */}

        {/* if (isSecondModalOpen) { */}
        <Modal
          id={`${settingstyles.formmodal}`}
          isOpen={isSecondtModalOpen}
          // onClose={() => setIsFirstModalOpen(false)}
          title="Second Modal"
        >
          <h2>Delete account</h2>
          <p>
            You are about to permanently delete your account. Are you sure about
            this?
          </p>
          <div className="formbox passwordinput formsection formsection2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <div className="formbox passwordinput formsection formsection2">
            <label htmlFor="confirmText">
              Type <strong>DELETE</strong> to confirm
            </label>
            <input
              type="text"
              id="confirmText"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder="Type DELETE"
            />
          </div>
          <div className="btnwrp">
            <button
              className="common-btn purple"
              onClick={handlePopUpSubmit}
              disabled={isLoading}
            >
              <label> {isLoading ? "Processing..." : "Delete"} </label>
            </button>
            <button
              className="common-btn"
              onClick={handleCancel}
              disabled={isLoading}
            >
              <label>Cancel</label>
            </button>
          </div>
        </Modal>

        {/* Modal area */}
      </section>
      <ToastContainer />
    </>
  );
}
