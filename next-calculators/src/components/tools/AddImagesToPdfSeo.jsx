import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Zap, Image as ImageIcon, FileText, Lock, Layers, Eye, CheckCircle2, AlertTriangle, Terminal, BookOpen, ArrowRightLeft } from 'lucide-react';

export default function AddImagesToPdfSeo() {
  return (
    <article className="prose prose-slate max-w-none bg-pdf-white p-6 sm:p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-pdf-gray mt-12">
      <header className="border-b border-pdf-gray/30 pb-8 mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-pdf-dark tracking-tight">
          The Engineering Guide to Inserting Images into PDF Documents: Architecture, Coordinates, and Zero-Trust Processing
        </h2>
        <p className="text-lg text-pdf-gray mt-3 leading-relaxed">
          Explore the internal object architecture of the Portable Document Format (PDF), XObject image dictionaries, affine coordinate transformations, PNG alpha-channel transparency, and client-side zero-trust security.
        </p>
      </header>

      {/* TABLE OF CONTENTS */}
      <section className="p-6 bg-pdf-bg/40 rounded-2xl border border-pdf-gray/30 my-8 not-prose">
        <h3 className="text-sm font-bold text-pdf-dark mb-4 uppercase tracking-wider flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-pdf-primary" /> Architectural Table of Contents
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium text-pdf-primary">
          <a href="#pdf-evolution" className="hover:underline flex items-center gap-1.5">1. Evolution of PDF &amp; Fixed-Layout Imperative</a>
          <a href="#cos-object-model" className="hover:underline flex items-center gap-1.5">2. The Internal Cos Object Model Architecture</a>
          <a href="#xobject-image-dict" className="hover:underline flex items-center gap-1.5">3. The XObject Image Dictionary</a>
          <a href="#coordinate-affine-math" className="hover:underline flex items-center gap-1.5">4. Coordinates, User Space &amp; Affine Matrices</a>
          <a href="#transparency-smasks" className="hover:underline flex items-center gap-1.5">5. Transparency &amp; Soft Masks (/SMask)</a>
          <a href="#compression-color-spaces" className="hover:underline flex items-center gap-1.5">6. Compression Filters &amp; Color Spaces</a>
          <a href="#server-side-vulnerabilities" className="hover:underline flex items-center gap-1.5">7. Risks of Cloud-Based PDF Editors</a>
          <a href="#lossless-preservation" className="hover:underline flex items-center gap-1.5">8. Lossless Preservation &amp; Non-Destructive Edits</a>
          <a href="#production-workflows" className="hover:underline flex items-center gap-1.5">9. Enterprise Workflows &amp; Field Scenarios</a>
          <a href="#backend-blueprints" className="hover:underline flex items-center gap-1.5">10. Backend Implementation Blueprints</a>
          <a href="#file-size-optimization" className="hover:underline flex items-center gap-1.5">11. File Size Optimization &amp; DPI Physics</a>
          <a href="#technical-faqs" className="hover:underline flex items-center gap-1.5">12. Technical Frequently Asked Questions</a>
        </div>
      </section>

      {/* SECTION 1 */}
      <section id="pdf-evolution" className="pt-6">
        <h3 className="text-2xl font-bold text-pdf-dark tracking-tight flex items-center gap-2">
          <FileText className="w-6 h-6 text-pdf-primary" /> 1. The Architectural Evolution of the Portable Document Format
        </h3>
        <p>
          In 1991, Dr. John Warnock, co-founder of Adobe Systems, authored the seminal white paper outlining "The Camelot Project." At the time, the computing world was deeply fragmented across incompatible operating systems, proprietary display engines, and mismatched printer description languages. A document formatted meticulously on an Apple Macintosh running QuickDraw would render with broken line wraps, missing fonts, and mangled graphics when transferred to an IBM PC running MS-DOS or a Sun Microsystems workstation running Unix.
        </p>
        <p>
          Camelot evolved directly into the <strong>Portable Document Format (PDF)</strong>, formally released in 1993 and later codified as the open international standard <strong>ISO 32000</strong>. The foundational design imperative of PDF was radical and uncompromising: create a fixed-layout, device-independent digital equivalent of a physical sheet of paper. Once a document was compiled into PDF, every typographic character, vector curve, margin boundary, and bitmap pixel was locked into an immutable coordinate system that rendered with mathematical uniformity across any display monitor, raster image processor (RIP), or physical laser printer on Earth.
        </p>
        <p>
          While this fixed-layout architecture made PDF the undisputed global sovereign for contracts, blueprints, financial statements, and academic journals, it created an immense software engineering paradox: <em>PDF was never designed to be edited post-compilation</em>.
        </p>
        <p>
          Unlike word processors (such as Microsoft Word or Google Docs) that maintain reflowable text trees, dynamic tables, and inline image anchors, a compiled PDF has no native concept of "paragraphs" or "image insertion points." A PDF is an assembled database of drawing instructions mapped to absolute geometric coordinates. Consequently, when an enterprise professional needs to insert an updated photograph, append a high-resolution scanned signature to an agreement, or stamp a corporate logo onto an invoice, standard desktop viewers (like Apple Preview or Microsoft Edge) fail completely or attempt destructive workarounds—such as converting the entire multi-page vector document into a blurry, low-resolution raster image.
        </p>
        <p>
          Historically, resolving this challenge required either purchasing costly, proprietary enterprise desktop suites (such as Adobe Acrobat Pro) or falling victim to free online converters that silently compromise corporate confidentiality by uploading sensitive documents to untrusted remote cloud servers.
        </p>
      </section>

      {/* SECTION 2 */}
      <section id="cos-object-model" className="pt-6">
        <h3 className="text-2xl font-bold text-pdf-dark tracking-tight flex items-center gap-2">
          <Layers className="w-6 h-6 text-pdf-primary" /> 2. The Internal Cos Object Model Architecture
        </h3>
        <p>
          To understand how an image is programmatically embedded into a pre-existing PDF without destroying its structural integrity, one must look beneath the rendered page canvas and examine the underlying <strong>Cos Object Model</strong> (Carousel Object System).
        </p>
        <p>
          At its structural foundation, a PDF file is not a flat graphical raster; it is an object-oriented database structured in human-readable 7-bit ASCII interspersed with binary data streams. The PDF specification establishes exactly eight fundamental object primitives:
        </p>
        <ul>
          <li><strong>Booleans:</strong> Represented as literal <code>true</code> or <code>false</code> tokens.</li>
          <li><strong>Numbers:</strong> Integer numbers (e.g., <code>100</code>, <code>-42</code>) and real floating-point numbers (e.g., <code>3.14159</code>, <code>0.002</code>).</li>
          <li><strong>Strings:</strong> Literal text strings enclosed in parentheses (e.g., <code>(Confidential Agreement)</code>) or hexadecimal strings enclosed in angle brackets (e.g., <code>&lt;48656C6C6F&gt;</code>).</li>
          <li><strong>Names:</strong> Atomic symbols prefixed by a solidus forward slash (e.g., <code>/Type</code>, <code>/Pages</code>, <code>/MediaBox</code>, <code>/XObject</code>). Names act as keys in dictionaries.</li>
          <li><strong>Arrays:</strong> Ordered linear sequences of objects enclosed in square brackets (e.g., <code>[0 0 612 792]</code> representing standard US Letter page dimensions).</li>
          <li><strong>Dictionaries:</strong> Unordered associative key-value matrices enclosed in double angle brackets (e.g., <code>&lt;&lt; /Type /Page /Parent 4 0 R &gt;&gt;</code>).</li>
          <li><strong>Streams:</strong> A dictionary followed by an arbitrary sequence of unformatted binary bytes delimited by <code>stream</code> and <code>endstream</code> keywords. Streams store all heavy assets, including page drawing operators, compressed fonts, and embedded image samples.</li>
          <li><strong>The Null Object:</strong> Represented by the token <code>null</code>.</li>
        </ul>
        <p>
          These primitives are organized into <strong>Indirect Objects</strong>, which carry a unique object number and generation number (such as <code>12 0 obj ... endobj</code>). This allows objects throughout the document to cross-reference one another via reference pointers (<code>12 0 R</code>).
        </p>
        <p>
          The document hierarchy functions as a tree structure originating from the <strong>Root Catalog</strong> dictionary (<code>/Type /Catalog</code>). The Catalog references the <strong>Page Tree</strong> (<code>/Type /Pages</code>), which branches recursively down to individual <strong>Page Objects</strong> (<code>/Type /Page</code>). Each Page Object contains four vital architectural keys:
        </p>
        <ol>
          <li><code>/MediaBox</code>: Defines the physical page boundaries in default user space units.</li>
          <li><code>/CropBox</code>: Defines the visible display region presented by viewer software.</li>
          <li><code>/Contents</code>: Points to one or more content streams containing the sequential PostScript-like drawing operators that render text, lines, and shapes.</li>
          <li><code>/Resources</code>: A dictionary enumerating all external fonts, color spaces, and graphical sub-objects required to execute the instructions in the <code>/Contents</code> stream.</li>
        </ol>

        <h4 className="text-xl font-bold text-pdf-dark mt-6 mb-2">The Five Page Boundary Boxes in ISO 32000</h4>
        <p>
          A frequent source of misplacement bugs in custom PDF scripts is assuming every page origin is <code>(0, 0)</code>. The PDF specification establishes five distinct, nested bounding boxes:
        </p>
        <ul>
          <li><strong>/MediaBox:</strong> The absolute physical medium boundary (e.g., paper sheet size). All other boxes must be completely contained within this box.</li>
          <li><strong>/CropBox:</strong> The visual clipping region displayed by PDF viewers. If an architectural blueprint has a MediaBox of <code>[0 0 1000 1000]</code> but a CropBox of <code>[100 100 900 900]</code>, the viewer hides the outer 100 points. Placing an image at <code>(50, 50)</code> renders it completely invisible off-screen!</li>
          <li><strong>/BleedBox:</strong> Used in commercial prepress production to define the region where background images and colors must extend to allow for slight mechanical misalignments during physical paper cutting.</li>
          <li><strong>/TrimBox:</strong> The intended finished dimensions of the page after commercial trimming.</li>
          <li><strong>/ArtBox:</strong> Defines the meaningful editorial content area (such as the text column in a magazine), excluding white margins.</li>
        </ul>

        <h4 className="text-xl font-bold text-pdf-dark mt-6 mb-2">Incremental Updates and the Cross-Reference Table</h4>
        <p>
          At the end of every valid PDF file sits the <strong>Cross-Reference Table (XRef)</strong> and <strong>Trailer Dictionary</strong>. The XRef table stores byte offsets for every indirect object, enabling PDF readers to perform random-access lookups without reading the entire multi-gigabyte document into memory.
        </p>
        <p>
          When modifying a document, PDF supports <strong>Incremental Updates</strong>. Rather than rewriting the entire file from scratch, an engine can append new objects (such as our new Image XObject and updated page dictionary) directly to the end of the existing file, appending a secondary XRef section pointing backward to the original table via the <code>/Prev</code> trailer key. This incremental architecture allows our browser-side tool to modify multi-hundred-page documents in fractions of a second.
        </p>
      </section>

      {/* SECTION 3 */}
      <section id="xobject-image-dict" className="pt-6">
        <h3 className="text-2xl font-bold text-pdf-dark tracking-tight flex items-center gap-2">
          <ImageIcon className="w-6 h-6 text-pdf-primary" /> 3. The XObject Image Dictionary: How Bitmaps Live in a PDF
        </h3>
        <p>
          When you insert a photograph, diagram, or signature into a PDF, the image data is never written directly inside the page's <code>/Contents</code> text stream. Doing so would bloat the drawing stream and prevent asset deduplication.
        </p>
        <p>
          Instead, the image is packaged into an <strong>External Object</strong>, formally designated in ISO 32000 as an <strong>XObject</strong> with subtype <code>/Image</code> (an <em>Image XObject</em>). An Image XObject is an indirect stream object that completely isolates raw bitmap samples from drawing instructions:
        </p>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-xs my-4 overflow-x-auto leading-relaxed not-prose">
          <div>14 0 obj</div>
          <div>&lt;&lt;</div>
          <div>  /Type /XObject</div>
          <div>  /Subtype /Image</div>
          <div>  /Width 1200</div>
          <div>  /Height 800</div>
          <div>  /ColorSpace /DeviceRGB</div>
          <div>  /BitsPerComponent 8</div>
          <div>  /Filter /DCTDecode</div>
          <div>  /Length 245192</div>
          <div>&gt;&gt;</div>
          <div>stream</div>
          <div>... [Raw Binary JPEG DCT Stream Payload] ...</div>
          <div>endstream</div>
          <div>endobj</div>
        </div>
        <p>
          Let us dissect the mandatory architectural keys within this dictionary:
        </p>
        <ul>
          <li><strong><code>/Width</code> and <code>/Height</code>:</strong> Specify the exact integer pixel dimensions of the source bitmap raster. Note that these are pixel dimensions, completely independent of the physical rendered size on the page canvas.</li>
          <li><strong><code>/ColorSpace</code>:</strong> Informs the rendering engine how to interpret binary channel samples. Common values include <code>/DeviceRGB</code> (three 8-bit components: Red, Green, Blue), <code>/DeviceCMYK</code> (four 8-bit components: Cyan, Magenta, Yellow, Black for prepress printing), and <code>/DeviceGray</code> (single 8-bit component for grayscale photos or alpha transparency masks).</li>
          <li><strong><code>/BitsPerComponent</code>:</strong> The bit depth per color sample. Modern photos and signatures almost universally use <code>8</code> (providing 256 gradations per channel, or 16.7 million colors in RGB). Monochrome line art may use <code>1</code>.</li>
          <li><strong><code>/Filter</code>:</strong> The decompression codec required to unpack the stream. For photographic JPGs, <code>/DCTDecode</code> is used, allowing the browser to inject the pre-compressed JPEG payload directly without decoding and re-compressing. For PNGs and crisp signatures, <code>/FlateDecode</code> (ZLIB/Deflate) is deployed.</li>
        </ul>
        <p>
          Once the XObject is allocated in the document's cross-reference table, the page's <code>/Resources</code> dictionary registers a symbolic alias under its <code>/XObject</code> sub-dictionary:
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs my-3 overflow-x-auto not-prose">
          /Resources &lt;&lt; /XObject &lt;&lt; /ImgSignature 14 0 R &gt;&gt; &gt;&gt;
        </div>
        <p>
          This decoupling provides massive structural efficiency: if a corporate letterhead logo or watermark appears on all 100 pages of a document, the heavy image data is stored exactly once in Object 14. All 100 pages simply point their resource dictionaries to <code>14 0 R</code>, preventing multi-megabyte document inflation.
        </p>
      </section>

      {/* SECTION 4 */}
      <section id="coordinate-affine-math" className="pt-6">
        <h3 className="text-2xl font-bold text-pdf-dark tracking-tight flex items-center gap-2">
          <Terminal className="w-6 h-6 text-pdf-primary" /> 4. Coordinates, User Space &amp; Affine Transformation Matrix Mathematics
        </h3>
        <p>
          The most intellectually demanding aspect of PDF image insertion lies in <strong>Coordinate Space Transformation</strong>. In conventional web frontend engineering (HTML/CSS DOM and HTML5 Canvas), the origin point <code>(0, 0)</code> sits at the <em>top-left corner</em> of the viewport, with the positive Y-axis projecting downward.
        </p>
        <p>
          In standard PDF architecture, default <strong>User Space</strong> follows the Cartesian coordinate system inherited from PostScript: the origin <code>(0, 0)</code> resides at the <strong>bottom-left corner</strong> of the page, with the positive Y-axis pointing upward and the positive X-axis pointing to the right.
        </p>
        <p>
          Furthermore, PDF user space is measured strictly in typographical <strong>points</strong>, defined mathematically as:
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm my-3 overflow-x-auto not-prose">
          1 point = 1/72 inch = 0.352778 millimeters (72 points = exactly 1 physical inch)
        </div>
        <p>
          A standard US Letter page measures 8.5 x 11 inches, translating to <code>612 x 792 points</code>. A standard international ISO A4 page measures 210 x 297 millimeters, translating to <code>595.28 x 841.89 points</code>.
        </p>

        <h4 className="text-xl font-bold text-pdf-dark mt-6 mb-2">The Unit Square Mapping Paradigm</h4>
        <p>
          In PDF drawing architecture, an Image XObject has no intrinsic physical size or position. By default, every image is defined on a theoretical <strong>unit square</strong> spanning from <code>(0, 0)</code> to <code>(1, 1)</code>.
        </p>
        <p>
          To render an image at a specific location <code>(x, y)</code> with a specific width <code>w</code> and height <code>h</code>, the drawing stream must manipulate the <strong>Current Transformation Matrix (CTM)</strong> using an affine 3x3 transformation matrix. The 6-parameter matrix operator <code>cm</code> maps source coordinates to device coordinates:
        </p>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-xs my-4 overflow-x-auto leading-relaxed not-prose">
          <div>[ x'  y'  1 ] = [ x  y  1 ] * [ a  b  0 ]</div>
          <div>                              [ c  d  0 ]</div>
          <div>                              [ e  f  1 ]</div>
          <div className="mt-2 text-pdf-primary">Where:</div>
          <div>  a = horizontal scale factor (target width w in points)</div>
          <div>  b = horizontal skew / shear</div>
          <div>  c = vertical skew / shear</div>
          <div>  d = vertical scale factor (target height h in points)</div>
          <div>  e = horizontal translation (target X offset in points)</div>
          <div>  f = vertical translation (target Y offset in points)</div>
        </div>
        <p>
          To paint the image without corrupting the surrounding text and vector graphics, the PDF drawing stream must encapsulate the operation in graphics state preservation operators:
        </p>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-xs my-4 overflow-x-auto leading-relaxed not-prose">
          <div>q                            % Save current graphics state</div>
          <div>  w 0 0 h x y cm             % Concatenate transformation matrix: scale to w,h and translate to x,y</div>
          <div>  /ImgSignature Do           % Paint the Image XObject onto the transformed canvas</div>
          <div>Q                            % Restore original graphics state</div>
        </div>
        <p>
          The operator <code>q</code> saves clipping paths, color spaces, and CTM state to the graphics stack; <code>cm</code> scales the 1x1 unit square to <code>w</code> by <code>h</code> points and moves the anchor to <code>(x, y)</code>; <code>/ImgSignature Do</code> paints the image raster; and <code>Q</code> restores the canvas state, ensuring subsequent text drawing operations proceed unaffected.
        </p>

        <h4 className="text-xl font-bold text-pdf-dark mt-6 mb-2">Handling Rotated Pages (/Rotate) and Trigonometric Matrices</h4>
        <p>
          In production document workflows, scanned contracts, mobile uploads, and landscape spreadsheets frequently carry a <code>/Rotate</code> attribute in their page dictionary (e.g., <code>/Rotate 90</code>, <code>180</code>, or <code>270</code>).
        </p>
        <p>
          The <code>/Rotate</code> key specifies that the viewing software must rotate the entire page clockwise before display. Crucially, the underlying coordinate space remains unrotated! If a developer attempts to draw an image at <code>(100, 100)</code> on a page rotated by 90 degrees, the image will appear in the wrong corner and rotated 90 degrees sideways on the viewer's screen.
        </p>
        <p>
          To draw an image upright on a rotated page, the affine matrix must incorporate rotational trigonometry:
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs my-2 overflow-x-auto not-prose">
          a = w * cos(theta),  b = w * sin(theta)<br />
          c = -h * sin(theta), d = h * cos(theta)
        </div>
        <p>
          For a 90-degree clockwise page rotation ($theta = -90^\circ$ or $270^\circ$ counter-clockwise):
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs my-2 overflow-x-auto not-prose">
          [ 0   w   0 ]<br />
          [ -h  0   0 ]<br />
          [ x   y   1 ]
        </div>
        <p>
          Our client-side tool automatically parses the inherited <code>/Rotate</code> dictionary value, translates screen-space drag-and-drop coordinates into target PDF user space, and applies the necessary matrix rotations to guarantee your signature or photo renders right-side up regardless of page orientation.
        </p>
      </section>

      {/* SECTION 5 */}
      <section id="transparency-smasks" className="pt-6">
        <h3 className="text-2xl font-bold text-pdf-dark tracking-tight flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-pdf-primary" /> 5. Transparency &amp; Soft Masks (/SMask): Inserting Clean PNG Signatures
        </h3>
        <p>
          One of the most frequent business requirements in digital document management is adding a scanned physical signature or corporate stamp onto an existing contract. If you insert a standard JPEG image of a signature, the signature is permanently boxed inside an opaque white rectangle. This white background obliterates contract lines, covers printed text, and immediately signals an amateur modification.
        </p>
        <p>
          To achieve clean, professional signature placement, the image must preserve transparent alpha channels. However, early PDF standards (PDF 1.0 through 1.3) had zero mathematical support for transparency. PostScript was an opaque imaging model: whichever object was painted last completely covered whatever lay beneath it.
        </p>
        <p>
          In 2001, Adobe introduced the <strong>PDF 1.4 Transparency Imaging Model</strong>, introducing <strong>Soft Masks (<code>/SMask</code>)</strong>.
        </p>
        <p>
          When you upload a 32-bit RGBA PNG image to our client-side tool:
        </p>
        <ol>
          <li>
            <strong>Channel Separation:</strong> The engine reads the raw PNG chunks and separates the interleaved <code>[R, G, B, A]</code> pixel array into two distinct data buffers:
            <ul>
              <li>Buffer 1: A 24-bit RGB pixel stream containing purely the color components.</li>
              <li>Buffer 2: An 8-bit grayscale pixel stream containing purely the alpha transparency values (ranging from 0 = completely transparent to 255 = completely opaque).</li>
            </ul>
          </li>
          <li>
            <strong>Mask Object Allocation:</strong> Buffer 2 is compiled into an independent grayscale Image XObject with <code>/ColorSpace /DeviceGray</code> and <code>/BitsPerComponent 8</code>.
          </li>
          <li>
            <strong>Dictionary Association:</strong> Buffer 1 is compiled into the primary Image XObject with <code>/ColorSpace /DeviceRGB</code>. Inside its dictionary, a pointer links to the mask object via the <code>/SMask</code> key:
            <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs my-2 overflow-x-auto not-prose">
              15 0 obj &lt;&lt; /Type /XObject /Subtype /Image /Width 600 /Height 200 /ColorSpace /DeviceRGB /SMask 16 0 R ... &gt;&gt;
            </div>
          </li>
        </ol>
        <p>
          When a PDF reader renders this composite XObject, it multiplies the color luminance by the soft mask's opacity coefficient at each pixel. Dark ink strokes render with full opacity, while transparent regions allow the underlying contract clauses, watermarks, and signature lines to show through with flawless vector clarity.
        </p>
      </section>

      {/* SECTION 6 */}
      <section id="compression-color-spaces" className="pt-6">
        <h3 className="text-2xl font-bold text-pdf-dark tracking-tight flex items-center gap-2">
          <Zap className="w-6 h-6 text-pdf-primary" /> 6. Compression Filters &amp; Color Space Science in PDF Architecture
        </h3>
        <p>
          A common pitfall of naive PDF manipulation software is exponential file size inflation. When users embed a 500 KB JPEG photo into a PDF, poorly programmed tools often decompress the JPEG into raw uncompressed bitmap arrays (for example, 4000 x 3000 x 3 bytes = 36 MB of uncompressed raster data) before re-encoding it using generic Flate compression, ballooning a 2-page document into a 40 MB monster that bounces off email server attachment limits.
        </p>
        <p>
          Our client-side engine avoids this through <strong>Native Stream Passthrough</strong>:
        </p>

        <h4 className="text-xl font-bold text-pdf-dark mt-6 mb-2">1. Photographic JPEGs (/DCTDecode)</h4>
        <p>
          JPEG images already utilize Discrete Cosine Transform (DCT) lossy compression, which discards high-frequency visual information imperceptible to human eyes. When our engine processes a JPG file, it does not decode the raster samples. It reads the JPEG's native JFIF markers (SOI, APP0, SOF0, SOS) to extract the pixel dimensions and color space, and directly copies the raw compressed byte stream into the PDF XObject stream tagged with <code>/Filter /DCTDecode</code>.
        </p>
        <p>
          This achieves two massive advantages: zero computational latency (no heavy browser canvas decoding) and <strong>zero generational loss</strong> (the image retains its exact original quality without second-generation compression artifacts).
        </p>

        <h4 className="text-xl font-bold text-pdf-dark mt-6 mb-2">2. Lossless Graphics &amp; Signatures (/FlateDecode)</h4>
        <p>
          PNG graphics, technical diagrams, stamps, and signatures rely on lossless prediction filters followed by ZLIB Deflate (Lempel-Ziv 1977 + Huffman coding). PDF natively supports Deflate streams via the <code>/FlateDecode</code> filter.
        </p>
        <p>
          Furthermore, PDF streams can deploy an optional <code>/DecodeParms &lt;&lt; /Predictor 15 /Columns &lt;width&gt; &gt;&gt;</code> dictionary. Predictor algorithms analyze adjacent horizontal pixels and store only the mathematical difference (delta). Because solid backgrounds (like white paper or transparent stamps) produce consecutive zeroes, Deflate compresses the payload to a fraction of its original memory footprint.
        </p>

        <h4 className="text-xl font-bold text-pdf-dark mt-6 mb-2">3. Prepress Color Profiles &amp; CMYK Workflow (/ICCBased)</h4>
        <p>
          In commercial book publishing, corporate packaging, and professional prepress printing, consumer RGB color spaces are insufficient. Offset printing presses combine physical inks: Cyan, Magenta, Yellow, and Key (Black).
        </p>
        <p>
          When images with embedded International Color Consortium (ICC) profiles are inserted into a PDF, the PDF engine encapsulates the raw profile inside an <code>/ICCBased</code> indirect stream object. The image dictionary references this profile under <code>/ColorSpace [ /ICCBased 18 0 R ]</code>.
        </p>
        <p>
          This guarantees that colors remain perceptually identical across different output devices. Whether printed on a high-speed commercial web press utilizing the US Web Coated (SWOP) v2 profile or rendered on an Apple Pro Display XDR utilizing the Display P3 color space, the embedded profile directs the color management module (CMM) on exact chromatic mapping.
        </p>
      </section>

      {/* SECTION 7 */}
      <section id="server-side-vulnerabilities" className="pt-6">
        <h3 className="text-2xl font-bold text-pdf-dark tracking-tight flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-amber-500" /> 7. The Acute Security &amp; Compliance Risks of Cloud-Based PDF Editors
        </h3>
        <p>
          When non-technical users need to insert an image or signature into a PDF, their immediate instinct is to search Google for "free online PDF editor." The vast majority of legacy websites operate on a <strong>Server-Side Processing Architecture</strong>:
        </p>
        <div className="p-6 bg-red-50 rounded-2xl border border-red-200 my-6 not-prose">
          <h4 className="text-base font-bold text-red-900 mb-2 flex items-center gap-2">
            <Lock className="w-5 h-5 text-red-600" /> The Insecure Server-Side Pipeline:
          </h4>
          <ol className="text-sm text-red-800 space-y-2 mb-0 list-decimal pl-5">
            <li>User uploads their private PDF and signature over the WAN via HTTP multipart POST.</li>
            <li>The remote server writes the unencrypted document to a temporary storage directory (e.g., <code>/var/tmp/uploads/</code>).</li>
            <li>A backend process (such as a headless Linux worker running Ghostscript or Poppler) opens the file and injects the image.</li>
            <li>The modified document is stored on a cloud bucket (e.g., AWS S3) and a download link is returned to the user.</li>
          </ol>
        </div>
        <p>
          For enterprise organizations, legal practices, medical professionals, and security-conscious individuals, this workflow represents an unacceptable vulnerability:
        </p>
        <ul>
          <li>
            <strong>Exfiltration of Biometric Signatures:</strong> A physical signature is a primary authentication credential for banking transactions, real estate deeds, and corporate contracts. Transmitting high-resolution PNG signatures to anonymous third-party servers exposes executives to credential theft and document forgery.
          </li>
          <li>
            <strong>Regulatory Violations (GDPR, HIPAA, SOC 2):</strong> Under the European Union General Data Protection Regulation (GDPR) and the US Health Insurance Portability and Accountability Act (HIPAA), transmitting documents containing personally identifiable information (PII) or protected health information (PHI) to unvetted cloud processors constitutes an illegal data transfer subject to multi-million-dollar statutory fines.
          </li>
          <li>
            <strong>Targeted Data Mining:</strong> Free utility websites often fund operations by aggregating corporate documents, analyzing contract counter-parties, and harvesting email addresses for marketing brokers.
          </li>
        </ul>

        <h4 className="text-xl font-bold text-pdf-dark mt-6 mb-2">The Zero-Trust Client-Side Solution</h4>
        <p>
          Our platform operates under a strict <strong>Zero-Trust Client-Side Architecture</strong>. The entire Cos object parsing, cross-reference table traversal, image XObject creation, and binary file serialization execute locally within your device's browser memory via optimized WebAssembly and JavaScript primitives (<code>pdf-lib</code> and <code>Uint8Array</code>).
        </p>
        <p>
          Your documents and images <strong>never traverse the internet, never touch our servers, and never reside in external cloud storage</strong>. Once processing concludes and you download the modified document, all buffers in browser volatile memory are instantly purged.
        </p>
      </section>

      {/* SECTION 8 */}
      <section id="lossless-preservation" className="pt-6">
        <h3 className="text-2xl font-bold text-pdf-dark tracking-tight flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-green-600" /> 8. Lossless Preservation: Non-Destructive Layering vs Destructive Flattening
        </h3>
        <p>
          Many low-grade PDF manipulation tools achieve image insertion through <strong>Destructive Canvas Flattening</strong>. In this flawed workflow:
        </p>
        <ol>
          <li>The tool converts every page of the original PDF into a 72 DPI or 150 DPI canvas raster image.</li>
          <li>It paints your uploaded image on top of the raster canvas.</li>
          <li>It generates a brand-new PDF where each page is literally just a giant, flat JPEG.</li>
        </ol>
        <p>
          This destructive approach destroys the foundational utility of the PDF:
        </p>
        <ul>
          <li><strong>Text Searchability is Obliterated:</strong> All underlying text characters, Unicode font mappings, and OCR layers are permanently erased. Users cannot search for keywords (<code>Ctrl+F</code>) or copy text.</li>
          <li><strong>Accessibility Screen Readers Fail:</strong> Screen readers deployed by visually impaired users rely on structured text tags (PDF/UA standard). Rasterized pages read as blank images.</li>
          <li><strong>Vector Crispness is Lost:</strong> Architectural blueprints, vector logos, and fonts blur heavily when zoomed in or printed on high-resolution 1200 DPI office printers.</li>
          <li><strong>File Sizes Explode:</strong> A lightweight 100 KB vector document balloons to 15 MB of uncompressed raster pages.</li>
        </ul>
        <p>
          Our engine deploys <strong>Non-Destructive Layer Injection</strong>. We parse the binary document structure, append the new Image XObject into the existing resource dictionary, and insert clean <code>q ... cm ... Do ... Q</code> operators into the content stream. Every original TrueType/OpenType font, vector curve, interactive form field, bookmark, and text character remains 100% untouched, vector-sharp, and fully searchable.
        </p>

        <h4 className="text-xl font-bold text-pdf-dark mt-6 mb-2">Preserving PDF/A Archival Standards (ISO 19005)</h4>
        <p>
          In government archives, pharmaceutical drug trials, and enterprise legal records, documents must comply with <strong>PDF/A (ISO 19005)</strong>, the international standard for long-term digital preservation.
        </p>
        <p>
          PDF/A strictly forbids features that could jeopardize future rendering fidelity across decades:
        </p>
        <ul>
          <li><strong>Zero Device-Dependent Colors:</strong> Raw uncalibrated RGB or CMYK images without an explicit <code>/OutputIntent</code> dictionary are strictly prohibited in PDF/A-1.</li>
          <li><strong>Mandatory Embedding:</strong> All fonts, color profiles, and image metadata must be 100% self-contained within the file; external network references are banned.</li>
          <li><strong>No Dynamic Executables:</strong> Embedded JavaScript, audio/video streams, and external encryption envelopes are prohibited.</li>
        </ul>
        <p>
          By performing structural, non-destructive layer injection rather than flattening, our client-side tool ensures that documents pre-compiled to PDF/A standards retain their valid metadata structures, embedded fonts, and long-term regulatory compliance.
        </p>
      </section>

      {/* SECTION 9 */}
      <section id="production-workflows" className="pt-6">
        <h3 className="text-2xl font-bold text-pdf-dark tracking-tight flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-pdf-primary" /> 9. Enterprise Workflows and Production Field Scenarios
        </h3>
        <p>
          Mastering client-side PDF image insertion unlocks critical operational efficiencies across diverse business sectors:
        </p>
        <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
          <div className="p-6 bg-pdf-bg/40 rounded-2xl border border-pdf-gray/30">
            <h4 className="font-bold text-pdf-dark text-base mb-2">Legal &amp; Executive Contract Signing</h4>
            <p className="text-sm text-pdf-gray leading-relaxed mb-0">
              Execute non-disclosure agreements, commercial leases, and vendor contracts instantly. Upload a transparent PNG of your wet-ink signature, place it on the signature line, and export a legally compliant, non-flattened document without printing, scanning, or using expensive e-sign subscriptions.
            </p>
          </div>
          <div className="p-6 bg-pdf-bg/40 rounded-2xl border border-pdf-gray/30">
            <h4 className="font-bold text-pdf-dark text-base mb-2">Corporate Branding &amp; Invoicing</h4>
            <p className="text-sm text-pdf-gray leading-relaxed mb-0">
              Automated billing systems frequently emit plain, unstyled invoices. Freelancers and agencies can stamp high-resolution corporate logos and payment QR codes onto transaction receipts before sending them to enterprise accounts payable departments.
            </p>
          </div>
          <div className="p-6 bg-pdf-bg/40 rounded-2xl border border-pdf-gray/30">
            <h4 className="font-bold text-pdf-dark text-base mb-2">Insurance Adjusting &amp; Field Audits</h4>
            <p className="text-sm text-pdf-gray leading-relaxed mb-0">
              Insurance adjusters inspecting property damage can append multi-photo damage reports, vehicle VIN plate photographs, and repair estimates directly into initial claim packets as high-resolution supplementary evidence pages.
            </p>
          </div>
          <div className="p-6 bg-pdf-bg/40 rounded-2xl border border-pdf-gray/30">
            <h4 className="font-bold text-pdf-dark text-base mb-2">Architectural Plan Revision</h4>
            <p className="text-sm text-pdf-gray leading-relaxed mb-0">
              Civil engineers and construction managers can layer inspection stamps ("APPROVED", "REVISED", "PERMIT ISSUED") and photographic site progress captures onto large-format CAD PDF drawings without corrupting vector line weights.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10 */}
      <section id="backend-blueprints" className="pt-6">
        <h3 className="text-2xl font-bold text-pdf-dark tracking-tight flex items-center gap-2">
          <Terminal className="w-6 h-6 text-pdf-primary" /> 10. Automated PDF Image Insertion in Modern Backend Engineering
        </h3>
        <p>
          For automated microservices, reporting pipelines, and enterprise backend architectures, programmatic image injection requires robust library integration. Below are production blueprints across leading server ecosystems:
        </p>

        <div className="space-y-6 my-6 not-prose">
          {/* Node.js pdf-lib */}
          <div className="border border-pdf-gray/30 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-pdf-bg/60 px-5 py-3 border-b border-pdf-gray/30 font-bold text-sm text-pdf-dark flex items-center justify-between">
              <span>Node.js / Modern Browser (pdf-lib)</span>
              <span className="text-xs font-mono text-pdf-primary">ESM / TypeScript</span>
            </div>
            <pre className="p-5 bg-slate-900 text-slate-100 text-xs font-mono overflow-x-auto m-0">
              {`import { PDFDocument } from 'pdf-lib';
import fs from 'fs/promises';

async function embedSignatureOnPdf(pdfPath, pngPath, outputPath) {
  // 1. Read existing PDF and PNG image into memory buffers
  const existingPdfBytes = await fs.readFile(pdfPath);
  const pngImageBytes = await fs.readFile(pngPath);

  // 2. Load the PDF document
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // 3. Embed the PNG (automatically extracts alpha channel into /SMask)
  const pngImage = await pdfDoc.embedPng(pngImageBytes);
  const { width, height } = pngImage.scale(0.5); // Scale to 50%

  // 4. Access target page (e.g., page 1, 0-indexed)
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // 5. Draw image at target coordinates (bottom-left origin)
  firstPage.drawImage(pngImage, {
    x: 100,
    y: 150,
    width: width,
    height: height,
  });

  // 6. Serialize and write modified PDF
  const modifiedPdfBytes = await pdfDoc.save();
  await fs.writeFile(outputPath, modifiedPdfBytes);
}

embedSignatureOnPdf('contract.pdf', 'signature.png', 'signed_contract.pdf');`}
            </pre>
          </div>

          {/* Python PyMuPDF */}
          <div className="border border-pdf-gray/30 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-pdf-bg/60 px-5 py-3 border-b border-pdf-gray/30 font-bold text-sm text-pdf-dark flex items-center justify-between">
              <span>Python 3 (PyMuPDF / fitz)</span>
              <span className="text-xs font-mono text-pdf-primary">Python 3.8+</span>
            </div>
            <pre className="p-5 bg-slate-900 text-slate-100 text-xs font-mono overflow-x-auto m-0">
              {`import fitz  # PyMuPDF

def insert_image_pymupdf(pdf_file, img_file, output_file):
    doc = fitz.open(pdf_file)
    page = doc[0]  # First page
    
    # Define bounding box rectangle: (x0, y0, x1, y1)
    # PyMuPDF uses top-left origin coordinates!
    rect = fitz.Rect(100, 500, 300, 600)
    
    # Insert image stream directly into page resources
    page.insert_image(rect, filename=img_file, keep_proportion=True)
    
    doc.save(output_file, garbage=4, deflate=True)
    doc.close()

insert_image_pymupdf("invoice.pdf", "logo.jpg", "branded_invoice.pdf")`}
            </pre>
          </div>

          {/* Go (pdfcpu) */}
          <div className="border border-pdf-gray/30 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-pdf-bg/60 px-5 py-3 border-b border-pdf-gray/30 font-bold text-sm text-pdf-dark flex items-center justify-between">
              <span>Go (pdfcpu API)</span>
              <span className="text-xs font-mono text-pdf-primary">Go 1.19+</span>
            </div>
            <pre className="p-5 bg-slate-900 text-slate-100 text-xs font-mono overflow-x-auto m-0">
              {`package main

import (
	"github.com/pdfcpu/pdfcpu/pkg/api"
	"github.com/pdfcpu/pdfcpu/pkg/pdfcpu/model"
)

func stampImageGo(inFile, outFile, imgFile string) error {
	wm, err := api.ImageWatermark(imgFile, "scale:0.5 abs, pos:br, rot:0, op:1.0", true, false, model.POINTS)
	if err != nil {
		return err
	}
	return api.AddWatermarksFile(inFile, outFile, []string{"1"}, wm, nil)
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 11 */}
      <section id="file-size-optimization" className="pt-6">
        <h3 className="text-2xl font-bold text-pdf-dark tracking-tight flex items-center gap-2">
          <Layers className="w-6 h-6 text-pdf-primary" /> 11. Technical Optimization: DPI Physics and File Size Management
        </h3>
        <p>
          When inserting images into PDF documents, understanding the mathematical relationship between <strong>Pixel Resolution</strong>, <strong>Physical Display Dimensions</strong>, and <strong>Dots Per Inch (DPI)</strong> is critical to avoid slow rendering times and excessive file sizes.
        </p>
        <p>
          In PDF user space, the rendered size of an image is dictated entirely by the transformation matrix <code>cm</code> or the <code>drawImage</code> width/height properties in points (1/72 inch). The effective resolution of the rendered image is calculated as:
        </p>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-sm my-4 overflow-x-auto not-prose">
          <code>Effective DPI = (Pixel Width / Rendered Width in Points) * 72</code>
        </div>
        <p>
          Consider a smartphone camera photo measuring $4032 \times 3024$ pixels (a 12-megapixel JPEG, roughly 6 MB in file size). If you insert this photo onto a standard US Letter page spanning a display box of $300 \times 225$ points (roughly 4.16 x 3.12 inches):
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs my-2 overflow-x-auto not-prose">
          Effective DPI = (4032 / 300) * 72 = 13.44 * 72 = 967.68 DPI
        </div>
        <p>
          High-end commercial laser printers achieve maximum visual fidelity at <strong>300 DPI</strong>. Display monitors (including Retina and 4K screens) rarely display more than <strong>150 to 200 DPI</strong>. Embedding an image at 968 DPI wastes substantial storage space and forces mobile PDF viewers to expend extensive memory buffers downsampling pixels during scrolling.
        </p>
        <p>
          For optimal production documents:
        </p>
        <ul>
          <li><strong>Digital-Only Viewing (Web/Mobile):</strong> Target 150 DPI. A 4 x 3 inch image requires $600 \times 450$ pixels.</li>
          <li><strong>High-Quality Office Printing:</strong> Target 300 DPI. A 4 x 3 inch image requires $1200 \times 900$ pixels.</li>
          <li><strong>Signatures and Stamps:</strong> Crop aggressively around the ink strokes before embedding to eliminate empty whitespace, preserving high DPI while minimizing byte payload.</li>
        </ul>
      </section>

      {/* SECTION 12: FAQS */}
      <section id="technical-faqs" className="pt-8 border-t border-pdf-gray/30 mt-12">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-pdf-dark mb-6 tracking-tight">
          12. Technical Frequently Asked Questions (FAQ)
        </h3>
        <div className="space-y-4 not-prose">
          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>Does this tool upload my signature or confidential PDF to remote servers?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              Absolutely not. Our application operates on a strict Zero-Trust client-side architecture. All PDF dictionary manipulation, binary XObject embedding, and file assembly execute 100% locally within your browser using WebAssembly and JavaScript primitives. Your documents, signatures, and images never traverse the internet and are never logged or stored on remote servers.
            </p>
          </details>

          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>Can I insert transparent PNG images without an ugly white background box?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              Yes! Our engine fully supports 32-bit RGBA PNG alpha channels. It automatically extracts the 8-bit alpha channel into an independent grayscale Soft Mask (/SMask) XObject linked to the primary RGB color stream. This allows signatures, corporate stamps, and transparent watermarks to overlay seamlessly across underlying contract clauses and lines without blocking text.
            </p>
          </details>

          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>Will adding an image make my existing PDF text blurry or unsearchable?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              No. Unlike destructive online editors that rasterize entire PDF pages into flat JPEG bitmaps, our tool performs non-destructive layer injection. The image is added as an external XObject dictionary and drawn via discrete canvas operators, leaving all underlying TrueType/OpenType vector fonts, selectable text layers, bookmarks, and form fields 100% untouched and searchable.
            </p>
          </details>

          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>How does this tool place and scale uploaded images?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              When you upload images, our tool automatically appends each image as a cleanly scaled, brand-new full-resolution page matching the target document dimensions while strictly preserving original aspect ratios. This ensures photographs, receipts, and exhibits integrate seamlessly without stretching or distortion.
            </p>
          </details>

          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>What image file formats are supported for embedding?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              We natively support standard JPEG (.jpg, .jpeg) and Portable Network Graphics (.png) formats. JPEGs are embedded using native /DCTDecode stream passthrough to preserve original quality, while PNGs are embedded using lossless /FlateDecode compression with full alpha channel transparency. If you have Apple iPhone photos in .heic format, first convert them using our <Link href="/tools/pdf-tools/heic-to-jpg" className="font-semibold text-pdf-primary underline hover:text-pdf-primary/80">HEIC to JPG Converter</Link> prior to embedding.
            </p>
          </details>

          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>Are there file size or page count limitations when inserting images?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              Because all processing occurs within your browser's local RAM and WebAssembly memory heap rather than across constrained cloud server buffers, there are no artificial file size ceilings or page caps imposed by our platform. You can comfortably process multi-hundred-page documents and multi-megabyte image arrays subject only to your device's available memory.
            </p>
          </details>

          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>Can I use this tool on mobile devices (iOS Safari, Android Chrome)?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              Yes. Our tool is fully responsive and leverages modern ECMAScript standards and HTML5 File APIs supported natively across iOS Safari, Android Chrome, iPadOS, and desktop browsers. You can snap a photo or select an image directly from your smartphone camera roll and insert it into a PDF without installing native third-party apps.
            </p>
          </details>

          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>Why do PDF coordinates start at the bottom-left instead of the top-left?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              The PDF format directly inherited its coordinate model from PostScript, which adopted standard Cartesian geometric coordinates where origin (0, 0) is at the bottom-left and the positive Y-axis increases upward. Web DOM and Canvas models adopted a top-left origin. Our internal math automatically converts between screen space and PDF user space to ensure accurate placement.
            </p>
          </details>

          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>Does inserting an image break digital signatures or password encryption?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              If a PDF document contains a cryptographic digital signature (DocuSign, Adobe Sign), modifying any byte—including inserting an image—will invalidate the cryptographic hash verification, as intended by security standards. For password-protected documents, you must unlock the document with its owner password before structural modifications can be executed.
            </p>
          </details>

          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>How can I optimize the file size of my PDF after embedding multiple photos?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              To minimize file size, downsample excessive multi-megapixel smartphone photos (e.g. 12 MP) to roughly 1200 x 900 pixels (300 DPI) before embedding, crop unnecessary whitespace around signatures, and utilize our companion PDF Compress tool to optimize Deflate streams across the final document.
            </p>
          </details>
        </div>
      </section>

      {/* RELATED TOOLS / CROSS-NAVIGATION */}
      <section className="mt-12 p-8 bg-gradient-to-br from-pdf-bg to-white rounded-3xl border border-pdf-gray/30 not-prose">
        <h4 className="text-xl font-bold text-pdf-dark mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-pdf-primary" /> Explore Related PDF &amp; Document Utilities
        </h4>
        <p className="text-sm text-pdf-gray mb-6 leading-relaxed">
          Complement your PDF image insertion and document editing workflows with our suite of free, client-side productivity utilities:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/tools/pdf-tools/merge-pdf"
            className="p-4 bg-white rounded-xl border border-pdf-gray/30 hover:border-pdf-primary hover:shadow-md transition-all group"
          >
            <div className="font-bold text-sm text-pdf-dark group-hover:text-pdf-primary mb-1">Merge PDF</div>
            <div className="text-xs text-pdf-gray">Combine multiple PDF documents into a single unified file.</div>
          </Link>
          <Link
            href="/tools/pdf-tools/pdf-compress"
            className="p-4 bg-white rounded-xl border border-pdf-gray/30 hover:border-pdf-primary hover:shadow-md transition-all group"
          >
            <div className="font-bold text-sm text-pdf-dark group-hover:text-pdf-primary mb-1">Compress PDF</div>
            <div className="text-xs text-pdf-gray">Reduce document file sizes without compromising visual clarity.</div>
          </Link>
          <Link
            href="/tools/pdf-tools/rotate-pdf"
            className="p-4 bg-white rounded-xl border border-pdf-gray/30 hover:border-pdf-primary hover:shadow-md transition-all group"
          >
            <div className="font-bold text-sm text-pdf-dark group-hover:text-pdf-primary mb-1">Rotate PDF</div>
            <div className="text-xs text-pdf-gray">Permanently rotate inverted or landscape pages 90, 180, or 270 degrees.</div>
          </Link>
          <Link
            href="/tools/pdf-tools/excel-to-pdf"
            className="p-4 bg-white rounded-xl border border-pdf-gray/30 hover:border-pdf-primary hover:shadow-md transition-all group"
          >
            <div className="font-bold text-sm text-pdf-dark group-hover:text-pdf-primary mb-1">Excel to PDF</div>
            <div className="text-xs text-pdf-gray">Convert spreadsheets (.xlsx, .xls, .csv) into clean PDF vector tables.</div>
          </Link>
          <Link
            href="/tools/pdf-tools/password-protect"
            className="p-4 bg-white rounded-xl border border-pdf-gray/30 hover:border-pdf-primary hover:shadow-md transition-all group"
          >
            <div className="font-bold text-sm text-pdf-dark group-hover:text-pdf-primary mb-1">Protect PDF</div>
            <div className="text-xs text-pdf-gray">Encrypt confidential documents with strong 256-bit AES passwords.</div>
          </Link>
        </div>
      </section>
    </article>
  );
}
