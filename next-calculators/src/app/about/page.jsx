import About from "../../views/About";
import { createPageMetadata } from "@/utils/seo";

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: "About ToolsWizard",
  description:
    "Learn about ToolsWizard and its collection of free online calculators and utility tools.",
  path: "/about",
});

export default function AboutPage() {
  return <About />;
}
