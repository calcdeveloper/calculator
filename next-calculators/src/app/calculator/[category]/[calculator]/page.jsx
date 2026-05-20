import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import CalculatorLayout from "@/components/calculator/CalculatorLayout";
import { absoluteUrl } from "@/config/site";

export const dynamic = "force-static";
export const dynamicParams = false;

function toSerializableConfig(value) {
  if (Array.isArray(value)) {
    return value.map(toSerializableConfig);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([, entryValue]) => typeof entryValue !== "function")
        .map(([key, entryValue]) => [key, toSerializableConfig(entryValue)])
    );
  }

  return value;
}

// 1. Tell Next.js which calculators to build statically (SSG)
export async function generateStaticParams() {
  const registryDir = path.join(process.cwd(), "src", "registry");
  if (!fs.existsSync(registryDir)) return [];
  
  const categories = fs.readdirSync(registryDir);
  const paths = [];

  categories.forEach((category) => {
    const categoryPath = path.join(registryDir, category);
    if (fs.statSync(categoryPath).isDirectory()) {
      const calculators = fs.readdirSync(categoryPath);
      calculators.forEach((calculator) => {
        const calcPath = path.join(categoryPath, calculator);
        if (fs.statSync(calcPath).isDirectory()) {
          paths.push({ category, calculator });
        }
      });
    }
  });
  return paths;
}

// 2. Dynamic Metadata for SEO
export async function generateMetadata({ params }) {
  const { category, calculator } = await params; // Next 15: params is a Promise
  try {
    const configModule = await import(`@/registry/${category}/${calculator}/config.js`);
    // Handle both default and named exports
    const config = configModule.default || configModule.config;
    
    const path = `/calculator/${category}/${calculator}`;
    return {
      title: config.seoTitle || config.name,
      description: config.seoDescription || config.description,
      alternates: { canonical: absoluteUrl(path) },
      openGraph: {
        title: config.seoTitle || config.name,
        description: config.seoDescription || config.description,
        url: absoluteUrl(path),
        type: "website",
      },
      robots: { index: true, follow: true },
    };
  } catch (error) {
    return { title: "Calculator" };
  }
}

// 3. Render the Page
export default async function CalculatorPage({ params }) {
  const { category, calculator } = await params; // Await the params for Next.js 15

  let config;
  try {
    const configModule = await import(`@/registry/${category}/${calculator}/config.js`);
    // Look for default export first, then named export 'config'
    config = configModule.default || configModule.config;
    
    if (!config) {
        console.error(`Config object missing in registry for: ${category}/${calculator}`);
        notFound();
    }
  } catch (error) {
    console.error(`Failed to load config for: ${category}/${calculator}`, error);
    notFound();
  }

  let ContentComponent = null;
  let CustomComponent = null;

  // Handle custom components (like basic-calculator)
  if (config.customComponent) {
    try {
      const CustomModule = await import(`@/registry/${category}/${calculator}/index.jsx`);
      CustomComponent = CustomModule.default;
    } catch (error) {
      console.error(`Failed to load custom component for: ${category}/${calculator}`, error);
      notFound();
    }
  } else {
    // Load regular content component
    try {
      const ContentModule = await import(`@/registry/${category}/${calculator}/content.jsx`);
      ContentComponent = ContentModule.default;
    } catch (error) {
      // Content is optional, so we don't trigger notFound here
      console.warn(`Optional content.jsx not found for: ${category}/${calculator}`);
    }
  }

  // If it's a custom component, render it directly with config
  if (CustomComponent) {
    return <CustomComponent config={config} />;
  }

  // Otherwise, use the standard CalculatorLayout
  return (
    <CalculatorLayout
      category={category}
      calculator={calculator}
      initialConfig={toSerializableConfig(config)}
    >
      {ContentComponent ? <ContentComponent /> : null}
    </CalculatorLayout>
  );
}
