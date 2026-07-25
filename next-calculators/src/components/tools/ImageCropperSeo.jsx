import React from 'react';
import FAQAccordion from './FAQAccordion';

const faqs = [
  {
    question: "How do I crop out the background of my signature photo?",
    answer: (
      <>
        <p className="mb-4">
        Upload the photo of your signature. Using your mouse or finger on mobile, tap and drag a rectangle strictly around the ink of the signature, leaving out as much of the white paper as possible. Click "Crop Image" and download the clean signature.
      </p>
      </>
    )
  },
  {
    question: "Does cropping reduce the file size (KB) of the image?",
    answer: (
      <>
        <p className="mb-4">
        Yes, significantly. By permanently deleting sections of the image (like a large background or desk), you are removing millions of pixels of data. A 5MB photograph can easily drop to 500KB simply by cropping out the unnecessary background.
      </p>
      </>
    )
  },
  {
    question: "Is it safe to upload my Aadhar card, Pan card, or Passport to crop it?",
    answer: (
      <>
        <p className="mb-4">
        Yes, it is 100% safe. Unlike other websites, your documents are never uploaded to a cloud server. Our tool runs locally within your browser using your device's processing power. Your highly confidential identity files remain completely private and disappear the moment you close the tab.
      </p>
      </>
    )
  },
  {
    question: "What is the difference between Resizing and Cropping?",
    answer: (
      <>
        <p className="mb-4">
        Resizing changes the dimensions of the entire image, stretching or squishing the pixels to fit a new box (like taking a poster and printing it on a postcard). Cropping removes parts of the image entirely, changing what is actually visible in the frame (like taking a pair of scissors to a printed photograph and cutting off the edges).
      </p>
      </>
    )
  },
  {
    question: "Will cropping blur or pixelate my image?",
    answer: (
      <>
        <p className="mb-4">
        No. Our image cropper is 100% lossless regarding the pixels within your selection. It extracts the exact pixels from the original image and saves them without any additional compression artifacts, ensuring maximum possible clarity.
      </p>
      </>
    )
  },
  {
    question: "Can I use this tool on my mobile phone or tablet?",
    answer: (
      <>
        <p className="mb-4">
        Absolutely. The interface is fully responsive. You can snap a picture with your Android or iPhone camera, open this web tool, upload the photo directly from your camera roll, and drag your finger across the screen to crop it instantly without needing to install any third-party applications.
      </p>
      </>
    )
  }
];

export default function ImageCropperSeo() {
  return (
    <article className="prose prose-slate max-w-none bg-pdf-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-pdf-gray mt-12">
      <h2 className="text-3xl font-bold text-pdf-dark mb-6">
        The Ultimate Online Image Cropper for Flawless Composition
      </h2>
      <p className="mb-4">
        Welcome to the most intuitive, precise, and highly secure image cropping tool available on the web today. Whether you are extracting a signature from a cluttered scanned document, removing unwanted photobombers from a portrait, or framing a photograph perfectly for a passport application, our free online image cropper is engineered to provide absolute pixel-level control. Built upon advanced client-side technologies, this utility operates entirely within the secure environment of your web browser, ensuring that your sensitive photos and confidential documents remain 100% private.
      </p>

      

      <h3 className="text-2xl font-bold text-pdf-dark mt-8 mb-4">
        How to Use the Image Cropper
      </h3>
      <ol className="list-decimal pl-6 space-y-2 mb-4">
        <li><strong>Upload Your Photograph:</strong> Click the large drop zone area at the top of the interface or simply drag and drop your JPEG, PNG, or WebP image directly into the box.</li>
        <li><strong>Draw the Crop Area:</strong> Using your mouse or trackpad, click and drag directly over the image preview to draw a selection rectangle. This highlighted box represents the exact area that will be kept.</li>
        <li><strong>Adjust the Selection:</strong> You can see the real-time crop dimensions updating instantly. If you made a mistake, simply click outside the box and draw a new selection area to re-frame your subject.</li>
        <li><strong>Crop the Image:</strong> Once you are satisfied with the framing, click the "Crop Image" button. Our zero-trust engine will instantly execute the mathematical excision of the surrounding pixels.</li>
        <li><strong>Save and Download:</strong> The processed image will appear on your screen. Click the "Download" button to save the perfectly cropped file instantly to your device.</li>
      </ol>
<h3 className="text-2xl font-bold text-pdf-dark mt-8 mb-4">
        Why Do You Need to Crop Images?
      </h3>
      <p className="mb-4">
        Cropping is often the most critical step in photo editing. It is the process of removing unwanted outer areas of a photographic or illustrative image. While resizing alters the entire image's physical dimensions (squishing or expanding everything), cropping actually deletes pixels, changing the framing and altering the aspect ratio to draw the viewer's focus to the primary subject.
      </p>
      <p className="mb-4">
        In the context of official forms and competitive examinations, a candidate will often take a photograph of their physical signature written on a piece of paper using their smartphone. This photograph invariably includes the edges of the paper, shadows, the table underneath, and lots of empty white space. Uploading this raw image to a government portal looks highly unprofessional and often leads to automated rejection. Cropping allows you to slice away the desk and the shadows, isolating just the ink signature itself for a clean, professional digital asset.
      </p>

      <h3 className="text-2xl font-bold text-pdf-dark mt-8 mb-4">
        A Crucial Tool for Government and Competitive Exam Portals
      </h3>
      <p className="mb-4">
        Every year, millions of candidates in India and globally apply for highly competitive examinations. These applications are strictly digital, and the scrutiny process is unforgiving. A core requirement is the uploading of a passport-size photograph, a scanned signature, and occasionally a left thumb impression or handwritten declaration. 
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li><strong>UPSC (Union Public Service Commission):</strong> When applying for civil services, your uploaded photograph must clearly show your face, occupying about 70-80% of the frame. If you take a photo from too far away, you can use our cropper to cut out the background, effectively "zooming in" on your face to meet the stringent visual requirements.</li>
        <li><strong>SSC (Staff Selection Commission):</strong> SSC examinations (CGL, CHSL, MTS, JE) are notorious for strict digital requirements. If you scan a physical photograph, the scanner often adds a thick white border around the image. You must use a cropper to slice off these white borders before uploading, or your application will be rejected for incorrect formatting.</li>
        <li><strong>GATE, NEET & JEE Main:</strong> Medical and engineering aspirants often need to upload thumb impressions. A raw photo of a thumb impression often includes the rest of the hand. Cropping allows you to isolate just the fingerprint patterns, making the file much cleaner and easier for the biometric verification systems to process.</li>
        <li><strong>IBPS & SBI Banking Exams:</strong> Banking recruitment boards require handwritten declarations. Writing this on a large A4 sheet and taking a photo leaves massive amounts of blank paper. Cropping tightens the frame exactly around the text, which is vital before you compress the image to meet their strict 50KB-100KB limits.</li>
      </ul>

      <h3 className="text-2xl font-bold text-pdf-dark mt-8 mb-4">
        Perfecting Images for Social Media and Content Creation
      </h3>
      <p className="mb-4">
        Beyond academic examinations, our tool is an indispensable asset for digital marketing professionals, web developers, and social media content creators. 
      </p>
      <p className="mb-4">
        <strong>Social Media Framing:</strong> When you take a sprawling landscape photo but want to post it to Instagram, you need a square (1:1 ratio) or a vertical portrait (4:5 ratio). Cropping allows you to selectively remove the edges of the landscape, completely redefining the composition and story of the photograph to fit the platform perfectly.
      </p>
      <p className="mb-4">
        <strong>Privacy and Redaction:</strong> When sharing screenshots of software interfaces, banking transfers, or emails, there is often highly sensitive data (like account numbers or</p>
      <h3 className="text-2xl font-bold text-pdf-dark mt-8 mb-6 border-b border-pdf-gray/20 pb-4">
        Frequently Asked Questions
      </h3>
      <FAQAccordion faqs={faqs} />
      </article>
  );
}
