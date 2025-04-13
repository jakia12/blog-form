"use server";

import dbConnect from "@/config/dbConnect";
import Blog from "@/model/blog";
import { revalidatePath } from "next/cache";

export async function addBlog(prevState, formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const date = formData.get("date");
  const image = formData.get("image");
  const slug = formData.get("slug");

  try {
    await dbConnect();

    const blog = new Blog({
      title,
      description,
      date,
      image,
      slug,
    });

    await blog.save();

    revalidatePath("/allBlog");
    return { success: true, message: "Blog added successfully!" };
  } catch (error) {
    console.error("Blog save error:", error);
    return { success: false, message: "Failed to add blog." };
  }
}
