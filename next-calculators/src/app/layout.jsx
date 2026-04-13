import "./globals.css";
// Changed @/ to ../ to properly link to your components folder
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://calcpilot.com"),
  title: "Free Online Calculators",
  description: "Explore our massive directory of free online calculators.",
  openGraph: {
    title: "Free Online Calculators",
    description: "Explore our massive directory of free online calculators.",
    url: "/",
    siteName: "CalcPilot",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
