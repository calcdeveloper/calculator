import BlogPost from "../../../views/BlogPost";
import { getPostData, getAllPostSlugs } from "@/lib/blog";
import { createPageMetadata } from "@/utils/seo";
import { notFound } from "next/navigation";

export const dynamicParams = false;
export const dynamic = "force-static";

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const postData = getPostData(slug);

  if (!postData) {
    return createPageMetadata({
      title: "Post Not Found - ToolsWizard",
      description: "The blog post you are looking for does not exist.",
      path: `/blog/${slug}`,
    });
  }

  return createPageMetadata({
    title: postData.title,
    description: postData.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const postData = getPostData(slug);

  if (!postData) {
    notFound();
  }

  return <BlogPost postData={postData} />;
}
