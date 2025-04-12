"use client";

import SubmitButton from "@/app/(client)/components/forms/SubmitButton";
import { useState } from "react";
import { useFormState } from "react-dom";
import { addBlog } from "../../actions/AddBlog";

const CreatePost = () => {
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
      <div className="py-[150px]">
        <form
          action={formAction}
          onSubmit={(e) => {
            const form = e.target;
            const formData = new FormData(form);
            const title = formData.get("title");
            const description = formData.get("description");
            const slug = formData.get("slug");
            const date = formData.get("date");
            const image = formData.get("image");

            console.log("Submitted Form Data:", {
              title,
              description,
              slug,
              date,
              image,
            });
          }}
          className="max-w-md mx-auto space-y-4 p-4 border rounded "
        >
          <input
            name="title"
            type="text"
            placeholder="Title"
            required
            className="w-full p-2 border rounded text-[#000]"
          />
          <textarea
            name="description"
            placeholder="Description"
            required
            className="w-full p-2 border rounded text-[#000]"
          />
          <input
            name="slug"
            type="text"
            placeholder="slug"
            required
            className="w-full p-2 border rounded text-[#000]"
          />
          <input
            name="date"
            type="date"
            required
            className="w-full p-2 border rounded text-[#000]"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
          {imagePreview && (
            <>
              <input type="hidden" name="image" value={imagePreview} />
              <img src={imagePreview} alt="Preview" className="w-full h-auto" />
            </>
          )}

          <SubmitButton />
          {state.message && (
            <p className={state.success ? "text-green-600" : "text-red-600"}>
              {state.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default CreatePost;
