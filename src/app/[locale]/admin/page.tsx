"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { ArrowRight, Download, Play, Users, Link as LinkIcon, CheckCircle2 } from 'lucide-react';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  // Tabs
  const [activeTab, setActiveTab] = useState<'inbound' | 'outbound'>('inbound');
  
  // Inbound Data
  const [leads, setLeads] = useState<any[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);
  
  // Outbound Data
  const [urlsInput, setUrlsInput] = useState('');
  const [isCampaignRunning, setIsCampaignRunning] = useState(false);
  const [campaignResults, setCampaignResults] = useState<any[] | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'atma2026') {
      setIsAuthenticated(true);
      fetchLeads();
    } else {
      alert("Incorrect password");
    }
  };

  const fetchLeads = async () => {
    setLoadingLeads(true);
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads);
      }
    } catch (e) {
      console.error(e);
    }
    setLoadingLeads(false);
  };

  const updateLead = async (id: string, updates: any) => {
    // Optimistic UI update
    setLeads(leads.map(l => l.id === id ? { ...l, ...updates } : l));
    try {
      await fetch('/api/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...updates })
      });
    } catch (error) {
      console.error("Failed to update lead:", error);
    }
  };

  const handleRunCampaign = async () => {
    const urls = urlsInput.split('\\n').map(u => u.trim()).filter(Boolean);
    if (!urls.length) return alert("Enter at least one URL");

    setIsCampaignRunning(true);
    try {
      const res = await fetch('/api/run-campaign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ urls })
      });
      const data = await res.json();
      if (data.success) {
        setCampaignResults(data.campaignData);
      } else {
        alert("Campaign failed: " + data.error);
      }
    } catch (e) {
      console.error(e);
      alert("Error running campaign");
    }
    setIsCampaignRunning(false);
  };

  const downloadCSV = () => {
    if (!campaignResults) return;
    
    const headers = ['Company', 'Website', 'Demo_Link', 'Email_1', 'Email_2'];
    const csvContent = [
      headers.join(','),
      ...campaignResults.map(row => {
        return headers.map(h => `"${(row[h] || '').toString().replace(/"/g, '""')}"`).join(',');
      })
    ].join('\\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "instantly_campaign.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-primary-dark flex flex-col items-center justify-center px-4">
        <div className="glass-card p-8 rounded-2xl max-w-md w-full text-center">
          <div className="inline-flex p-3 rounded-xl bg-accent/10 border border-accent/20 mb-6">
            <Users className="h-6 w-6 text-accent" />
          </div>
          <h1 className="text-2xl font-bold text-primary-light mb-6">Admin Portal Access</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
            />
            <button type="submit" className="w-full bg-accent text-primary-dark font-bold py-3 rounded-lg hover:bg-accent/90 transition">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-dark text-foreground pb-20">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-primary-light font-heading">Atma AI Command Center</h1>
            <p className="text-muted mt-2">Manage inbound leads and execute outbound automation.</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button 
            onClick={() => setActiveTab('inbound')}
            className={`pb-4 px-2 text-sm font-bold uppercase tracking-wider transition ${activeTab === 'inbound' ? 'text-accent border-b-2 border-accent' : 'text-muted hover:text-white'}`}
          >
            Inbound Leads (ROI Calculator)
          </button>
          <button 
            onClick={() => setActiveTab('outbound')}
            className={`pb-4 px-2 text-sm font-bold uppercase tracking-wider transition ${activeTab === 'outbound' ? 'text-accent border-b-2 border-accent' : 'text-muted hover:text-white'}`}
          >
            Outbound Campaign Runner
          </button>
        </div>

        {/* Inbound View */}
        {activeTab === 'inbound' && (
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-primary-deeper/50">
                  <tr>
                    <th className="p-4 text-sm font-semibold text-muted">Email</th>
                    <th className="p-4 text-sm font-semibold text-muted">Est. Savings</th>
                    <th className="p-4 text-sm font-semibold text-muted">Level</th>
                    <th className="p-4 text-sm font-semibold text-muted">Date</th>
                    <th className="p-4 text-sm font-semibold text-muted">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {loadingLeads ? (
                    <tr><td colSpan={5} className="p-8 text-center text-muted">Loading leads...</td></tr>
                  ) : leads.length === 0 ? (
                    <tr><td colSpan={5} className="p-8 text-center text-muted">No leads found in Firebase yet.</td></tr>
                  ) : (
                    leads.map((lead) => (
                      <React.Fragment key={lead.id}>
                        <tr className="hover:bg-white/5 transition border-b-0">
                          <td className="p-4 font-medium text-primary-light">{lead.email}</td>
                          <td className="p-4 text-green-400 font-mono">
                            \${lead.metrics?.savings?.toLocaleString(undefined, {maximumFractionDigits: 0})}
                          </td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded text-xs font-bold ${lead.level === 3 ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'}`}>
                              Level {lead.level}
                            </span>
                          </td>
                          <td className="p-4 text-sm text-muted">
                            {new Date(lead.createdAt).toLocaleDateString()}
                          </td>
                          <td className="p-4">
                            <select 
                              value={lead.status || 'New'} 
                              onChange={(e) => updateLead(lead.id, { status: e.target.value })}
                              className={`text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded outline-none cursor-pointer ${
                                (!lead.status || lead.status === 'New') ? 'bg-accent/20 text-accent' : 
                                lead.status === 'Contacted' ? 'bg-blue-500/20 text-blue-400' : 
                                lead.status === 'Closed' ? 'bg-green-500/20 text-green-400' : 
                                'bg-white/10 text-white/40'
                              }`}
                            >
                              <option value="New" className="bg-primary-dark text-white">New</option>
                              <option value="Contacted" className="bg-primary-dark text-white">Contacted</option>
                              <option value="Closed" className="bg-primary-dark text-white">Closed</option>
                              <option value="Archived" className="bg-primary-dark text-white">Archived</option>
                            </select>
                          </td>
                        </tr>
                        <tr className="border-b border-border bg-white/[0.02]">
                          <td colSpan={5} className="p-4 pt-0">
                            <div className="flex gap-4 items-start">
                              <textarea
                                value={lead.notes || ''}
                                onChange={(e) => setLeads(leads.map(l => l.id === lead.id ? { ...l, notes: e.target.value } : l))}
                                onBlur={(e) => updateLead(lead.id, { notes: e.target.value })}
                                placeholder="Add internal notes or next steps... (auto-saves on click away)"
                                className="w-full bg-black/40 border border-white/5 rounded-lg px-3 py-2 text-white/70 text-xs focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none transition-all resize-none h-12"
                              />
                              <a 
                                 href={`mailto:${lead.email}?subject=Atma AI - Custom ROI Analysis&body=Hi,\n\nI saw you used our ROI calculator...`}
                                 onClick={() => updateLead(lead.id, { status: 'Contacted' })}
                                 className="whitespace-nowrap flex items-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-accent hover:text-primary-dark text-white rounded-lg text-xs font-bold transition-all h-12"
                               >
                                 <ArrowRight size={14} /> Reply
                               </a>
                            </div>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-border bg-primary-deeper/30 flex justify-end">
              <button onClick={fetchLeads} className="text-sm text-accent hover:underline">Refresh Leads</button>
            </div>
          </div>
        )}

        {/* Outbound View */}
        {activeTab === 'outbound' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-2xl">
              <h2 className="text-xl font-bold text-primary-light mb-4">Run New Campaign</h2>
              <p className="text-sm text-muted mb-4">Paste a list of URLs (one per line). The engine will scrape them, generate AI hooks, and draft Instantly.ai emails.</p>
              
              <textarea 
                value={urlsInput}
                onChange={e => setUrlsInput(e.target.value)}
                placeholder="https://example.com&#10;https://competitor.com"
                className="w-full h-48 bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-gray-300 font-mono focus:border-accent focus:outline-none mb-6 resize-none"
              />
              
              <button 
                onClick={handleRunCampaign}
                disabled={isCampaignRunning || !urlsInput.trim()}
                className="w-full bg-accent text-primary-dark font-bold py-3 rounded-xl hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isCampaignRunning ? (
                  <span className="animate-pulse">Scraping & Generating AI Content...</span>
                ) : (
                  <>
                    <Play className="h-5 w-5" /> Launch Campaign Engine
                  </>
                )}
              </button>
            </div>

            <div className="glass-card p-6 rounded-2xl flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-primary-light">Campaign Output</h2>
                {campaignResults && (
                  <button onClick={downloadCSV} className="flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition">
                    <Download className="h-4 w-4" /> Export CSV
                  </button>
                )}
              </div>

              {!campaignResults && !isCampaignRunning && (
                <div className="flex-grow flex items-center justify-center text-muted border-2 border-dashed border-white/10 rounded-xl">
                  Run a campaign to see results here.
                </div>
              )}

              {isCampaignRunning && (
                <div className="flex-grow flex flex-col items-center justify-center text-accent">
                  <div className="w-12 h-12 border-4 border-accent/20 border-t-accent rounded-full animate-spin mb-4" />
                  <p>Initializing AI models...</p>
                </div>
              )}

              {campaignResults && (
                <div className="flex-grow overflow-y-auto space-y-4 max-h-[500px]">
                  {campaignResults.map((res, i) => (
                    <div key={i} className="bg-black/30 p-4 rounded-xl border border-white/5">
                      <h3 className="font-bold text-white mb-1">{res.Company}</h3>
                      <a href={res.Website} target="_blank" rel="noreferrer" className="text-xs text-blue-400 flex items-center gap-1 mb-3">
                        <LinkIcon className="h-3 w-3" /> {res.Website}
                      </a>
                      {res.Error ? (
                        <p className="text-red-400 text-sm">Failed: {res.Error}</p>
                      ) : (
                        <>
                          <div className="mb-3">
                            <span className="text-xs font-semibold text-muted uppercase">Generated Hook:</span>
                            <p className="text-sm text-cyan-300 italic">"{res.demoHook}"</p>
                          </div>
                          <div className="mb-3">
                            <span className="text-xs font-semibold text-muted uppercase">Cold Email 1 Preview:</span>
                            <p className="text-sm text-gray-300 bg-white/5 p-3 rounded mt-1 line-clamp-3">
                              {res.Email_1}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
