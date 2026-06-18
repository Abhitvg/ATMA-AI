import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const agentsDir = path.join(process.cwd(), 'src/agents');
    let documents: Record<string, unknown>[] = [];
    
    // Check if agents directory exists
    if (fs.existsSync(agentsDir)) {
      const files = fs.readdirSync(agentsDir);
      const agentDocs = files.filter(f => f.endsWith('.md')).map(file => {
        const stats = fs.statSync(path.join(agentsDir, file));
        return {
          id: `agent-${file}`,
          name: file.replace('.md', ''),
          category: 'AI Agents',
          type: 'markdown',
          size: (stats.size / 1024).toFixed(1) + ' KB',
          date: stats.mtime.toLocaleDateString(),
          path: `/api/documents/download?file=${file}&type=agent`
        };
      });
      documents = [...documents, ...agentDocs];
    }

    // Add dynamic templates
    const templates = [
      { id: 'client-contract', name: 'Client Contract', category: 'Legal', type: 'pdf', size: 'Dynamic', date: new Date().toLocaleDateString(), isDynamic: true },
      { id: 'welcome-msg', name: 'Welcome Message', category: 'HR', type: 'pdf', size: 'Dynamic', date: new Date().toLocaleDateString(), isDynamic: true },
      { id: 'kickoff-call', name: 'Kickoff Call Agenda', category: 'HR', type: 'pdf', size: 'Dynamic', date: new Date().toLocaleDateString(), isDynamic: true },
      { id: 'invoice', name: 'Invoice', category: 'Legal', type: 'pdf', size: 'Dynamic', date: new Date().toLocaleDateString(), isDynamic: true },
      { id: 'thankyou-msg', name: 'Thank You Message', category: 'HR', type: 'pdf', size: 'Dynamic', date: new Date().toLocaleDateString(), isDynamic: true },
      { id: 'mutual-nda', name: 'Mutual NDA', category: 'Legal', type: 'pdf', size: 'Dynamic', date: new Date().toLocaleDateString(), isDynamic: true },
      { id: 'msa', name: 'Master Service Agreement', category: 'Legal', type: 'pdf', size: 'Dynamic', date: new Date().toLocaleDateString(), isDynamic: true },
      { id: 'offer-letter', name: 'Offer Letter', category: 'HR', type: 'pdf', size: 'Dynamic', date: new Date().toLocaleDateString(), isDynamic: true },
      { id: 'hr-policies', name: 'HR Policies', category: 'HR', type: 'pdf', size: 'Dynamic', date: new Date().toLocaleDateString(), isDynamic: true },
      { id: 'terms-of-service', name: 'Terms of Service', category: 'Compliance', type: 'pdf', size: 'Dynamic', date: new Date().toLocaleDateString(), isDynamic: true },
      { id: 'privacy-policy', name: 'Privacy Policy', category: 'Compliance', type: 'pdf', size: 'Dynamic', date: new Date().toLocaleDateString(), isDynamic: true },
      { id: 'legal-compliance', name: 'Legal Compliance Framework', category: 'Compliance', type: 'pdf', size: 'Dynamic', date: new Date().toLocaleDateString(), isDynamic: true },
    ];

    documents = [...documents, ...templates];

    return NextResponse.json({ success: true, documents });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
