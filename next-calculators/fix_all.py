import os
import re

directory = './src/content/blog'

for filename in os.listdir(directory):
    if not filename.endswith('.md'):
        continue
    
    filepath = os.path.join(directory, filename)
    with open(filepath, 'r') as f:
        content = f.read()
    
    lines = content.split('\n')
    new_lines = []
    
    changed = False
    for line in lines:
        if '*(Output:' in line:
            # line looks like: *(Output: 100 Liters = 26.4172 US Gallons).*
            match = re.search(r'\*\((Output:.*?)\)(?:\.\*)?', line)
            if match:
                output_text = match.group(1)
                
                # go backwards and remove digits + dot + space
                j = len(new_lines) - 1
                while j >= 0 and re.match(r'^\d+\.\s+', new_lines[j]):
                    new_lines[j] = re.sub(r'^\d+\.\s+', '', new_lines[j])
                    changed = True
                    j -= 1
                
                # append to the last line
                if len(new_lines) > 0:
                    new_lines[-1] = new_lines[-1].rstrip() + f" ({output_text})."
                    changed = True
            else:
                new_lines.append(line)
        else:
            new_lines.append(line)
            
    if changed:
        with open(filepath, 'w') as f:
            f.write('\n'.join(new_lines))
        print(f"Updated {filename}")

