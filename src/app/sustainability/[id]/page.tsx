import React from "react";
import { getBlogsById } from "@/libs/actions/blogs.action";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

async function fetchBlog(id: string) {
  return await getBlogsById(id);
}

export default async function BlogPage({ params }: { params: { id: string } }) {
  const blog = await fetchBlog(params?.id);
  console.log(blog);

  if (!blog) {
    return <div className="text-center text-gray-500 text-lg">Blog not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <article>
        {/* Blog Title */}
        <h1 className="text-5xl font-extrabold text-[#AD8330] leading-snug mb-6">
          {blog.title}
        </h1>

        {/* Metadata Section */}
        <div className="flex items-center gap-3 text-sm text-gray-700 mb-8">
          <span className="bg-[#AD8330] text-white px-4 py-1 rounded-full text-sm font-medium">
            {blog.category.trim()}
          </span>
          <span className="text-[#AD8330] text-xl">•</span>
          <span className="text-gray-600 text-base">
            {new Date(blog.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Hero Image */}
        {blog.imageUrl && (
          <div className="w-full h-[500px] overflow-hidden rounded-lg shadow-md mb-10">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Markdown Content */}
        <div className="prose prose-lg prose-gray leading-8 tracking-wide">
          <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
            {blog.content}
          </ReactMarkdown>
        </div>
      </article>

      {/* Footer with Divider */}
      <div className="border-t mt-12 pt-6 text-gray-600 text-base text-center">
        Published on {new Date(blog.date).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </div>
    </div>
  );
}
