import { ADSENSE_CLIENT_ID } from "@/config/site";

/**
 * Google AdSense loader — placed in root layout <head> so it runs on every page.
 * @see https://support.google.com/adsense/answer/9274019
 */
export default function GoogleAdSense() {
  if (!ADSENSE_CLIENT_ID) return null;

  return (
    <>
      <meta name="google-adsense-account" content={ADSENSE_CLIENT_ID} />
      <script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
        crossOrigin="anonymous"
      />
    </>
  );
}
