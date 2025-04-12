"use client";

import { useState } from "react";
import { useFormState } from "react-dom";

import { addBlog } from "@/app/(backend)/actions/AddBlog";
import Banner from "@/app/(client)/components/banner/Banner";

export default function BlogForm() {
  const [state, formAction] = useFormState(addBlog, {
    message: "",
    success: false,
  });
  const [imagePreview, setImagePreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <section>
      <Banner />
    </section>
  );
}
