import TermsAndConditions from "../../views/TermsAndConditions";
import { createPageMetadata } from "@/utils/seo";

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: "Terms and Conditions",
  description: "Read the ToolsWizard terms and conditions for using our online tools.",
  path: "/terms",
});

export default function TermsPage() {
  return <TermsAndConditions />;
}
