"use server";

import dbConnect from "@/config/dbConnect";
import Blog from "@/model/blog";

export async function addBlog(prevState, formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const date = formData.get("date");
  const image = formData.get("image");
  const slug = formData.get("slug");

  try {
    await dbConnect();
    await Blog.create({ title, description, date, image, slug });
    return { success: true, message: "Blog added successfully!" };
  } catch (error) {
    return { success: false, message: "Failed to add blog." };
  }
}
