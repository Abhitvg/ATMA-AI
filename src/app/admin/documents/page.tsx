"use client";

import React, { useState, useEffect } from 'react';
import { FileText, Download, FileCode2, FileSearch, Building2, Briefcase, Sparkles } from 'lucide-react';

interface DocumentType {
  id: string;
  name: string;
  type: string;
  category: string;
  size: string;
  date: string;
  path: string;
  isDynamic?: boolean;
}

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<DocumentType[]>([]);
  const [loading, setLoading] = useState(true);
  const [orgName, setOrgName] = useState('Acme Corp');
  const [projectName, setProjectName] = useState('Project Phoenix');
  const [amount, setAmount] = useState('4000');
  const [currency, setCurrency] = useState('$');
  const [docDate, setDocDate] = useState(new Date().toISOString().split('T')[0]);
  const [generating, setGenerating] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/documents')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setDocuments(data.documents);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const getIcon = (type: string, category: string) => {
    if (category === 'AI Agents') return <FileCode2 className="text-purple-400 w-8 h-8" />;
    if (category === 'Research') return <FileSearch className="text-blue-400 w-8 h-8" />;
    if (category === 'HR') return <FileText className="text-pink-400 w-8 h-8" />;
    if (category === 'Compliance') return <FileText className="text-green-400 w-8 h-8" />;
    return <FileText className="text-accent w-8 h-8" />;
  };

  const handleDownload = async (doc: DocumentType) => {
    if (!doc.isDynamic) {
      if (doc.path !== '#') window.open(doc.path, '_blank');
      return;
    }

    if (!orgName.trim() || !projectName.trim()) {
      alert("Please provide both an Organization Name and Project Name.");
      return;
    }

    setGenerating(doc.id);
    try {
      const res = await fetch('/api/documents/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ templateId: doc.id, orgName, projectName, amount, currency, docDate })
      });
      const data = await res.json();
      
      if (data.success) {
        if (doc.type === 'pdf') {
          const element = document.createElement('div');
          element.innerHTML = data.content;
          
          const opt = {
            margin:       0,
            filename:     `${doc.id}_${orgName.replace(/\\s+/g, '_')}.pdf`,
            image:        { type: 'jpeg' as const, quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true },
            jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' as const }
          };

          const html2pdf = (await import('html2pdf.js')).default;
          await html2pdf().set(opt).from(element).save();
        } else {
          const blob = new Blob([data.content], { type: 'text/markdown;charset=utf-8;' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.setAttribute("href", url);
          link.setAttribute("download", `${doc.id}_${orgName.replace(/\\s+/g, '_')}.md`);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } else {
        alert("Failed to generate document: " + data.error);
      }
    } catch (error) {
      console.error(error);
      alert("Error generating document.");
    }
    setGenerating(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-primary-light font-heading">Document Center</h2>
          <p className="text-muted mt-1">Manage AI agent configurations and generate customized legal templates.</p>
        </div>
      </div>

      <div className="glass-card rounded-2xl border border-white/10 p-6 flex flex-col md:flex-row gap-6 items-end">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
          <div className="w-full">
            <label className="block text-sm font-bold text-muted mb-2 flex items-center gap-2"><Building2 size={16}/> Client Name</label>
            <input 
              type="text" 
              value={orgName}
              onChange={e => setOrgName(e.target.value)}
              placeholder="e.g. Acme Corp" 
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-bold text-muted mb-2 flex items-center gap-2"><Briefcase size={16}/> Project Name</label>
            <input 
              type="text" 
              value={projectName}
              onChange={e => setProjectName(e.target.value)}
              placeholder="e.g. Project Phoenix" 
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-bold text-muted mb-2 flex items-center gap-2"><Briefcase size={16}/> Currency</label>
            <select 
              value={currency}
              onChange={e => setCurrency(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"
            >
              <option value="$">USD ($)</option>
              <option value="₹">INR (₹)</option>
              <option value="€">EUR (€)</option>
              <option value="£">GBP (£)</option>
              <option value="A$">AUD (A$)</option>
              <option value="C$">CAD (C$)</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block text-sm font-bold text-muted mb-2 flex items-center gap-2"><Briefcase size={16}/> Amount</label>
            <input 
              type="number" 
              value={amount}
              onChange={e => setAmount(e.target.value)}
              placeholder="e.g. 4000" 
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-bold text-muted mb-2 flex items-center gap-2"><Briefcase size={16}/> Document Date</label>
            <input 
              type="date" 
              value={docDate}
              onChange={e => setDocDate(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent"
            />
          </div>
        </div>
        <div className="w-full md:w-auto pb-1 text-xs text-muted flex flex-col items-center justify-center h-[50px] px-4 rounded-xl border border-accent/20 bg-accent/5">
          <Sparkles className="text-accent mb-1" size={14} />
          Dynamic Generator
        </div>
      </div>

      <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-muted">Loading documents...</div>
        ) : documents.length === 0 ? (
          <div className="p-8 text-center text-muted">No documents found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-primary-deeper/50 border-b border-white/10">
                <tr>
                  <th className="p-4 text-sm font-semibold text-muted">Document Name</th>
                  <th className="p-4 text-sm font-semibold text-muted">Category</th>
                  <th className="p-4 text-sm font-semibold text-muted">Size</th>
                  <th className="p-4 text-sm font-semibold text-muted">Last Updated</th>
                  <th className="p-4 text-sm font-semibold text-muted text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {documents.map(doc => (
                  <tr key={doc.id} className="hover:bg-white/5 transition group">
                    <td className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-black/40 rounded-xl">
                          {getIcon(doc.type, doc.category)}
                        </div>
                        <div>
                          <span className="font-medium text-white group-hover:text-accent transition capitalize block">
                            {doc.name.replace(/-/g, ' ')}
                          </span>
                          {doc.isDynamic && <span className="text-[10px] text-accent font-mono uppercase tracking-wider">Dynamic Template</span>}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        doc.category === 'AI Agents' ? 'bg-purple-500/20 text-purple-400' :
                        doc.category === 'Legal' ? 'bg-accent/20 text-accent' :
                        doc.category === 'HR' ? 'bg-pink-500/20 text-pink-400' :
                        doc.category === 'Compliance' ? 'bg-green-500/20 text-green-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {doc.category}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-400">{doc.size}</td>
                    <td className="p-4 text-sm text-gray-400">{doc.date}</td>
                    <td className="p-4 text-right">
                      <button 
                        onClick={() => handleDownload(doc)}
                        disabled={generating === doc.id}
                        className="p-2 hover:bg-white/10 rounded-lg text-muted hover:text-white transition inline-flex items-center gap-2 disabled:opacity-50"
                        title={doc.isDynamic ? "Generate & Download" : "Download"}
                      >
                        {generating === doc.id ? (
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <Download size={18} />
                        )}
                        {doc.isDynamic && <span className="text-xs font-bold ml-1">Generate</span>}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
