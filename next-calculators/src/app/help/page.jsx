import Help from "../../views/Help";

export const dynamic = "force-static";

export const metadata = {
  title: "Help Center",
  description: "Find answers to common ToolsWizard questions.",
};

export default function HelpPage() {
  return <Help />;
}
