import { getBlogs } from "@/lib/data";
import Link from "next/link";
import React from "react";

async function Page() {
  const posts = await getBlogs();

  return (
    <div className="container mx-auto p-4">
      {posts.map((post) => (
        <article
          className="p-4 border border-gray-300 rounded-md mb-4 shadow-sm"
          key={post._id}
        >
          <Link href={`/blog/${post.slug}`}>
            {/* <div className="flex gap-2 mb-2">
              <h2 className="font-semibold">User ID:</h2>
              <span>{post.author}</span>
            </div> */}
            <div className="flex gap-2 mb-2">
              <h2 className="font-semibold">Title:</h2>
              <span>{post.title}</span>
            </div>

            <div className="flex gap-2">
              <h2 className="font-semibold">Body:</h2>
              <span>{post.content}</span>
            </div>
            <div>
              <span>auteur</span>
              <span></span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}

export default Page;
