import Help from "../../views/Help";
import { createPageMetadata } from "@/utils/seo";

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: "Help Center & FAQ",
  description: "Find answers to common ToolsWizard questions about calculators and online tools.",
  path: "/help",
});

export default function HelpPage() {
  return <Help />;
}
