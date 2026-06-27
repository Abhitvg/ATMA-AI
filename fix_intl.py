import os
import re

directory = '/Users/abhisheksingh/Documents/ATMA-AI/atma-consultancy-web/src/app'

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Remove import { setRequestLocale } from "next-intl/server";
    content = re.sub(r'import\s*{\s*setRequestLocale\s*}\s*from\s*"next-intl/server";\n', '', content)
    
    # Remove import { Link } from "@/i18n/routing"; and replace with import Link from "next/link";
    if 'import { Link } from "@/i18n/routing";' in content:
        content = content.replace('import { Link } from "@/i18n/routing";', 'import Link from "next/link";')

    # Fix component signature from:
    # export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
    # to:
    # export default function FAQPage() {
    
    # First regex to match async function SomePage({ params }: { params: Promise<{ locale: string }> })
    pattern = r'export default async function (\w+)\(\{\s*params\s*\}\s*:\s*\{\s*params\s*:\s*Promise<\{\s*locale\s*:\s*string\s*\}\>\s*\}\)\s*\{'
    
    def replacer(match):
        func_name = match.group(1)
        return f'export default function {func_name}() {{'
        
    content = re.sub(pattern, replacer, content)

    # Remove: const { locale } = await params;
    content = re.sub(r'\s*const \{\s*locale\s*\}\s*=\s*await params;\n', '', content)

    # Remove: setRequestLocale(locale);
    content = re.sub(r'\s*setRequestLocale\(locale\);\n', '', content)
    
    with open(filepath, 'w') as f:
        f.write(content)

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx'):
            process_file(os.path.join(root, file))
