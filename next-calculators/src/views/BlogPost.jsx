"use client";

import Link from "next/link";
import { marked } from "marked";

export default function BlogPost({ postData }) {
  const htmlContent = marked.parse(postData.content);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 min-h-screen text-calc-darkGray">
      <div className="mb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm text-calc-green hover:text-calc-green/80 transition-colors mb-6"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Blog
        </Link>
        
        {postData.category && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-calc-green/10 text-calc-green text-xs font-semibold rounded-full">
              {postData.category}
            </span>
          </div>
        )}
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-calc-darkGray leading-tight">
          {postData.title}
        </h1>
        
        <div className="flex items-center text-sm text-gray-500 mb-8 pb-8 border-b border-calc-lightGray">
          <time dateTime={postData.date}>{postData.date}</time>
        </div>
      </div>

      <article 
        className="markdown-body text-gray-700 leading-relaxed space-y-6 
          [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-calc-darkGray [&>h2]:mt-10 [&>h2]:mb-4
          [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-calc-darkGray [&>h3]:mt-8 [&>h3]:mb-3
          [&>p]:mb-4
          [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2
          [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol>li]:mb-2
          [&>a]:text-calc-green [&>a]:underline hover:[&>a]:text-calc-green/80
          [&>blockquote]:border-l-4 [&>blockquote]:border-calc-green [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600
          [&>hr]:my-8 [&>hr]:border-calc-lightGray
          [&>pre]:bg-gray-100 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto
          [&>code]:bg-gray-100 [&>code]:px-1 [&>code]:py-0.5 [&>code]:rounded"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
