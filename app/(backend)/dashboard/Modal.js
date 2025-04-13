"use client";

import { useRouter } from "next/navigation";

export default function Modal({ blogId }) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/blogs/${blogId}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete");

      router.push("/dashboard/posts");
      router.refresh();
    } catch (err) {
      console.error("Failed to delete post:", err);
    }
  };

  const handleCancel = () => {
    router.replace("/dashboard/posts");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-96 text-center">
        <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
        <p className="mb-4 text-gray-600">This action cannot be undone.</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Yes, Delete
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
