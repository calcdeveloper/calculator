import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import CalculatorLayout from "@/components/calculator/CalculatorLayout";
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from "@/utils/seo";

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
  const { category, calculator } = await params;
  try {
    const configModule = await import(`@/registry/${category}/${calculator}/config.js`);
    const config = configModule.default || configModule.config;
    const pagePath = `/calculator/${category}/${calculator}`;

    return createPageMetadata({
      title: config.seoTitle || `${config.name} - Free Online Calculator`,
      description: config.seoDescription || config.description,
      path: pagePath,
      keywords: config.keywords,
      openGraph: {
        title: config.seoTitle || config.name,
        description: config.seoDescription || config.description,
      },
    });
  } catch (error) {
    return { title: "Calculator" };
  }
}

// 3. Render the Page
export default async function CalculatorPage({ params }) {
  const { category, calculator } = await params;

  let config;
  try {
    const configModule = await import(`@/registry/${category}/${calculator}/config.js`);
    config = configModule.default || configModule.config;
    
    if (!config) {
        console.error(`Config object missing in registry for: ${category}/${calculator}`);
        notFound();
    }
  } catch (error) {
    console.error(`Failed to load config for: ${category}/${calculator}`, error);
    notFound();
  }

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  const pagePath = `/calculator/${category}/${calculator}`;

  const softwareSchema = createSoftwareAppSchema({
    name: config.name,
    description: config.seoDescription || config.description,
    path: pagePath,
    category: `${categoryName}Application`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" }
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Calculators", path: "/calculator" },
    { name: `${categoryName} Calculators`, path: `/calculator/${category}` },
    { name: config.name, path: pagePath }
  ]);

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
      console.warn(`Optional content.jsx not found for: ${category}/${calculator}`);
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      {CustomComponent ? (
        <CustomComponent config={config} />
      ) : (
        <CalculatorLayout
          category={category}
          calculator={calculator}
          initialConfig={toSerializableConfig(config)}
        >
          {ContentComponent ? <ContentComponent /> : null}
        </CalculatorLayout>
      )}
    </>
  );
}
