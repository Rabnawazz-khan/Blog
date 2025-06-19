// app/blogs/page.tsx

'use client'
import Link from "next/link";
import { demiData } from "@/data/DemiDeta"; // Make sure this path is correct

const BlogsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Blogs</h1>
      <ul className="space-y-4">
        {demiData.map((blog) => (
          <li key={blog.id} className="border p-4 rounded shadow">
            <Link href={`/blogs/${blog.id}`}>
              <h2 className="text-xl font-semibold">{blog.title}</h2>
            </Link>
            <p>Author: {blog.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogsPage;
