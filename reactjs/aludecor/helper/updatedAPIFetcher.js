import { toast } from "react-toastify";

export const updatedApiFetcher = async (
  url,
  { method = "POST", data = null, token = null, isBearer = true } = {}
) => {
  try {
    // Initialize headers
    const headers = {};

    // Add Authorization header if token exists
    if (token) {
      headers.Authorization = isBearer ? `Bearer ${token}` : token;
    }

    // Determine the body and content type
    let body;
    if (data instanceof FormData) {
      // For FormData, let the browser set the content-type with boundary
      body = data;
    } else if (data) {
      // For regular JSON data
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(data);
    } else {
      body = null;
    }

    const response = await fetch(url, {
      method,
      headers,
      body
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.message || "Request failed";
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};
