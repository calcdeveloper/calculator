"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Calculator, Wrench, Home } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      // Auto-heal malformed relative tool paths (e.g. /calculator/construction/tools/encoder-decoder -> /tools/encoder-decoder)
      const toolMatch = path.match(/\/tools\/(converter|design|developer-tools|encoder-decoder|fun-tools|generators|pdf-tools|text-tools)(.*)/);
      if (toolMatch && path !== `/tools/${toolMatch[1]}${toolMatch[2] || ""}`) {
        window.location.replace(`/tools/${toolMatch[1]}${toolMatch[2] || ""}`);
        return;
      }
      if (path.includes("/tools/tools")) {
        window.location.replace(path.replace("/tools/tools", "/tools"));
        return;
      }
      if (path.includes("/calculator/tools")) {
        window.location.replace(path.replace("/calculator/tools", "/tools"));
        return;
      }
    }
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-gray-50/50">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 font-black text-3xl mb-6 shadow-sm border border-emerald-100">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you are looking for doesn&apos;t exist, has been removed, or was moved to a new address.
        </p>

        <div className="space-y-3">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <Link
              href="/calculator"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition text-sm"
            >
              <Calculator className="w-4 h-4 text-emerald-600" />
              <span>Calculators</span>
            </Link>

            <Link
              href="/tools"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition text-sm"
            >
              <Wrench className="w-4 h-4 text-emerald-600" />
              <span>All Tools</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

