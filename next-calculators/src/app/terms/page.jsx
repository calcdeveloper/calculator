import TermsAndConditions from "../../views/TermsAndConditions";

export const dynamic = "force-static";

export const metadata = {
  title: "Terms and Conditions",
  description: "Read the CalcPilot terms and conditions.",
};

export default function TermsPage() {
  return <TermsAndConditions />;
}
