import Blog from "../../views/Blog";
import { createPageMetadata } from "@/utils/seo";

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: "Blog - ToolsWizard",
  description:
    "Read the latest articles, tutorials, and updates about online tools, calculators, and productivity tips on the ToolsWizard blog.",
  path: "/blog",
});

export default function BlogPage() {
  return <Blog />;
}
