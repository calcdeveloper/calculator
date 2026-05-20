import Contact from "../../views/Contact";
import { createPageMetadata } from "@/utils/seo";

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: "Contact ToolsWizard",
  description:
    "Contact ToolsWizard for calculator requests, feedback, bug reports, and partnership questions.",
  path: "/contact",
});

export default function ContactPage() {
  return <Contact />;
}
