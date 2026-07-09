import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # We want to find elements with blur-[something] or blur-3xl that don't have 'hidden' in the class string.
    # A regex to match className="..." containing blur-\[...\] or blur-3xl
    # We will replace `className="... blur-` with `className="hidden md:block ... blur-`
    
    def replacer(match):
        class_attr = match.group(0)
        # Check if 'hidden' is already in the class string
        # Also ensure we aren't matching backdrop-blur (we just want filter blur)
        if 'hidden' in class_attr.split():
            return class_attr
            
        # We need to insert hidden md:block right after className="
        # match.group(1) is `className="` or `className={`
        prefix = match.group(1)
        rest = class_attr[len(prefix):]
        
        # It's possible prefix is className={`
        if prefix.endswith('`'):
            return prefix + "hidden md:block " + rest
        elif prefix.endswith('"') or prefix.endswith("'"):
            return prefix + "hidden md:block " + rest
        
        return class_attr

    # This regex looks for className="something blur-[100px] something"
    # or className={`something blur-[100px] something`}
    # It strictly matches classes containing blur-[ or blur-3xl, but NOT backdrop-blur
    # We capture the whole className attribute
    
    new_content = re.sub(r'(className=[\'"`])(.*?blur-(?:\[\d+px\]|3xl|2xl|xl).*?[\'"`])', replacer, content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))

print("Done")
