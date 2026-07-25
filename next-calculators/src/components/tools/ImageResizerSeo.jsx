import React from 'react';
import FAQAccordion from './FAQAccordion';

const faqs = [
  {
    question: "How do I resize an image in pixels (px) for an online application?",
    answer: (
      <>
        <p className="mb-4">
        Simply drag your image into the drop zone, ensure the "Width" and "Height" fields are visible on the right, and type the exact pixel numbers required by the application portal (e.g., 132 for width and 170 for height). Click "Resize Image" and download the result instantly.
      </p>
      </>
    )
  },
  {
    question: "What happens when I click the Lock icon between the width and height?",
    answer: (
      <>
        <p className="mb-4">
        The lock icon controls the Aspect Ratio. When locked (default), changing one dimension automatically changes the other to prevent the image from stretching or looking distorted. When unlocked, you can set the width and height completely independently, which is often required for strict exam portals even if it slightly stretches the photo.
      </p>
      </>
    )
  },
  {
    question: "Does resizing an image also reduce its file size (KB)?",
    answer: (
      <>
        <p className="mb-4">
        Yes! If you resize a large image (e.g., 4000x3000 pixels) down to a much smaller dimension (e.g., 400x300 pixels), the tool discards millions of unnecessary pixels. This drastically reduces the final file size in Kilobytes (KB) or Megabytes (MB).
      </p>
      </>
    )
  },
  {
    question: "What is the difference between this Image Resizer and the Image Compressor tool?",
    answer: (
      <>
        <p className="mb-4">
        The Image Resizer physically alters the dimensions (Width and Height in Pixels) of the canvas. The Image Compressor keeps the physical dimensions exactly the same, but uses complex mathematical algorithms to reduce the file size (in KB) by lowering visual quality and stripping metadata. For exams, you often need to use the Resizer first to get the correct dimensions, and then the Compressor to hit the exact KB limit.
      </p>
      </>
    )
  },
  {
    question: "Is it safe to upload my signature and passport photo to this website?",
    answer: (
      <>
        <p className="mb-4">
        Yes, it is 100% safe and private. Our tool operates on a zero-trust client-side architecture. This means your images are processed entirely on your own device's hardware. Your sensitive documents and photographs are never uploaded to our servers or transmitted across the internet.
      </p>
      </>
    )
  },
  {
    question: "Can I use this tool on a mobile phone to resize a photo I just took?",
    answer: (
      <>
        <p className="mb-4">
        Absolutely. The interface is fully responsive. You can snap a picture with your Android or iPhone camera, open this web tool, upload the photo directly from your camera roll, and resize it to exact pixel dimensions without needing to install any third-party applications.
      </p>
      </>
    )
  }
];

export default function ImageResizerSeo() {
  return (
    <article className="prose prose-slate max-w-none bg-pdf-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-pdf-gray mt-12">
      <h2 className="text-3xl font-bold text-pdf-dark mb-6">
        The Ultimate Online Image Resizer for Exact Pixel Dimensions
      </h2>
      <p className="mb-4">
        Welcome to the fastest, most precise, and highly secure image resizing utility on the web. Whether you are a student preparing documents for rigorous government examinations, a professional social media manager optimizing graphics for multiple platforms, or a web developer trying to nail exact layout dimensions, our free online image resizer is built exactly for you. Engineered with cutting-edge HTML5 Canvas technologies, this tool operates entirely within the secure environment of your browser, guaranteeing total privacy while delivering instantaneous, pixel-perfect results without server delays.
      </p>

      

      <h3 className="text-2xl font-bold text-pdf-dark mt-8 mb-4">
        How to Use the Image Resizer for Exact Dimensions
      </h3>
      <ol className="list-decimal pl-6 space-y-2 mb-4">
        <li><strong>Upload Your Image:</strong> Click the large drop zone area at the top of the interface or simply drag and drop your JPEG, PNG, or WebP photograph directly into the box.</li>
        <li><strong>Review Original Dimensions:</strong> The tool will instantly load your image and display its original width, height, and file size beneath the preview canvas.</li>
        <li><strong>Set Target Dimensions:</strong> Enter your exact required width and height in pixels (px) into the input fields on the right.</li>
        <li><strong>Manage Aspect Ratio:</strong> By default, the lock icon is activated, meaning changing the width will automatically calculate the correct height to prevent image distortion. If you need strict absolute dimensions (like exactly 200x230), click the lock icon to unlock it and force the exact size.</li>
        <li><strong>Resize and Download:</strong> Click the "Resize Image" button. Within milliseconds, the image is mathematically redrawn. Click "Download" to save the perfectly sized image to your device instantly.</li>
      </ol>
<h3 className="text-2xl font-bold text-pdf-dark mt-8 mb-4">
        Why Do You Need to Resize Images to Exact Pixels?
      </h3>
      <p className="mb-4">
        In the digital age, image dimensions are heavily scrutinized by automated systems. From highly competitive academic testing portals to sprawling social media algorithms, submitting an image with the wrong dimensions can lead to immediate automated rejection. 
      </p>
      <p className="mb-4">
        Digital images are composed of tiny dots of color called pixels. The dimensions of an image are expressed as width by height in pixels (e.g., 800x600 px). When an online portal states that an uploaded signature must be exactly 140 pixels wide and 60 pixels high, it is because their backend software is hard-coded to map that image precisely onto an application form or PDF document. Uploading an image that is 141 pixels wide could cause the portal's layout to break, resulting in a system error for the applicant. Our image resizer eliminates this headache by giving you absolute control over the pixel array.
      </p>

      <h3 className="text-2xl font-bold text-pdf-dark mt-8 mb-4">
        Crucial Tool for Government and Competitive Exam Portals
      </h3>
      <p className="mb-4">
        Every single year, millions of candidates in India and globally apply for highly competitive examinations. These applications are strictly digital, and the scrutiny process is unforgiving. A core requirement is the uploading of a passport-size photograph, a scanned signature, and occasionally a left thumb impression or handwritten declaration. 
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li><strong>UPSC (Union Public Service Commission):</strong> The portal often requires photographs and signatures to be resized. While they focus heavily on file size (KB), ensuring your image is proportionally correct (like 132x170 pixels) prevents the final printed admit card from featuring a stretched or squished photograph.</li>
        <li><strong>SSC (Staff Selection Commission):</strong> SSC examinations (CGL, CHSL, MTS, JE) are notorious for strict digital requirements. Photographs generally need to be approximately 3.5 cm x 4.5 cm, which digitally translates to roughly 132 x 170 pixels or 200 x 230 pixels depending on scanning DPI. Signatures are typically required to be 140 x 60 pixels. Our tool has built-in quick-action buttons for these exact, highly sought-after dimensions.</li>
        <li><strong>GATE, NEET & JEE Main:</strong> Technical and medical entrance exams mandate precise bounding boxes for applicant photographs. Resizing your image accurately ensures the facial recognition and biometric matching software used at testing centers can successfully verify your identity against the admit card.</li>
        <li><strong>IBPS & SBI Banking Exams:</strong> Banking recruitment boards require multiple uploads, including declarations. Our tool allows you to unlock the aspect ratio to force wide, panoramic shapes (like 800x400) specifically for lengthy handwritten text scans.</li>
      </ul>

      <h3 className="text-2xl font-bold text-pdf-dark mt-8 mb-4">
        Perfecting Images for Social Media and Web Development
      </h3>
      <p className="mb-4">
        Beyond academic examinations, our tool is an indispensable asset for digital marketing professionals, web developers, and social media managers. 
      </p>
      <p className="mb-4">
        <strong>Social Media:</strong> Every social platform has a unique "golden ratio" for image dimensions. Instagram thrives on 1080x1080 (Square) or 1080x1350 (Portrait). Twitter cards look best at 1200x675. LinkedIn hero banners require a highly specific 1584x396 pixel format. Uploading the wrong size forces the platform to crop your image arbitrarily, often cutting off vital text or heads in corporate photographs. By pre-resizing your graphics using our tool, you guarantee pixel-perfect presentation across every feed.
      </p>
      <p className="mb-4">
        <strong>Web Development:</strong> For frontend engineers and SEO specialists, serving correctly sized images is a core tenet of modern web architecture. If your HTML container is only 400 pixels wide, serving a 4000-pixel wide image forces the user's browser to download massive amounts of unnecessary data and then spend CPU c</p>
      <h3 className="text-2xl font-bold text-pdf-dark mt-8 mb-6 border-b border-pdf-gray/20 pb-4">
        Frequently Asked Questions
      </h3>
      <FAQAccordion faqs={faqs} />
      </article>
  );
}
