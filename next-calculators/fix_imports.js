const fs = require('fs');

const files = [
  'src/components/tools/RelatedDesignTools.jsx',
  'src/components/tools/RelatedEncoderDecoderTools.jsx',
  'src/components/tools/RelatedFunTools.jsx',
  'src/components/tools/RelatedGeneratorsTools.jsx',
  'src/components/tools/RelatedPdfTools.jsx',
  'src/components/tools/RelatedTextTools.jsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  if (content.includes("import React from 'react'")) {
    content = content.replace("import React from 'react'", "import React, { useState, useEffect } from 'react'");
  } else if (content.includes('import React from "react"')) {
    content = content.replace('import React from "react"', 'import React, { useState, useEffect } from "react"');
  } else {
    // Just add it after "use client" if it exists, else at the very top
    if (content.includes("'use client'") || content.includes('"use client"')) {
      content = content.replace(/['"]use client['"];?/, "$&\nimport React, { useState, useEffect } from 'react';");
    } else {
      content = "import React, { useState, useEffect } from 'react';\n" + content;
    }
  }
  
  fs.writeFileSync(file, content);
  console.log('Fixed ' + file);
}
