import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";
import { GA_MEASUREMENT_ID } from "@/config/site";

/**
 * Loads Google tag (gtag.js) on every page via the root layout.
 * Equivalent to the standard GA4 snippet with measurement ID G-FGTS1112ND.
 */
export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return <NextGoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
