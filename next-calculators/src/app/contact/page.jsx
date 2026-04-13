import Contact from "../../views/Contact";

export const dynamic = "force-static";

export const metadata = {
  title: "Contact CalcPilot",
  description: "Contact CalcPilot for calculator requests, feedback, bug reports, and partnership questions.",
};

export default function ContactPage() {
  return <Contact />;
}
