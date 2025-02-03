import PostUser from "@/components/postUser/PostUser";
import { getBlog } from "@/lib/data";
import Link from "next/link";
import React from "react";

async function page({ params }) {
  const { slug } = await params; // Destructure `slug` from params
  const post = await getBlog(slug);

  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        <p>Failed to load post data.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        {post.content}
      </p>
      <Link href={`/users/${post.author}`}>
        <span>Auteur</span>
        <PostUser _id={post.author} />
      </Link>
    </div>
  );
}

export default page;
