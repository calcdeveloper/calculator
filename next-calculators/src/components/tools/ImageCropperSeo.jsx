import React from 'react';
import Link from 'next/link';
import { 
  Crop, 
  ShieldCheck, 
  RefreshCw, 
  Target, 
  HelpCircle, 
  Layers, 
  FileCheck, 
  Info, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  BookOpen, 
  Sliders, 
  Smartphone, 
  Camera, 
  Lock,
  Maximize2,
  Grid
} from 'lucide-react';

export default function ImageCropperSeo() {
  return (
    <article className="prose prose-slate max-w-none bg-pdf-white p-6 sm:p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-pdf-gray mt-12 text-pdf-dark leading-relaxed">
      
      {/* HEADER SECTION */}
      <header className="border-b border-pdf-gray/30 pb-8 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pdf-primary/10 text-pdf-primary text-xs font-bold uppercase tracking-wider mb-4">
          <Crop className="w-4 h-4" /> Next-Generation In-Browser Image Cropping Engine
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pdf-dark tracking-tight leading-tight">
          Mastering Image Cropping: Mathematical Precision, Composition Principles, and Portal Compliance
        </h2>
        <p className="text-base sm:text-lg text-pdf-gray mt-4 max-w-4xl leading-relaxed">
          Discover the definitive engineering guide to digital image cropping. Explore the geometry of coordinate mapping, HTML5 Canvas 2D excision pipelines, aspect ratio math, international passport photo standards, and zero-trust browser privacy.
        </p>
      </header>

      {/* SECTION 1 */}
      <section id="coordinate-geometry" className="mb-12">
        <h3 className="text-2xl font-bold text-pdf-dark flex items-center gap-2 mb-4">
          <Maximize2 className="w-6 h-6 text-pdf-primary" /> 1. The Geometry and Coordinate Mathematics of Image Cropping
        </h3>
        <p>
          Digital image cropping is an affine coordinate transformation that defines a two-dimensional bounding box within an existing Cartesian raster grid. In web graphics architectures, the coordinate origin (0, 0) is positioned at the top-left corner, with values of X increasing horizontally to the right and values of Y increasing vertically downward.
        </p>
        <p>
          When a user initiates cropping, they establish an axis-aligned bounding box (AABB) parameterized by four scalar values: horizontal and vertical origin offsets plus selection width and height:
        </p>
        <div className="bg-pdf-bg/50 p-6 rounded-2xl border border-pdf-gray/30 my-6 font-mono text-sm leading-relaxed overflow-x-auto text-pdf-dark">
          Region of Interest ROI = [X_origin, Y_origin, Crop_Width, Crop_Height]<br />
          Where: 0 &lt;= X_origin &lt; Natural_Width, and 0 &lt;= Y_origin &lt; Natural_Height<br />
          Constraint: (X_origin + Crop_Width) &lt;= Natural_Width<br />
          Constraint: (Y_origin + Crop_Height) &lt;= Natural_Height
        </div>
        <p>
          A central challenge in web-based image manipulation is reconciling discrepancies between display dimensions in the browser DOM and the natural dimensions of the uploaded photo. On high-resolution displays, a 4000x3000 pixel photograph is scaled by CSS layout constraints to fit an 800x600 pixel interactive editing container.
        </p>
        <p>
          Extracting pixels directly from on-screen viewport coordinates would discard up to 96% of native photo resolution. To preserve pristine fidelity, our engine computes dynamic scaling factors mapping viewport coordinates back to source pixels with sub-pixel precision:
        </p>
        <div className="bg-pdf-bg/50 p-6 rounded-2xl border border-pdf-gray/30 my-6 font-mono text-sm leading-relaxed overflow-x-auto text-pdf-dark">
          Scale_Factor_X = Natural_Width / Viewport_Rendered_Width<br />
          Scale_Factor_Y = Natural_Height / Viewport_Rendered_Height<br /><br />
          Source_X = Viewport_Drag_X * Scale_Factor_X<br />
          Source_Y = Viewport_Drag_Y * Scale_Factor_Y<br />
          Source_Width = Viewport_Drag_Width * Scale_Factor_X<br />
          Source_Height = Viewport_Drag_Height * Scale_Factor_Y
        </div>
        <p>
          By computing coordinate intersections at source resolution and factoring hardware pixel multipliers (devicePixelRatio), every pixel within the boundary is extracted losslessly across all devices.
        </p>
      </section>

      {/* SECTION 2 */}
      <section id="canvas-pipeline" className="mb-12">
        <h3 className="text-2xl font-bold text-pdf-dark flex items-center gap-2 mb-4">
          <Sliders className="w-6 h-6 text-pdf-primary" /> 2. The HTML5 Canvas 2D Cropping Pipeline Architecture
        </h3>
        <p>
          The computational heart of ToolsWizard Image Cropper is constructed upon modern HTML5 Canvas 2D rendering primitives, executing entirely in client-side memory without reliance on backend server clusters or remote API endpoints. The lifecycle of an in-browser cropping transaction follows a rigorous five-stage execution pipeline designed for instantaneous feedback and complete data security:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="p-6 rounded-2xl border border-pdf-gray/30 bg-white shadow-sm">
            <h4 className="font-bold text-base text-pdf-dark flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-full bg-pdf-primary/10 text-pdf-primary flex items-center justify-center text-xs font-bold">1</span>
              Local File Ingestion &amp; Blob Hydration
            </h4>
            <p className="text-sm text-pdf-gray leading-relaxed">
              When an image is dropped or selected, the browser File API creates an ephemeral object reference URL via URL.createObjectURL(file). This permits asynchronous hardware-accelerated image decoding into an in-memory HTMLImageElement without reading the entire raw file into JavaScript memory arrays as bloated Base64 strings.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-pdf-gray/30 bg-white shadow-sm">
            <h4 className="font-bold text-base text-pdf-dark flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-full bg-pdf-primary/10 text-pdf-primary flex items-center justify-center text-xs font-bold">2</span>
              Dynamic Aspect Ratio Normalization
            </h4>
            <p className="text-sm text-pdf-gray leading-relaxed">
              The engine measures the natural aspect ratio of the image (naturalWidth / naturalHeight) and computes CSS max-width and max-height letterboxing parameters. This prevents layout shift while establishing an interactive SVG gesture layer mapped to pointer events for drag-and-drop bounding box creation.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-pdf-gray/30 bg-white shadow-sm">
            <h4 className="font-bold text-base text-pdf-dark flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-full bg-pdf-primary/10 text-pdf-primary flex items-center justify-center text-xs font-bold">3</span>
              Off-Screen Memory Canvas Allocation
            </h4>
            <p className="text-sm text-pdf-gray leading-relaxed">
              Upon clicking the crop action, an isolated off-screen HTML5 canvas element is initialized in RAM. The width and height of this memory canvas are assigned exactly to Source_Width and Source_Height. Because the canvas is never attached to the visual DOM, no costly browser reflows or repaints occur during raster allocation.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-pdf-gray/30 bg-white shadow-sm">
            <h4 className="font-bold text-base text-pdf-dark flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-full bg-pdf-primary/10 text-pdf-primary flex items-center justify-center text-xs font-bold">4</span>
              Hardware-Accelerated Pixel Blitting
            </h4>
            <p className="text-sm text-pdf-gray leading-relaxed">
              The engine invokes CanvasRenderingContext2D.drawImage() using its full 9-parameter overload: drawImage(sourceImage, sx, sy, sWidth, sHeight, 0, 0, dWidth, dHeight). The local GPU reads the source pixel region directly from graphics memory and blits it into the destination buffer with zero intermediate software buffering.
            </p>
          </div>
        </div>

        <p>
          The ninth parameter of the drawImage specification is where the mathematical magic occurs. Rather than copying the entire bitmap into memory and subsequently slicing off unwanted outer arrays, the browser graphics engine performs a direct matrix copy of only the requested rectangle. Unselected pixels located outside the crop bounding box are simply ignored, never entering the destination memory buffer.
        </p>
        <p>
          Following the raster blit, the off-screen canvas is serialized into a standalone binary Blob via the asynchronous canvas.toBlob() method. For PNG and WebP files containing transparent areas, full alpha channel depth is preserved intact. For JPEG files, the background is composited cleanly without color shift. Finally, the newly created Blob is bound to a virtual download trigger, and URL.revokeObjectURL() is called to release browser RAM immediately, preventing memory leaks even during intensive batch cropping operations.
        </p>
      </section>

      {/* SECTION 3 */}
      <section id="aspect-ratios" className="mb-12">
        <h3 className="text-2xl font-bold text-pdf-dark flex items-center gap-2 mb-4">
          <Grid className="w-6 h-6 text-pdf-primary" /> 3. Aspect Ratio Standards and Visual Composition Principles
        </h3>
        <p>
          The aspect ratio (AR) of an image describes the proportional relationship between its horizontal width and vertical height, formally expressed as the ratio W:H. While changing an image physical pixel resolution alters its display sharpness, altering its aspect ratio changes its fundamental framing, optical balance, and composition. Professional photographers, UI designers, and document specialists rely on standardized aspect ratios to ensure harmonious presentation across physical and digital mediums:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse border border-pdf-gray/30 text-sm">
            <thead className="bg-pdf-bg/80 text-pdf-dark">
              <tr>
                <th className="p-3 border border-pdf-gray/30 font-bold">Aspect Ratio</th>
                <th className="p-3 border border-pdf-gray/30 font-bold">Decimal Ratio</th>
                <th className="p-3 border border-pdf-gray/30 font-bold">Primary Use Cases &amp; Target Applications</th>
                <th className="p-3 border border-pdf-gray/30 font-bold">Standard Resolutions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pdf-gray/20">
              <tr className="hover:bg-pdf-bg/30">
                <td className="p-3 border border-pdf-gray/30 font-semibold text-pdf-primary">1:1 (Square)</td>
                <td className="p-3 border border-pdf-gray/30 font-mono">1.000</td>
                <td className="p-3 border border-pdf-gray/30">Instagram profile pictures, WhatsApp avatars, LinkedIn headshots, e-commerce product grids, square album art.</td>
                <td className="p-3 border border-pdf-gray/30 font-mono">1080x1080, 800x800, 400x400</td>
              </tr>
              <tr className="hover:bg-pdf-bg/30">
                <td className="p-3 border border-pdf-gray/30 font-semibold text-pdf-primary">4:5 (Vertical)</td>
                <td className="p-3 border border-pdf-gray/30 font-mono">0.800</td>
                <td className="p-3 border border-pdf-gray/30">Instagram in-feed vertical portraits, mobile advertising banners, fashion showcase imagery.</td>
                <td className="p-3 border border-pdf-gray/30 font-mono">1080x1350, 864x1080</td>
              </tr>
              <tr className="hover:bg-pdf-bg/30">
                <td className="p-3 border border-pdf-gray/30 font-semibold text-pdf-primary">16:9 (Widescreen)</td>
                <td className="p-3 border border-pdf-gray/30 font-mono">1.777</td>
                <td className="p-3 border border-pdf-gray/30">YouTube video thumbnails, PowerPoint and Keynote slide decks, LinkedIn banners, cinematic landscape photography.</td>
                <td className="p-3 border border-pdf-gray/30 font-mono">1920x1080, 1280x720, 3840x2160</td>
              </tr>
              <tr className="hover:bg-pdf-bg/30">
                <td className="p-3 border border-pdf-gray/30 font-semibold text-pdf-primary">9:16 (Vertical Story)</td>
                <td className="p-3 border border-pdf-gray/30 font-mono">0.5625</td>
                <td className="p-3 border border-pdf-gray/30">Instagram Reels, TikTok short-form videos, YouTube Shorts, mobile full-screen lockscreens.</td>
                <td className="p-3 border border-pdf-gray/30 font-mono">1080x1920, 720x1280</td>
              </tr>
              <tr className="hover:bg-pdf-bg/30">
                <td className="p-3 border border-pdf-gray/30 font-semibold text-pdf-primary">3:2 (Classic 35mm)</td>
                <td className="p-3 border border-pdf-gray/30 font-mono">1.500</td>
                <td className="p-3 border border-pdf-gray/30">Standard DSLR and mirrorless camera sensors, 4x6 inch photographic prints, editorial photojournalism.</td>
                <td className="p-3 border border-pdf-gray/30 font-mono">6000x4000, 3000x2000, 1800x1200</td>
              </tr>
              <tr className="hover:bg-pdf-bg/30">
                <td className="p-3 border border-pdf-gray/30 font-semibold text-pdf-primary">4:3 (Traditional)</td>
                <td className="p-3 border border-pdf-gray/30 font-mono">1.333</td>
                <td className="p-3 border border-pdf-gray/30">Micro Four Thirds cameras, Apple iPad display panels, legacy television broadcasts, digital passport scans.</td>
                <td className="p-3 border border-pdf-gray/30 font-mono">4000x3000, 2048x1536, 1024x768</td>
              </tr>
              <tr className="hover:bg-pdf-bg/30">
                <td className="p-3 border border-pdf-gray/30 font-semibold text-pdf-primary">7:9 (Passport 3.5x4.5cm)</td>
                <td className="p-3 border border-pdf-gray/30 font-mono">0.777</td>
                <td className="p-3 border border-pdf-gray/30">Indian passport, UPSC Civil Services, SSC CGL/CHSL admit cards, Schengen visa photos, UK passport photos.</td>
                <td className="p-3 border border-pdf-gray/30 font-mono">350x450, 413x531, 700x900</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="text-xl font-bold text-pdf-dark mt-8 mb-3">Classical Compositional Rules in Cropping</h4>
        <p>
          Cropping is not merely a utility for removing clutter; it is a creative act that dictates where the viewer eye travels. By trimming peripheral distractions, an editor applies classical principles of visual design:
        </p>
        <ul className="list-disc pl-6 space-y-3 my-4">
          <li>
            <strong>The Rule of Thirds:</strong> Imagine dividing your image canvas into an imaginary 3 by 3 grid with two equally spaced horizontal lines and two equally spaced vertical lines. The four points where these lines intersect represent natural visual anchor points. By cropping an image so that key focal elements (such as a subject eyes in a portrait, or the horizon line in a landscape) align precisely along these grid lines, the composition becomes significantly more dynamic and visually compelling than placing the subject dead center.
          </li>
          <li>
            <strong>Golden Ratio (Phi = 1.618):</strong> Originating in classical architecture and biological growth patterns, the Golden Spiral leads the human eye inward along a logarithmic curve. When cropping complex documentary or street photography, aligning primary subjects along the golden rectangle focal node creates an innate sense of visual harmony and timeless aesthetic balance.
          </li>
          <li>
            <strong>Leading Lines and Gaze Direction:</strong> When framing a portrait or human subject, always ensure positive lead room in the direction the subject is looking or moving. If a person is looking toward the right of the frame, cropping away space behind their head and preserving negative space in front of their eyes creates anticipation and comfort. Inverting this by cutting off the direction of their gaze induces visual claustrophobia.
          </li>
          <li>
            <strong>Eliminating Edge Merges and Visual Tangents:</strong> A common amateur photography mistake is an edge merge, where an extraneous object in the background (such as a tree branch, pole, or stranger elbow) barely touches the edge of your subject silhouette. Precise cropping cleanly eliminates these tangential collisions, isolating your primary subject with crisp visual hierarchy.
          </li>
        </ul>
      </section>

      {/* SECTION 4 */}
      <section id="portal-specifications" className="mb-12">
        <h3 className="text-2xl font-bold text-pdf-dark flex items-center gap-2 mb-4">
          <FileCheck className="w-6 h-6 text-pdf-primary" /> 4. Official Examination and Government Portal Specifications
        </h3>
        <p>
          For millions of candidates submitting digital applications for civil services, public sector banks, university admissions, and international visas, image cropping is a mission-critical compliance gate. Uploading a photograph or scanned signature with improper borders, excessive background whitespace, or incorrect framing triggers automated portal validation scripts to reject the file instantly. Below is an exhaustive breakdown of mandatory technical specifications across major government and international authorities:
        </p>

        <div className="space-y-6 my-6">
          <div className="p-6 rounded-2xl border border-pdf-gray/30 bg-pdf-bg/30">
            <h4 className="text-lg font-bold text-pdf-dark mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pdf-primary"></span>
              UPSC (Union Public Service Commission) - Civil Services, NDA, CDS
            </h4>
            <p className="text-sm text-pdf-gray leading-relaxed mb-3">
              UPSC enforces strict digital biometric standards. Photos must show a clean, frontal view of the candidate face without spectacles or head coverings (except religious requirements).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono bg-white p-4 rounded-xl border border-pdf-gray/20">
              <div><strong>Photo Dimensions:</strong> 350x350 to 1000x1000 px (1:1)</div>
              <div><strong>Face Coverage:</strong> 70% to 80% of total image area</div>
              <div><strong>Signature Box:</strong> 350x150 to 1000x400 px (~7:3 AR)</div>
            </div>
            <p className="text-xs text-pdf-gray mt-2 italic">
              Pro-Tip: When capturing your signature with a smartphone, shadows from the phone camera will fall across the white paper. Use our cropper to crop tightly around the ink lines, completely excising peripheral shadows before compressing.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-pdf-gray/30 bg-pdf-bg/30">
            <h4 className="text-lg font-bold text-pdf-dark mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pdf-primary"></span>
              SSC (Staff Selection Commission) - CGL, CHSL, MTS, GD Constable
            </h4>
            <p className="text-sm text-pdf-gray leading-relaxed mb-3">
              SSC utilizes automated facial recognition and biometric deduplication during exam hall entry. Any photo where a physical printed photograph was scanned leaving white paper scanner borders is rejected automatically.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono bg-white p-4 rounded-xl border border-pdf-gray/20">
              <div><strong>Photo Size:</strong> 3.5 cm (W) x 4.5 cm (H) (~7:9 AR)</div>
              <div><strong>Pixel Target:</strong> 100x120 px to 350x450 px</div>
              <div><strong>Signature Target:</strong> 4.0 cm (W) x 2.0 cm (H) (2:1 AR)</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-pdf-gray/30 bg-pdf-bg/30">
            <h4 className="text-lg font-bold text-pdf-dark mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pdf-primary"></span>
              NTA (National Testing Agency) - NEET, JEE Main, CUET, UGC NET
            </h4>
            <p className="text-sm text-pdf-gray leading-relaxed mb-3">
              NTA applications require three distinct digital assets: a passport photograph with candidate name and date of photo imprinted at the bottom, a running handwriting signature, and clear left and right thumb impressions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono bg-white p-4 rounded-xl border border-pdf-gray/20">
              <div><strong>Passport Photo:</strong> 80% face coverage, white background</div>
              <div><strong>Thumb Impression:</strong> 3 cm x 1 cm or tight square</div>
              <div><strong>Allowed Formats:</strong> Strictly JPG/JPEG only</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-pdf-gray/30 bg-pdf-bg/30">
            <h4 className="text-lg font-bold text-pdf-dark mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-pdf-primary"></span>
              United States Department of State - US Visa &amp; DV Diversity Lottery
            </h4>
            <p className="text-sm text-pdf-gray leading-relaxed mb-3">
              The US Department of State DS-160 online visa application system performs automated pixel-level biometric verification. Submitting a non-compliant crop is the number one cause of visa photo rejection worldwide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono bg-white p-4 rounded-xl border border-pdf-gray/20">
              <div><strong>Physical Size:</strong> 2x2 inches (51 mm x 51 mm)</div>
              <div><strong>Pixel Dimensions:</strong> Strictly square, 600x600 to 1200x1200 px</div>
              <div><strong>Eye Height Ratio:</strong> Between 56% and 69% from bottom</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section id="comparison-matrix" className="mb-12">
        <h3 className="text-2xl font-bold text-pdf-dark flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-6 h-6 text-pdf-primary" /> 5. Technical Comparison: Cropping vs. Resizing vs. Compressing vs. Masking
        </h3>
        <p>
          Novice digital content creators frequently conflate the concepts of cropping, resizing, compressing, and clipping. While all four operations alter an image byte representation or visual geometry, their mathematical mechanisms, aesthetic outcomes, and structural reversibility differ fundamentally:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse border border-pdf-gray/30 text-sm">
            <thead className="bg-pdf-bg/80 text-pdf-dark">
              <tr>
                <th className="p-3 border border-pdf-gray/30 font-bold">Operation</th>
                <th className="p-3 border border-pdf-gray/30 font-bold">Core Mathematical Mechanism</th>
                <th className="p-3 border border-pdf-gray/30 font-bold">Field of View (FOV)</th>
                <th className="p-3 border border-pdf-gray/30 font-bold">Pixel Density &amp; Sharpness</th>
                <th className="p-3 border border-pdf-gray/30 font-bold">Reversibility</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pdf-gray/20">
              <tr className="hover:bg-pdf-bg/30">
                <td className="p-3 border border-pdf-gray/30 font-bold text-pdf-primary">Cropping (Excision)</td>
                <td className="p-3 border border-pdf-gray/30">Permanently truncates the coordinate matrix, discarding all pixel arrays falling outside the bounding box [X, Y, W, H].</td>
                <td className="p-3 border border-pdf-gray/30 font-semibold text-emerald-700">Altered (Tightened focal frame)</td>
                <td className="p-3 border border-pdf-gray/30">100% Lossless preservation of native pixel sharpness inside selection.</td>
                <td className="p-3 border border-pdf-gray/30 text-rose-600 font-semibold">Irreversible once exported</td>
              </tr>
              <tr className="hover:bg-pdf-bg/30">
                <td className="p-3 border border-pdf-gray/30 font-bold text-pdf-primary">Resizing (Scaling)</td>
                <td className="p-3 border border-pdf-gray/30">Bilinear or Bicubic interpolation across the entire bitmap to generate a new coordinate grid with fewer or more samples.</td>
                <td className="p-3 border border-pdf-gray/30">Preserved (Entire scene remains visible)</td>
                <td className="p-3 border border-pdf-gray/30">Altered (Pixels are mathematically averaged, merged, or interpolated).</td>
                <td className="p-3 border border-pdf-gray/30 text-rose-600 font-semibold">Irreversible (Downsampling loses high frequencies)</td>
              </tr>
              <tr className="hover:bg-pdf-bg/30">
                <td className="p-3 border border-pdf-gray/30 font-bold text-pdf-primary">Compression (Quantization)</td>
                <td className="p-3 border border-pdf-gray/30">Applies Discrete Cosine Transform (DCT) or LZ77 entropy encoding to discard visually imperceptible high-frequency color variations.</td>
                <td className="p-3 border border-pdf-gray/30">Preserved (Dimensions and FOV remain 100% identical)</td>
                <td className="p-3 border border-pdf-gray/30">Subtle degradation dependent on quality quantization factor Q.</td>
                <td className="p-3 border border-pdf-gray/30 text-rose-600 font-semibold">Irreversible for lossy codecs (JPEG/WebP)</td>
              </tr>
              <tr className="hover:bg-pdf-bg/30">
                <td className="p-3 border border-pdf-gray/30 font-bold text-pdf-primary">Masking (Alpha Occlusion)</td>
                <td className="p-3 border border-pdf-gray/30">Multiplies existing pixel alpha channel by a binary or gradient 8-bit matte, rendering unselected areas transparent without deleting color data.</td>
                <td className="p-3 border border-pdf-gray/30 font-semibold text-amber-700">Appears altered visually</td>
                <td className="p-3 border border-pdf-gray/30">100% Lossless pixel preservation across hidden channels.</td>
                <td className="p-3 border border-pdf-gray/30 text-emerald-700 font-semibold">Reversible in layer-based editors</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          To understand why cropping is uniquely powerful, consider a practical real-world scenario: You take a high-resolution 12-megapixel photograph of your signature written on a blank sheet of paper resting on a wooden desk. The original file size is 4.8 Megabytes, measuring 4000 by 3000 pixels. The signature itself occupies a tiny 800 by 300 pixel rectangle in the center of the frame, surrounded by 3,700 vertical and horizontal pixels of wood grain, shadows, and desk clutter.
        </p>
        <p>
          If you attempted to compress this raw file directly to satisfy a strict 50 Kilobyte portal limit using an image compressor, the quantization engine would be forced to destroy image quality universally across the entire frame. The resulting signature would appear blurry, surrounded by ugly ringing artifacts and severe color banding.
        </p>
        <p>
          In contrast, if you first run the file through ToolsWizard Image Cropper, you slice away 95% of the unnecessary pixels, extracting only the pristine 800 by 300 pixel signature zone. The resulting cropped image immediately shrinks from 4.8MB down to approximately 140KB with zero loss in visual sharpness. Subsequent compression to the final 50KB target requires only minimal quantization, producing an immaculate, professional document asset.
        </p>
      </section>

      {/* SECTION 6 */}
      <section id="exif-orientation" className="mb-12">
        <h3 className="text-2xl font-bold text-pdf-dark flex items-center gap-2 mb-4">
          <Camera className="w-6 h-6 text-pdf-primary" /> 6. Handling EXIF Metadata, Sensor Orientation, and Color Space Fidelity
        </h3>
        <p>
          One of the most perplexing challenges in digital photo manipulation is the phenomenon of image auto-rotation. When capturing a photo with an Apple iPhone, Samsung Galaxy, or DSLR camera held vertically in portrait orientation, the physical camera sensor does not physically rotate its hardware pixel arrays. The sensor always captures the image in landscape orientation, but writes an integer metadata tag known as the EXIF Orientation Tag into the file header, recording the accelerometer tilt angle at the moment of shutter release.
        </p>

        <div className="bg-pdf-bg/50 p-6 rounded-2xl border border-pdf-gray/30 my-6">
          <h4 className="font-bold text-base text-pdf-dark mb-3">The Eight EXIF Orientation Tag Values</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="bg-white p-3 rounded-xl border border-pdf-gray/20"><strong>Tag 1:</strong> 0° rotation (Normal horizontal)</div>
            <div className="bg-white p-3 rounded-xl border border-pdf-gray/20"><strong>Tag 3:</strong> 180° rotation (Upside down)</div>
            <div className="bg-white p-3 rounded-xl border border-pdf-gray/20"><strong>Tag 6:</strong> 90° CW rotation (Portrait right)</div>
            <div className="bg-white p-3 rounded-xl border border-pdf-gray/20"><strong>Tag 8:</strong> 270° CW rotation (Portrait left)</div>
          </div>
        </div>

        <p>
          In legacy web browsers and crude image tools, passing an image with an EXIF Tag 6 to an HTML5 canvas would result in the image rendering sideways, causing crop coordinates to be mapped across the wrong physical axes. ToolsWizard Image Cropper overcomes this using modern CSS image-orientation: from-image styling combined with automatic hardware transform matrices. Before coordinate extraction begins, the engine normalizes the visual orientation, ensuring that the selection box you draw on screen maps 1:1 with the true visual orientation of your subject.
        </p>
        <p>
          In addition to orientation normalization, our client-side engine respects wide-gamut color spaces. While raw digital cameras capture images in extended color spaces like Display P3 or Adobe RGB (1998), standard web browsers render canvases inside the standardized sRGB color gamut. During the rasterization pass, our engine performs perceptual color mapping, ensuring that skin tones, company brand colors, and contrast gradients do not suffer gamma shifting or artificial desaturation when exported.
        </p>
      </section>

      {/* SECTION 7 */}
      <section id="step-by-step-workflows" className="mb-12">
        <h3 className="text-2xl font-bold text-pdf-dark flex items-center gap-2 mb-4">
          <BookOpen className="w-6 h-6 text-pdf-primary" /> 7. Step-by-Step Practical Tutorials for Common Real-World Tasks
        </h3>
        <p>
          Whether you are an aspiring student, a freelance graphic designer, or an office administrator, follow these step-by-step workflows to achieve studio-grade cropping results in seconds:
        </p>

        <div className="space-y-6 my-6">
          <div className="border border-pdf-gray/30 rounded-2xl p-6 bg-white shadow-sm">
            <h4 className="text-lg font-bold text-pdf-dark flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-full bg-pdf-primary text-white flex items-center justify-center text-xs font-bold">A</span>
              Tutorial: Extracting a Scanned Signature for Online Bank &amp; Government Applications
            </h4>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-pdf-gray">
              <li>Sign your name clearly on an unlined white sheet of A4 paper using a black or dark blue ballpoint or ink pen.</li>
              <li>Take a clear, well-lit smartphone photo directly above the paper, avoiding casting phone shadows over the signature.</li>
              <li>Open ToolsWizard Image Cropper and drag the photo into the drop zone.</li>
              <li>Click and drag a selection rectangle tightly around the signature, leaving a clean 5-pixel to 10-pixel white margin around the ink strokes.</li>
              <li>Verify the real-time crop preview to ensure no letters or dots of the signature are cut off.</li>
              <li>Click <strong>Crop Image</strong>, then download the cropped signature. Pair this with our <Link href="/tools/pdf-tools/image-compressor" className="font-semibold text-pdf-primary underline hover:text-pdf-primary/80">Image Compressor</Link> to adjust the final file size to the mandatory 10KB to 20KB threshold.</li>
            </ol>
          </div>

          <div className="border border-pdf-gray/30 rounded-2xl p-6 bg-white shadow-sm">
            <h4 className="text-lg font-bold text-pdf-dark flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-full bg-pdf-primary text-white flex items-center justify-center text-xs font-bold">B</span>
              Tutorial: Converting a Casual Mobile Portrait into an Official Passport Photo
            </h4>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-pdf-gray">
              <li>Stand against a plain, well-lit white or off-white wall with your shoulders square and face looking straight forward.</li>
              <li>Capture a portrait photo from approximately 4 to 5 feet away to minimize optical wide-angle barrel distortion of your nose and ears.</li>
              <li>Upload the photo to ToolsWizard Image Cropper.</li>
              <li>Draw a rectangular crop box adhering to the 3.5 cm by 4.5 cm (7:9 ratio) or 2x2 inch (1:1 ratio) standard required by your issuing authority.</li>
              <li>Position the crop box so that your head (from the crown of your hair to the tip of your chin) occupies between 70% and 80% of the total box height.</li>
              <li>Click <strong>Crop Image</strong> and download your perfectly framed official passport photo asset.</li>
            </ol>
          </div>

          <div className="border border-pdf-gray/30 rounded-2xl p-6 bg-white shadow-sm">
            <h4 className="text-lg font-bold text-pdf-dark flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-full bg-pdf-primary text-white flex items-center justify-center text-xs font-bold">C</span>
              Tutorial: Redacting Sensitive PII and API Credentials from Software Screenshots
            </h4>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-pdf-gray">
              <li>Capture a desktop or mobile screenshot containing technical output, bug reports, or user interface flows.</li>
              <li>Identify any sections revealing sensitive personally identifiable information (PII), secret tokens, or bank balances.</li>
              <li>Upload the screenshot to ToolsWizard Image Cropper.</li>
              <li>Rather than attempting to paint over credentials with awkward black marker lines, crop the frame tightly around only the relevant code block, table, or UI element required for documentation.</li>
              <li>Click <strong>Crop Image</strong> and export. All surrounding confidential desktop elements are purged permanently from the binary file.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 8 */}
      <section id="zero-trust-privacy" className="mb-12">
        <h3 className="text-2xl font-bold text-pdf-dark flex items-center gap-2 mb-4">
          <ShieldCheck className="w-6 h-6 text-pdf-primary" /> 8. Client-Side Zero-Trust Architecture and Data Sovereignty
        </h3>
        <p>
          In an era where identity theft, credential harvesting, and centralized database leaks are rampant, uploading personal photographs, identity documents (Aadhaar cards, PAN cards, Passports, Driver Licenses), and financial signatures to third-party web servers represents a severe privacy vulnerability. Traditional online image editing portals process files by uploading raw binary streams to backend cloud servers running ImageMagick, Python Pillow, or headless Linux utilities. Even when service providers claim to delete files after 60 minutes, your files remain temporarily accessible on server hard drives, memory dumps, and intermediate proxy caches.
        </p>
        <p>
          ToolsWizard operates under a radically different paradigm: <strong>100% Client-Side Zero-Trust Computing</strong>. Our web application functions as a decentralized, standalone single-page application (SPA). When you navigate to this tool, your web browser downloads the HTML, CSS, and compiled JavaScript logic once. From that moment forward:
        </p>
        <ul className="list-disc pl-6 space-y-3 my-4">
          <li><strong>Zero Network Uploads:</strong> When you drag a photo onto our canvas, not a single byte of image data is transmitted over the internet or sent to external cloud servers. You can literally disconnect your Wi-Fi or enable Airplane Mode on your smartphone, and the entire cropping, previewing, and downloading engine will continue to function without interruption.</li>
          <li><strong>Local Hardware Acceleration:</strong> Mathematical coordinate computations and bitmap rendering execute natively on your device CPU and GPU using sandboxed HTML5 Canvas APIs. This delivers blistering execution speeds with zero network latency bottlenecks.</li>
          <li><strong>Instant Memory Deallocation:</strong> The moment you close or refresh your browser tab, the temporary memory blob references are instantly garbage collected by your operating system kernel. No persistent traces or cached copies remain on any remote disk in existence.</li>
        </ul>
      </section>

      {/* SECTION 9 */}
      <section id="troubleshooting-guide" className="mb-12">
        <h3 className="text-2xl font-bold text-pdf-dark flex items-center gap-2 mb-4">
          <AlertTriangle className="w-6 h-6 text-pdf-primary" /> 9. Troubleshooting Common Cropping Errors &amp; Artifacts
        </h3>
        <p>
          Encountering unexpected results while cropping digital photos? Review these expert engineering diagnostics and quick resolutions:
        </p>

        <div className="space-y-4 my-6">
          <div className="p-5 rounded-2xl border border-pdf-gray/30 bg-pdf-bg/30">
            <h4 className="font-bold text-base text-pdf-dark mb-1">Issue: The cropped image appears blurry or pixelated compared to the original.</h4>
            <p className="text-sm text-pdf-gray leading-relaxed">
              <strong>Root Cause:</strong> Extreme digital cropping. If your original image is 800x600 pixels and you crop a tiny 50x50 pixel postage stamp in the corner, viewing that tiny 50px crop on a large 4K computer monitor requires the screen to magnify each pixel by 800%, causing visible pixelation. 
              <br /><strong>Resolution:</strong> Always capture high-resolution source photographs with your camera lens physically positioned closer to the subject rather than zooming in digitally across a tiny crop area.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-pdf-gray/30 bg-pdf-bg/30">
            <h4 className="font-bold text-base text-pdf-dark mb-1">Issue: The selection rectangle jumps or drifts when dragging on a mobile touchscreen.</h4>
            <p className="text-sm text-pdf-gray leading-relaxed">
              <strong>Root Cause:</strong> Default browser gesture conflicts, such as pinch-to-zoom or swipe-to-refresh interfering with touch coordinates.
              <br /><strong>Resolution:</strong> Our tool integrates CSS touch-action: none properties across the interactive crop container. Ensure your mobile browser is updated to modern standards (iOS Safari 15+ or Android Chrome 90+) for smooth touch tracking.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-pdf-gray/30 bg-pdf-bg/30">
            <h4 className="font-bold text-base text-pdf-dark mb-1">Issue: A transparent PNG turns completely black after saving.</h4>
            <p className="text-sm text-pdf-gray leading-relaxed">
              <strong>Root Cause:</strong> Saving a transparent image into the JPEG (.jpg) file format. Standard JPEG architecture has no alpha channel; legacy decoders interpret missing alpha channels as solid black (#000000).
              <br /><strong>Resolution:</strong> If you need to preserve transparency (such as a signature overlay or cutout logo), ensure your source image is saved as a PNG. Alternatively, use our companion <Link href="/tools/pdf-tools/image-converter" className="font-semibold text-pdf-primary underline hover:text-pdf-primary/80">Image Converter</Link> to apply white alpha compositing before converting to JPG.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQS */}
      <section id="technical-faqs" className="pt-8 border-t border-pdf-gray/30 mt-8">
        <h3 className="text-2xl font-bold text-pdf-dark tracking-tight flex items-center gap-2 mb-6">
          <BookOpen className="w-6 h-6 text-pdf-primary" /> 10. Technical Frequently Asked Questions
        </h3>
        <div className="space-y-4 not-prose">
          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>How does cropping an image reduce its file size in kilobytes (KB)?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              Cropping physically deletes outer pixel rows and columns from the raster data matrix. For example, cropping a 4000x3000 pixel image (12 million pixels) down to an 800x600 pixel rectangle (480,000 pixels) removes 96% of the raw visual data arrays. When the resulting bitmap is serialized, the encoder processes vastly fewer pixels, resulting in dramatic byte-size reductions often exceeding 80% to 90% without degrading visual sharpness inside the crop frame.
            </p>
          </details>

          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>What is the exact technical difference between cropping and resizing an image?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              Cropping permanently excises unwanted peripheral areas of an image, altering the visual field of view (FOV) and changing the aspect ratio while leaving the native pixels inside the selection box 100% unaltered. Resizing, on the other hand, retains the entire scene but applies mathematical interpolation (bilinear or bicubic resampling) to compress or expand all existing pixels into a different dimensional grid.
            </p>
          </details>

          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>Is it safe to crop confidential documents like Aadhaar, PAN, and Passports on ToolsWizard?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              Yes, 100% safe. ToolsWizard operates under an uncompromising Zero-Trust architecture. All image rasterization, vector coordinate mapping, and file downloads occur completely inside your local browser memory using HTML5 Canvas primitives. Your confidential photos and legal identity documents are never uploaded to remote cloud servers, never cached in external storage, and never logged in databases.
            </p>
          </details>

          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>Why do government and examination portals reject uncropped passport photos?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              Government portals (such as UPSC, SSC, NTA, and visa systems) use automated facial recognition and image verification algorithms. If you upload a full-body photograph or a scanned picture with thick white margins, the face detection bounding box will fail to detect key biometric landmarks (pupillary distance, chin contour, crown height) within the required 70% to 80% frame area, triggering instant rejection.
            </p>
          </details>

          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>Does cropping an image cause pixelation or degrade photo quality?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              No. Our in-browser cropping engine extracts the exact native pixels from your source file without applying any lossy downsampling or artificial sharpening filters. The pixels within your crop box retain 100% of their original sensor resolution and color accuracy. Blur only occurs if you crop a microscopic region from a low-resolution file and view it at extreme magnification.
            </p>
          </details>

          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>What is the standard aspect ratio for an official passport-size photo?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              Standard passport photo specifications vary by country: The United States, India (Passport Seva), and visa lotteries utilize a strictly square 1:1 aspect ratio (2x2 inches or 51x51 mm, typically 600x600 px). The United Kingdom, European Union (Schengen), and Indian exam boards (UPSC, SSC) utilize a 3.5x4.5 cm standard, corresponding to an aspect ratio of approximately 7:9 (or 0.777 decimal).
            </p>
          </details>

          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>Can I use this online image cropper on mobile devices without installing an app?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              Yes. The interface is engineered with a responsive touch gesture layer supporting Android Chrome, iOS Mobile Safari, and iPadOS. You can capture a photograph with your phone camera, open ToolsWizard in your mobile browser, drag your finger across the screen to draw a precision crop box, and save the cropped image directly to your device camera roll with zero app installations.
            </p>
          </details>

          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>How do I crop a handwritten signature cleanly without including shadows or paper edges?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              Sign your name on clean, bright white unlined paper using dark ink. Photograph the signature in even, diffused daylight without direct top lighting that casts phone shadows. Upload the photo and draw a tight bounding box closely around the text margins, leaving roughly 5 to 10 pixels of white border around the outermost strokes. This eliminates desk surfaces, paper borders, and edge shadows cleanly.
            </p>
          </details>

          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>Can I crop Apple iPhone HEIC photos directly with this tool?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              Apple iPhones capture photos in the high-efficiency HEIC (.heic) container by default. If your browser does not natively decode HEIC containers, first convert your photo into standard high-resolution JPEG using our companion <Link href="/tools/pdf-tools/heic-to-jpg" className="font-semibold text-pdf-primary underline hover:text-pdf-primary/80">HEIC to JPG Converter</Link>. Once converted, you can crop and re-frame the resulting JPG seamlessly.
            </p>
          </details>

          <details className="group border border-pdf-gray/30 rounded-2xl p-5 bg-pdf-bg/30 transition-all hover:bg-white hover:border-pdf-primary cursor-pointer open:shadow-md">
            <summary className="font-bold list-none flex justify-between items-center text-pdf-dark text-base sm:text-lg">
              <span>What image file formats are supported for cropping?</span>
              <span className="text-pdf-primary text-xl font-light group-open:rotate-180 transition-transform duration-200">▾</span>
            </summary>
            <p className="mt-4 text-pdf-gray text-sm leading-relaxed border-t border-pdf-gray/20 pt-4">
              ToolsWizard Image Cropper natively supports all web-standard raster formats including JPEG (.jpg, .jpeg), Portable Network Graphics (.png), and Google WebP (.webp). Transparent areas in PNG and WebP files are preserved losslessly. For format transcoding, visit our companion <Link href="/tools/pdf-tools/image-converter" className="font-semibold text-pdf-primary underline hover:text-pdf-primary/80">Image Converter</Link> or <Link href="/tools/pdf-tools/jpg-to-png" className="font-semibold text-pdf-primary underline hover:text-pdf-primary/80">JPG to PNG Converter</Link>.
            </p>
          </details>
        </div>
      </section>

      {/* SECTION 11: RELATED UTILITIES */}
      <section className="mt-12 p-8 bg-gradient-to-br from-pdf-bg to-white rounded-3xl border border-pdf-gray/30 not-prose">
        <h4 className="text-xl font-bold text-pdf-dark mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-pdf-primary" /> Explore Related Document &amp; Image Utilities
        </h4>
        <p className="text-sm text-pdf-gray mb-6 leading-relaxed">
          Streamline your digital workflow by pairing precision image cropping with our companion zero-trust productivity tools:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/tools/pdf-tools/image-compressor"
            className="p-4 bg-white rounded-2xl border border-pdf-gray/40 hover:border-pdf-primary hover:shadow-md transition-all group"
          >
            <div className="font-bold text-sm text-pdf-dark group-hover:text-pdf-primary transition-colors flex items-center justify-between">
              Image Compressor
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-xs text-pdf-gray mt-1 leading-relaxed">
              Compress your cropped photos and signatures to exact 20KB, 50KB, or 100KB limits.
            </p>
          </Link>

          <Link
            href="/tools/pdf-tools/image-converter"
            className="p-4 bg-white rounded-2xl border border-pdf-gray/40 hover:border-pdf-primary hover:shadow-md transition-all group"
          >
            <div className="font-bold text-sm text-pdf-dark group-hover:text-pdf-primary transition-colors flex items-center justify-between">
              Image Converter
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-xs text-pdf-gray mt-1 leading-relaxed">
              Convert between JPG, PNG, and WebP with custom compression and zero uploads.
            </p>
          </Link>

          <Link
            href="/tools/pdf-tools/image-resizer"
            className="p-4 bg-white rounded-2xl border border-pdf-gray/40 hover:border-pdf-primary hover:shadow-md transition-all group"
          >
            <div className="font-bold text-sm text-pdf-dark group-hover:text-pdf-primary transition-colors flex items-center justify-between">
              Image Resizer
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-xs text-pdf-gray mt-1 leading-relaxed">
              Scale pixel dimensions by width, height, or percentage while maintaining proportions.
            </p>
          </Link>

          <Link
            href="/tools/pdf-tools/heic-to-jpg"
            className="p-4 bg-white rounded-2xl border border-pdf-gray/40 hover:border-pdf-primary hover:shadow-md transition-all group"
          >
            <div className="font-bold text-sm text-pdf-dark group-hover:text-pdf-primary transition-colors flex items-center justify-between">
              HEIC to JPG Converter
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-xs text-pdf-gray mt-1 leading-relaxed">
              Convert Apple iPhone HEIC pictures to standard JPEG directly in your browser.
            </p>
          </Link>
        </div>
      </section>

    </article>
  );
}
