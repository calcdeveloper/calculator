import Privacy from "../../views/Privacy";
import { createPageMetadata } from "@/utils/seo";

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Read the ToolsWizard privacy policy and how we handle your data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <Privacy />;
}
