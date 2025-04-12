import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    date: { type: String },
    slug: { type: String },

    cover_image: { type: String },
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
export default Blog;
