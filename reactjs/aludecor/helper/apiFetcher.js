/**
 * A globally reusable fetch function
 * Handles: token (Bearer / non-Bearer), method, body
 */

import { toast } from "react-toastify";

export const apiFetcher = async (
  url,
  { method = "POST", data = null, token = null, isBearer = true } = {}
) => {
  const headers = {
    "Content-Type": "application/json",
    ...(token && {
      Authorization: isBearer ? `Bearer ${token}` : token
    })
  };

  const response = await fetch(url, {
    method,
    headers,
    body: data ? JSON.stringify(data) : null
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage = errorData.message || "Request failed";

    toast.error(errorMessage);
    return;
  }

  return await response.json();
};
