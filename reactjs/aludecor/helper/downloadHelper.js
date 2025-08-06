import { toast } from "react-toastify";
import Link from "next/link";

// export function handleDownload() {
//   toast.error("Download failed: Please login to download");
// }

export const handleDownload = (path) => {
  // console.log("calledd!");
  toast.info(
    <div>
      You need to login to Download the file.
      <Link
        href={`/login?callbackUrl=${encodeURIComponent(path)}`}
        style={{
          color: "#000",
          textDecoration: "underline",
          marginLeft: "5px"
        }}
      >
        Click here to login
      </Link>
    </div>,
    {
      position: "top-right",
      autoClose: 10000,
      closeButton: true
    }
  );
};

export function isDataEmpty(data) {
  if (!data) return true;

  // Handle different data structures
  if (Array.isArray(data)) {
    return (
      data.length === 0 ||
      (data.length === 1 && Array.isArray(data[0]) && data[0].length === 0)
    );
  }

  if (typeof data === "object") {
    return Object.values(data).every(
      (value) => isDataEmpty(value) // Recursive check for nested objects
    );
  }

  return false;
}

export async function getDownloadHandler(dwnTab, session) {
  console.log("dwnTab", dwnTab);
  toast.info("Loading...");
  if (
    !dwnTab.file_link &&
    !dwnTab.url &&
    !dwnTab.button_link &&
    !dwnTab.download_link
  ) {
    toast.error("No file link available for download");
    return { error: "No file link provided", shouldDownload: false };
  }
  // Construct the request body
  try {
    const requestBody = {
      user_id: session?.user?.id,
      user_email: session?.user?.email,
      downloads: [
        {
          file_name: dwnTab.heading || dwnTab.title || dwnTab.button_name,
          file_url:
            dwnTab.file_link ||
            dwnTab.url ||
            dwnTab.button_link ||
            dwnTab.download_link
        }
      ]
    };

    // Make the API call
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEWSLETTER_URL}webhook/logs/downloads`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.token}` // Assuming token is in session
        },
        body: JSON.stringify(requestBody)
      }
    );

    const data = await response.json();
    console.log("data", data);
    if (data.data.status == 403) {
      toast.warning("Download verification failed");
      return { data, shouldDownload: false };
    }

    return { data, shouldDownload: true };
  } catch (error) {
    console.error("Error tracking download:", error);
    toast.error(`Download failed: ${error.message || "Network error"}`);
    return { error: error.message, shouldDownload: false };
  }
}
