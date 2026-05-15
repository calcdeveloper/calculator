# 🎨 Centralized Theme System Guide

## 📍 Theme Location

**File**: `/src/app/globals.css` (lines 8-99)

All theme and color codes are centralized in the `@theme inline` section of the globals.css file using Tailwind CSS v4 custom properties.

---

## 🎯 Theme Categories

### **1. Calculator Tool Colors**
```css
--color-calc-beige: #ffffff;
--color-calc-white: #ffffff;
--color-calc-green: #15803d;
--color-calc-darkGreen: #166534;
--color-calc-orange: #f97316;
--color-calc-indigo: #6366f1;
--color-calc-lightGray: #e5e7eb;
--color-calc-gray: #6b7280;
--color-calc-darkGray: #374151;
--color-calc-black: #000000;
```

**Usage**: `bg-calc-green`, `text-calc-green`, `border-calc-green`, etc.

**Used in**: All calculator tools via `/src/components/calculator/CalculatorClient.jsx`

---

### **2. Generator Tools Colors**
```css
--color-gen-primary: #10b981;
--color-gen-primaryDark: #059669;
--color-gen-secondary: #3b82f6;
--color-gen-bg: #f0fdf4;
--color-gen-white: #ffffff;
--color-gen-gray: #6b7280;
--color-gen-dark: #1f2937;
```

**Usage**: `bg-gen-primary`, `text-gen-primary`, `border-gen-primary`, etc.

**Used in**: Generator tools (UUID generator, etc.)

---

### **3. PDF Tools Colors**
```css
--color-pdf-primary: #dc2626;
--color-pdf-primaryDark: #b91c1c;
--color-pdf-secondary: #ef4444;
--color-pdf-bg: #fef2f2;
--color-pdf-white: #ffffff;
--color-pdf-gray: #6b7280;
--color-pdf-dark: #1f2937;
```

**Usage**: `bg-pdf-primary`, `text-pdf-primary`, `border-pdf-primary`, etc.

**Used in**: PDF tools (Delete Pages, etc.)

---

### **4. Text Tools Colors**
```css
--color-text-primary: #8b5cf6;
--color-text-primaryDark: #7c3aed;
--color-text-secondary: #a78bfa;
--color-text-bg: #f5f3ff;
--color-text-white: #ffffff;
--color-text-gray: #6b7280;
--color-text-dark: #1f2937;
```

**Usage**: `bg-text-primary`, `text-text-primary`, `border-text-primary`, etc.

**Used in**: Text manipulation tools

---

### **5. JSON Tools Colors**
```css
--color-json-primary: #eab308;
--color-json-primaryDark: #ca8a04;
--color-json-secondary: #f59e0b;
--color-json-bg: #fefce8;
--color-json-white: #ffffff;
--color-json-gray: #6b7280;
--color-json-dark: #1f2937;
```

**Usage**: `bg-json-primary`, `text-json-primary`, `border-json-primary`, etc.

**Used in**: JSON formatting, validation, conversion tools

---

### **6. Encoder/Decoder Tools Colors**
```css
--color-enc-primary: #6366f1;
--color-enc-primaryDark: #4f46e5;
--color-enc-secondary: #818cf8;
--color-enc-bg: #eef2ff;
--color-enc-white: #ffffff;
--color-enc-gray: #6b7280;
--color-enc-dark: #1f2937;
```

**Usage**: `bg-enc-primary`, `text-enc-primary`, `border-enc-primary`, etc.

**Used in**: Encoding and decoding utilities

---

### **7. Converter Tools Colors**
```css
--color-conv-primary: #f97316;
--color-conv-primaryDark: #ea580c;
--color-conv-secondary: #fb923c;
--color-conv-bg: #fff7ed;
--color-conv-white: #ffffff;
--color-conv-gray: #6b7280;
--color-conv-dark: #1f2937;
```

**Usage**: `bg-conv-primary`, `text-conv-primary`, `border-conv-primary`, etc.

**Used in**: Unit and format conversion tools

---

### **8. Developer Tools Colors**
```css
--color-dev-primary: #374151;
--color-dev-primaryDark: #1f2937;
--color-dev-secondary: #4b5563;
--color-dev-bg: #f9fafb;
--color-dev-white: #ffffff;
--color-dev-gray: #6b7280;
--color-dev-dark: #111827;
```

**Usage**: `bg-dev-primary`, `text-dev-primary`, `border-dev-primary`, etc.

**Used in**: Programming and web development utilities

---

### **9. Design Tools Colors**
```css
--color-design-primary: #ec4899;
--color-design-primaryDark: #db2777;
--color-design-secondary: #f472b6;
--color-design-bg: #fdf2f8;
--color-design-white: #ffffff;
--color-design-gray: #6b7280;
--color-design-dark: #1f2937;
```

**Usage**: `bg-design-primary`, `text-design-primary`, `border-design-primary`, etc.

**Used in**: Color, image, and design utilities

---

## 📝 How to Use Theme Colors

### **Example: Creating a New PDF Tool**

```jsx
"use client";

export default function YourPDFTool() {
  return (
    <div className="min-h-screen bg-pdf-bg font-sans text-pdf-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pdf-primary to-pdf-primaryDark pt-16 pb-32 px-4">
        <h1 className="text-4xl font-extrabold text-pdf-white mb-6">
          Your Tool Title
        </h1>
        <p className="text-xl text-pdf-white/90">
          Your tool description
        </p>
      </section>

      {/* Main Tool Container */}
      <main className="max-w-5xl mx-auto px-4">
        <div className="bg-pdf-white rounded-3xl shadow-2xl border border-pdf-gray">
          {/* Your tool UI */}
          <button className="bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white px-6 py-3 rounded-xl">
            Action Button
          </button>
        </div>
      </main>
    </div>
  );
}
```

### **Example: Creating a New Generator Tool**

```jsx
"use client";

export default function YourGeneratorTool() {
  return (
    <div className="min-h-screen bg-gen-bg font-sans text-gen-dark">
      <section className="bg-gradient-to-r from-gen-primary to-gen-primaryDark pt-16 pb-32 px-4">
        <h1 className="text-4xl font-extrabold text-gen-white mb-6">
          Your Tool Title
        </h1>
      </section>

      <main className="max-w-5xl mx-auto px-4">
        <div className="bg-gen-white rounded-3xl border border-gen-gray">
          <button className="bg-gen-primary hover:bg-gen-primaryDark text-gen-white px-6 py-3 rounded-xl">
            Generate
          </button>
        </div>
      </main>
    </div>
  );
}
```

---

## 🎨 Color Naming Convention

### **Pattern**: `[category]-[purpose]`

**Categories**:
- `calc` - Calculator tools
- `gen` - Generator tools
- `pdf` - PDF tools
- `text` - Text tools
- `json` - JSON tools
- `enc` - Encoder/Decoder tools
- `conv` - Converter tools
- `dev` - Developer tools
- `design` - Design tools

**Purposes**:
- `primary` - Main brand color
- `primaryDark` - Darker shade of primary
- `secondary` - Secondary accent color
- `bg` - Background color
- `white` - White color
- `gray` - Gray color
- `dark` - Dark color

---

## ✅ Benefits of Centralized Theme System

1. **Consistency**: All tools in the same category have consistent branding
2. **Easy Updates**: Change colors in one place (globals.css) to update all tools
3. **Maintainability**: No need to search through multiple files to update colors
4. **Scalability**: Easy to add new tool categories with their own color schemes
5. **Type Safety**: Tailwind CSS v4 provides autocomplete and validation

---

## 🔄 Updating Colors

To update any color:

1. Open `/src/app/globals.css`
2. Find the `@theme inline` section
3. Update the CSS custom property value
4. Save the file
5. All tools using that color will automatically update

**Example**:
```css
/* Change PDF primary color from red to blue */
--color-pdf-primary: #3b82f6; /* was #dc2626 */
```

---

## 📋 Checklist for New Tools

When creating a new tool:

- [ ] Identify the tool category (calculator, generator, PDF, etc.)
- [ ] Use the appropriate theme color prefix (calc-, gen-, pdf-, etc.)
- [ ] Apply theme colors consistently (primary for CTAs, bg for backgrounds, etc.)
- [ ] Test the tool to ensure colors render correctly
- [ ] Verify accessibility (contrast ratios)

---

## 🎯 Best Practices

1. **Use semantic color names**: `bg-pdf-primary` instead of `bg-red-600`
2. **Maintain contrast**: Ensure text colors have sufficient contrast with backgrounds
3. **Use hover states**: `hover:bg-pdf-primaryDark` for interactive elements
4. **Use opacity for subtlety**: `text-pdf-white/90` for secondary text
5. **Use gradients for sections**: `bg-gradient-to-r from-pdf-primary to-pdf-primaryDark`
6. **Keep consistent spacing**: Use Tailwind's spacing scale consistently

---

## 🔍 Troubleshooting

**Issue**: Custom color classes not working

**Solution**:
1. Ensure Tailwind CSS v4 is properly configured
2. Check that `@theme inline` is present in globals.css
3. Verify the CSS custom property is defined correctly
4. Restart the dev server if needed

**Issue**: Lint warning about `@theme`

**Solution**: This is expected. Tailwind CSS v4's `@theme` is a new feature that linters may not recognize yet. It's not a real error and works correctly.

---

## 📚 Additional Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs/v4-beta)
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
