import { addPost } from "@/lib/action";
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
            <div className="flex gap-2 mb-2">
              <h2 className="font-semibold">Title:</h2>
              <span>{post.title}</span>
            </div>

            <div className="flex gap-2">
              <h2 className="font-semibold">Body:</h2>
              <span>{post.content}</span>
            </div>
          </Link>
        </article>
      ))}
      <div>
        <form action={addPost}>
          <input type="text" placeholder="author" name="author" />
          <input type="text" placeholder="title" name="title" />
          {/* <input type="text" placeholder="slug" name="slug" /> */}
          <textarea
            placeholder="enter your content here"
            name="content"
          ></textarea>
          <button type="submit">envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default Page;
