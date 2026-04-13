import About from "../../views/About";

export const dynamic = "force-static";

export const metadata = {
  title: "About CalcPilot",
  description: "Learn about CalcPilot and its collection of free online calculators.",
};

export default function AboutPage() {
  return <About />;
}
