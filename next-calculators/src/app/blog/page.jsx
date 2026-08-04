import Blog from "../../views/Blog";
import { createPageMetadata } from "@/utils/seo";
import { getSortedPostsData } from "@/lib/blog";

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: "Blog - ToolsWizard",
  description:
    "Read the latest articles, tutorials, and updates about online tools, calculators, and productivity tips on the ToolsWizard blog.",
  path: "/blog",
});

export default function BlogPage() {
  const allPostsData = getSortedPostsData();
  return <Blog allPostsData={allPostsData} />;
}
