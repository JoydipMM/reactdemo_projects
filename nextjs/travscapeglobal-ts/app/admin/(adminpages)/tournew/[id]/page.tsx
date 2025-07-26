"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/firebase/firebaseSetup";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    thumbimage: "",
  });
  const [slugtitle, setSlug] = useState<string>("");
  const [thumbImage, setThumbImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const TOAST_SUCCESS_ID = "tour-fetch-toast";
  const TOAST_ERROR_ID = "tour-error-fetch-toast";

  // Fetch tour data by ID
  const getTourById = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/demoapi/${id}`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("fetch error");
      return res.json();
    } catch (error) {
      console.error(error);
    }
  };

  // Load tour data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      const result = await getTourById(params.id);
      if (result?.tour) {
        setFormData({
          title: result.tour.title,
          slug: result.tour.slug,
          description: result.tour.description,
          thumbimage: result.tour.thumbimage,
        });
        setThumbImage(result.tour.thumbimage); 
      }
    };
    fetchData();
  }, [params.id]);

  // Handle form field change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const imageRef = ref(storage, `uploads/${thumbImage}`);
    await uploadBytes(imageRef, formData.thumbimage);
    const thumbURL = await getDownloadURL(imageRef);
    console.log("firebase Image URL ---- ", thumbURL);

    setFormData((prev) => ({
      ...prev,
      thumbimage:thumbURL,
    }));

    console.log("Submitted Data:", formData);
    // You can call PUT API here to update the tour

    try {
      const res = await fetch(`http://localhost:3000/api/demoapi/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title:formData.title, slug:formData.slug, description:formData.description, thumbimage:thumbURL }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      //router.push("/");
    } catch (error) {
      console.log(error);
    }
  };




useEffect(() => {
  if (formData.title) {
    const generatedSlug = formData.title
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '');

    setSlug(generatedSlug);

    // ✅ Update slug inside formData
    setFormData((prev) => ({
      ...prev,
      slug: generatedSlug,
    }));
  } else {
    setSlug("");
    setFormData((prev) => ({
      ...prev,
      slug: "",
    }));
  }
}, [formData.title]);

  return (
    <div>
      <h2>Edit Tour</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Slug</label>
          <input type="text" value={slugtitle} disabled={true} />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>Image</label>
          

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={
            (e)=>{ 
                e.preventDefault(); 
                const file = e.target.files?.[0];
                if (file) {
                const imageUrl = URL.createObjectURL(file);
                setThumbImage(imageUrl); // This is a string

                setFormData((prev) => ({
                  ...prev,
                  thumbImage: file,
                }));
                }
                //handleChange('thumbImage', file);
            }
            }
            />






          {thumbImage && (
            <>
            <div>
              <Image src={thumbImage} alt="" width={70} height={70} />
            </div>
            </>
          )}
        </div>
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}
