'use client'
import { demiData } from "@/data/DemiDeta";
import React from "react";

const BlogDetailedPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const detailBlog = demiData.find(
    (item: any) => item.id === parseInt(id)
  );

  if (!detailBlog) {
    return <div className="p-4">Blog not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">{detailBlog.title}</h1>
      <p className="mb-4">{detailBlog.content}</p>
      <p className="text-gray-600">Author: {detailBlog.author}</p>
    </div>
  );
};

export default BlogDetailedPage;
