const fs = require('fs');
const path = require('path');

const files = [
  { file: 'src/components/tools/RelatedEncoderDecoderTools.jsx', array: 'ENCODER_DECODER_TOOLS' },
  { file: 'src/components/tools/RelatedTextTools.jsx', array: 'TEXT_TOOLS' },
  { file: 'src/components/tools/RelatedGeneratorsTools.jsx', array: 'GENERATOR_TOOLS' }
];

for (const { file, array } of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find the function name
  const funcMatch = content.match(/export default function (Related\w+Tools)\([^)]*\) \{/);
  if (!funcMatch) {
    console.log(`Could not find function signature in ${file}`);
    continue;
  }
  
  const funcName = funcMatch[1];
  
  // Extract category title from function name
  let categoryName = funcName.replace('Related', '').replace('Tools', '');
  if (categoryName === 'Pdf') categoryName = 'PDF';
  
  const newFuncBody = `export default function ${funcName}(props) {
  const currentPath = props.currentToolPath || props.currentPath || "";
  const [tools, setTools] = useState([]);

  useEffect(() => {
    setTools(${array});
  }, []);

  if (tools.length === 0) return null;

  return (
    <div className="mt-16 bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Related ${categoryName.replace(/([A-Z])/g, ' $1').trim()} Tools</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          const isActive = currentPath && tool.link.includes(currentPath);
          
          return (
            <Link
              key={index}
              href={tool.link}
              className={\`group flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 shadow-sm \${
                isActive 
                  ? 'bg-gray-100 border-gray-300 pointer-events-none' 
                  : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md'
              }\`}
            >
              <div className={\`w-10 h-10 rounded-lg flex items-center justify-center transition-colors \${
                isActive 
                  ? 'bg-black text-white' 
                  : 'bg-gray-50 text-gray-500 group-hover:text-black group-hover:bg-gray-200'
              }\`}>
                <Icon size={20} />
              </div>
              <span className={\`font-bold text-sm line-clamp-1 \${
                isActive ? 'text-black' : 'text-gray-700 group-hover:text-black'
              }\`}>
                {tool.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}`;

  const startIndex = content.indexOf(`export default function ${funcName}`);
  content = content.substring(0, startIndex) + newFuncBody;
  
  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
}
