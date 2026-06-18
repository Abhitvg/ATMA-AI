"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { ArrowRight, Download, Play, Users, Link as LinkIcon, CheckCircle2, Sparkles, X, Search, Filter, TrendingUp, BarChart, Activity } from 'lucide-react';

interface Lead {
  id: string;
  email: string;
  status?: string;
  source?: string;
  notes?: string;
  level?: number;
  createdAt: string;
  metrics?: { savings?: number; [key: string]: unknown };
}

interface CampaignResult {
  Company?: string;
  Website?: string;
  Demo_Link?: string;
  Email_1?: string;
  Email_2?: string;
  demoHook?: string;
  demoFeatures?: string[];
  [key: string]: unknown;
}

interface AgentResponse {
  role: 'user' | 'agent';
  content: string;
  savedId?: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  // Tabs
  const [activeTab, setActiveTab] = useState<'inbound' | 'outbound' | 'agency'>('inbound');
  
  // Global Data
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);
  
  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Outbound Campaign Runner
  const [urlsInput, setUrlsInput] = useState('');
  const [isCampaignRunning, setIsCampaignRunning] = useState(false);
  const [campaignResults, setCampaignResults] = useState<CampaignResult[] | null>(null);

  // Advanced Features
  const [previewLead, setPreviewLead] = useState<CampaignResult | null>(null);
  const [generatingReplyFor, setGeneratingReplyFor] = useState<string | null>(null);
  const [suggestedReplies, setSuggestedReplies] = useState<Record<string, string>>({});

  // Agency Agent State
  const [agentInput, setAgentInput] = useState('');
  const [agentResponses, setAgentResponses] = useState<AgentResponse[]>([]);
  const [isAgentRunning, setIsAgentRunning] = useState(false);

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

  const updateLead = async (id: string, updates: Partial<Lead>) => {
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
    const urls = urlsInput.split('\n').map(u => u.trim()).filter(Boolean);
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
        fetchLeads(); // Refresh to get the newly saved outbound leads
      } else {
        alert("Campaign failed: " + data.error);
      }
    } catch (e) {
      console.error(e);
      alert("Error running campaign");
    }
    setIsCampaignRunning(false);
  };

  const handleSuggestReply = async (lead: Lead) => {
    setGeneratingReplyFor(lead.id);
    try {
      const res = await fetch('/api/suggest-reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: lead.email, 
          savings: lead.metrics?.savings, 
          metrics: lead.metrics, 
          notes: lead.notes 
        })
      });
      const data = await res.json();
      if (data.success) {
        setSuggestedReplies(prev => ({ ...prev, [lead.id]: data.draftEmail }));
      }
    } catch (error) {
      console.error("Failed to generate reply:", error);
    }
    setGeneratingReplyFor(null);
  };

  const handleAgentRequest = async (action: 'monitor' | 'setup' | 'chat', overridePrompt?: string) => {
    setIsAgentRunning(true);
    const promptToUse = overridePrompt || agentInput;
    
    // Add user message to UI
    if (promptToUse) {
      setAgentResponses(prev => [...prev, { role: 'user', content: promptToUse }]);
    }

    try {
      const res = await fetch('/api/agency-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          action, 
          prompt: promptToUse,
          context: { leads } 
        })
      });
      const data = await res.json();
      if (data.success) {
        setAgentResponses(prev => [...prev, { 
          role: 'agent', 
          content: data.response,
          savedId: data.savedId
        }]);
      } else {
        alert("Agent failed: " + data.error);
      }
    } catch (error) {
      console.error("Failed to run agent:", error);
    }
    
    setAgentInput('');
    setIsAgentRunning(false);
  };

  const downloadCSV = () => {
    if (!campaignResults) return;
    
    const headers = ['Company', 'Website', 'Demo_Link', 'Email_1', 'Email_2'];
    const csvContent = [
      headers.join(','),
      ...campaignResults.map(row => {
        return headers.map(h => `"${(row[h] || '').toString().replace(/"/g, '""')}"`).join(',');
      })
    ].join('\n');

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

  const inboundLeads = leads.filter(l => l.source !== 'outbound');
  const outboundLeads = leads.filter(l => l.source === 'outbound');

  // Stats calculation
  const totalLeads = leads.length;
  const estValue = leads.reduce((acc, l) => acc + (l.metrics?.savings || 0), 0);
  const openDeals = leads.filter(l => l.status === 'New' || l.status === 'Contacted').length;

  const filteredInbound = inboundLeads.filter(l => {
    const matchesSearch = l.email?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
    const matchesStatus = statusFilter === 'All' || (l.status || 'New') === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-primary-dark text-foreground pb-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary-light font-heading">Atma AI Command Center</h1>
            <p className="text-muted mt-2">Manage inbound leads and execute outbound automation.</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl"><Users size={24}/></div>
            <div>
              <p className="text-sm text-muted">Total Leads</p>
              <p className="text-2xl font-bold text-white">{totalLeads}</p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-green-500/10 text-green-400 rounded-xl"><TrendingUp size={24}/></div>
            <div>
              <p className="text-sm text-muted">Est. Pipeline Value</p>
              <p className="text-2xl font-bold text-white">${estValue.toLocaleString()}</p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl"><Activity size={24}/></div>
            <div>
              <p className="text-sm text-muted">Open Deals</p>
              <p className="text-2xl font-bold text-white">{openDeals}</p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-accent/10 text-accent rounded-xl"><BarChart size={24}/></div>
            <div>
              <p className="text-sm text-muted">AI Reply Rate</p>
              <p className="text-2xl font-bold text-white">85%</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border overflow-x-auto">
          <button 
            onClick={() => setActiveTab('inbound')}
            className={`pb-4 px-2 text-sm font-bold uppercase tracking-wider transition whitespace-nowrap ${activeTab === 'inbound' ? 'text-accent border-b-2 border-accent' : 'text-muted hover:text-white'}`}
          >
            Inbound Leads ({inboundLeads.length})
          </button>
          <button 
            onClick={() => setActiveTab('outbound')}
            className={`pb-4 px-2 text-sm font-bold uppercase tracking-wider transition whitespace-nowrap ${activeTab === 'outbound' ? 'text-accent border-b-2 border-accent' : 'text-muted hover:text-white'}`}
          >
            Outbound Campaign Runner ({outboundLeads.length})
          </button>
          <button 
            onClick={() => setActiveTab('agency')}
            className={`pb-4 px-2 text-sm font-bold uppercase tracking-wider transition whitespace-nowrap flex items-center gap-2 ${activeTab === 'agency' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-muted hover:text-white'}`}
          >
            <Sparkles size={16} /> Operations Manager Agent
          </button>
        </div>

        {/* Inbound View */}
        {activeTab === 'inbound' && (
          <div className="glass-card rounded-2xl overflow-hidden flex flex-col">
            <div className="p-4 border-b border-border bg-primary-deeper/30 flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted h-4 w-4" />
                <input 
                  type="text" 
                  placeholder="Search leads by email..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/40 border border-white/5 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-muted h-4 w-4" />
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-black/40 border border-white/5 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-accent appearance-none cursor-pointer"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Closed">Closed</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>
            </div>

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
                  ) : filteredInbound.length === 0 ? (
                    <tr><td colSpan={5} className="p-8 text-center text-muted">No leads found.</td></tr>
                  ) : (
                    filteredInbound.map((lead) => (
                      <React.Fragment key={lead.id}>
                        <tr className="hover:bg-white/5 transition border-b-0">
                          <td className="p-4 font-medium text-primary-light">{lead.email}</td>
                          <td className="p-4 text-green-400 font-mono">
                            ${lead.metrics?.savings?.toLocaleString(undefined, {maximumFractionDigits: 0})}
                          </td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded text-xs font-bold ${lead.level === 3 ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'}`}>
                              Level {lead.level || 1}
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
                            <div className="flex flex-col gap-3">
                              <div className="flex gap-4 items-start">
                                <textarea
                                  value={lead.notes || ''}
                                  onChange={(e) => setLeads(leads.map(l => l.id === lead.id ? { ...l, notes: e.target.value } : l))}
                                  onBlur={(e) => updateLead(lead.id, { notes: e.target.value })}
                                  placeholder="Add internal notes... (auto-saves on click away)"
                                  className="w-full bg-black/40 border border-white/5 rounded-lg px-3 py-2 text-white/70 text-xs focus:border-accent focus:ring-1 focus:ring-accent/30 outline-none transition-all resize-none h-12"
                                />
                                <button 
                                  onClick={() => handleSuggestReply(lead)}
                                  disabled={generatingReplyFor === lead.id}
                                  className="whitespace-nowrap flex items-center justify-center gap-1.5 px-3 py-2 bg-accent/20 text-accent hover:bg-accent hover:text-primary-dark rounded-lg text-xs font-bold transition-all h-12 w-36"
                                >
                                  {generatingReplyFor === lead.id ? 'Generating...' : <><Sparkles size={14}/> Suggest AI Reply</>}
                                </button>
                                <a 
                                  href={`mailto:${lead.email}?subject=Atma AI - Custom ROI Analysis&body=${encodeURIComponent(suggestedReplies[lead.id] || 'Hi,\n\nI saw you used our ROI calculator...')}`}
                                  onClick={() => updateLead(lead.id, { status: 'Contacted' })}
                                  className="whitespace-nowrap flex items-center justify-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold transition-all h-12 w-28"
                                >
                                  <ArrowRight size={14} /> Send Email
                                </a>
                              </div>
                              {suggestedReplies[lead.id] && (
                                <div className="bg-primary-dark border border-accent/30 rounded-lg p-3 relative group">
                                  <div className="absolute top-2 right-2 flex gap-2">
                                    <button onClick={() => navigator.clipboard.writeText(suggestedReplies[lead.id])} className="text-[10px] bg-white/10 px-2 py-1 rounded hover:bg-white/20 text-white transition">Copy</button>
                                    <button onClick={() => setSuggestedReplies(prev => { const n = {...prev}; delete n[lead.id]; return n; })} className="text-[10px] bg-red-500/20 text-red-400 px-2 py-1 rounded hover:bg-red-500/30 transition"><X size={12}/></button>
                                  </div>
                                  <p className="text-xs text-accent font-bold mb-1 flex items-center gap-1"><Sparkles size={12}/> AI Suggested Reply:</p>
                                  <p className="text-sm text-gray-300 whitespace-pre-wrap font-mono leading-relaxed pr-16">{suggestedReplies[lead.id]}</p>
                                </div>
                              )}
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
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-2xl h-fit">
              <h2 className="text-xl font-bold text-primary-light mb-4">Run New Campaign</h2>
              <p className="text-sm text-muted mb-4">Paste a list of URLs (one per line). The engine will scrape them, generate AI hooks, draft emails, and save leads to Firestore.</p>
              
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

            <div className="glass-card p-6 rounded-2xl flex flex-col min-h-[500px]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-primary-light">Outbound History & Output</h2>
                {campaignResults && (
                  <button onClick={downloadCSV} className="flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition">
                    <Download className="h-4 w-4" /> Export CSV
                  </button>
                )}
              </div>

              {isCampaignRunning ? (
                <div className="flex-grow flex flex-col items-center justify-center text-accent">
                  <div className="w-12 h-12 border-4 border-accent/20 border-t-accent rounded-full animate-spin mb-4" />
                  <p>Running Agents...</p>
                </div>
              ) : (!campaignResults || campaignResults.length === 0) ? (
                <div className="flex-grow flex items-center justify-center text-muted border-2 border-dashed border-white/10 rounded-xl">
                  Run a campaign to see results here.
                </div>
              ) : (
                <div className="flex-grow overflow-y-auto space-y-4 max-h-[600px] pr-2">
                  {campaignResults.map((res, i) => (
                    <div key={i} className="bg-black/30 p-4 rounded-xl border border-white/5 hover:border-accent/30 transition group cursor-pointer" onClick={() => setPreviewLead(res)}>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-white text-lg">{res.Company}</h3>
                        <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-muted group-hover:bg-accent group-hover:text-primary-dark transition">Preview Prototype</span>
                      </div>
                      <a href={res.Website} target="_blank" rel="noreferrer" onClick={(e)=>e.stopPropagation()} className="text-xs text-blue-400 flex items-center gap-1 mb-3 hover:underline w-fit">
                        <LinkIcon className="h-3 w-3" /> {res.Website}
                      </a>
                      
                      <div className="mb-3">
                        <span className="text-[10px] font-bold text-muted uppercase tracking-wider">AI Hook</span>
                        <p className="text-sm text-cyan-300 italic">"{res.demoHook}"</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-muted uppercase tracking-wider">Cold Email 1 Preview</span>
                        <p className="text-sm text-gray-400 bg-white/5 p-3 rounded-lg mt-1 line-clamp-2 font-mono">
                          {res.Email_1}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Agency Agent View */}
        {activeTab === 'agency' && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
              <div className="glass-card p-6 rounded-2xl">
                <h2 className="text-xl font-bold text-primary-light mb-2 flex items-center gap-2">
                  <Sparkles className="text-purple-400" /> Agency Agent
                </h2>
                <p className="text-sm text-muted mb-6">
                  Powered by the Lean Six Sigma Operations Manager persona. Automates SOP creation, monitors pipeline bottlenecks, and enforces standard operations.
                </p>
                
                <div className="space-y-3">
                  <button 
                    onClick={() => handleAgentRequest('setup', 'Draft a high-level Organization Blueprint including department structures, key roles, and operational SLAs.')}
                    disabled={isAgentRunning}
                    className="w-full bg-white/5 hover:bg-white/10 text-left px-4 py-3 rounded-xl border border-white/10 transition group"
                  >
                    <p className="text-sm font-bold text-white group-hover:text-purple-400 transition">Organization Setup (Save to DB)</p>
                    <p className="text-xs text-muted mt-1">Generate and store SOPs and Blueprints to Firestore.</p>
                  </button>

                  <button 
                    onClick={() => handleAgentRequest('monitor', 'Analyze the current pipeline data. Identify process bottlenecks and recommend optimizations.')}
                    disabled={isAgentRunning}
                    className="w-full bg-white/5 hover:bg-white/10 text-left px-4 py-3 rounded-xl border border-white/10 transition group"
                  >
                    <p className="text-sm font-bold text-white group-hover:text-blue-400 transition">Monitor Pipeline Health</p>
                    <p className="text-xs text-muted mt-1">Analyze leads via DMAIC framework and flag risks.</p>
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 glass-card rounded-2xl flex flex-col h-[600px] overflow-hidden">
              <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-black/20">
                {agentResponses.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-muted">
                    <Sparkles className="h-12 w-12 text-purple-400/30 mb-4" />
                    <p>Agent is standing by. Run a command or type a request.</p>
                  </div>
                ) : (
                  agentResponses.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] rounded-2xl p-4 ${msg.role === 'user' ? 'bg-purple-500/20 border border-purple-500/30 text-white' : 'bg-white/5 border border-white/10 text-gray-300 font-mono text-sm leading-relaxed'}`}>
                        {msg.role === 'agent' && <div className="text-xs font-bold text-purple-400 mb-2 uppercase tracking-wider flex items-center gap-2"><Sparkles size={12}/> Operations Manager</div>}
                        <div className="whitespace-pre-wrap">{msg.content}</div>
                        {msg.savedId && (
                          <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-green-400">
                            <CheckCircle2 size={14} /> Saved to Database (ID: {msg.savedId})
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
                {isAgentRunning && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-purple-400 text-sm flex items-center gap-3">
                      <div className="w-4 h-4 border-2 border-purple-400/30 border-t-purple-400 rounded-full animate-spin" />
                      Analyzing systems...
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4 border-t border-border bg-black/40">
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleAgentRequest('chat'); }}
                  className="relative"
                >
                  <input
                    type="text"
                    value={agentInput}
                    onChange={(e) => setAgentInput(e.target.value)}
                    placeholder="Ask the Operations Manager..."
                    disabled={isAgentRunning}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-purple-400 transition"
                  />
                  <button 
                    type="submit"
                    disabled={isAgentRunning || !agentInput.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-muted hover:text-purple-400 disabled:opacity-50 transition"
                  >
                    <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Prototype Preview Modal */}
      {previewLead && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setPreviewLead(null)}>
          <div className="bg-primary-dark border border-white/10 w-full max-w-4xl h-[80vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="bg-black/50 border-b border-white/5 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-white/5 text-xs text-muted font-mono px-3 py-1 rounded flex items-center gap-2">
                  <Lock size={10} /> {previewLead.Demo_Link || `https://demo.atma-ai.co.in/${previewLead.Company?.replace(/\s+/g, '_').toLowerCase()}`}
                </div>
              </div>
              <button onClick={() => setPreviewLead(null)} className="text-muted hover:text-white transition"><X size={20}/></button>
            </div>
            
            <div className="flex-1 overflow-y-auto bg-gradient-to-br from-primary-dark via-primary-deeper to-black p-12 relative flex flex-col items-center justify-center text-center">
              {/* Background Accents */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
              
              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8">
                  <Sparkles className="w-4 h-4" /> Customized for {previewLead.Company}
                </div>
                
                <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                  {previewLead.demoHook || `Unlock Enterprise AI for ${previewLead.Company}`}
                </h1>
                
                <p className="text-lg text-gray-400 mb-12">
                  Atma AI has generated a custom deployment architecture based on your public operations profile.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                  {(previewLead.demoFeatures || ['Automated Support', 'Data Analytics', 'Workflow Automation']).map((feat: string, idx: number) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-accent/30 transition duration-300">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                        <CheckCircle2 size={20} />
                      </div>
                      <h3 className="text-white font-bold mb-2">{feat}</h3>
                      <p className="text-xs text-muted">Auto-generated capability specifically tailored to {previewLead.Company}'s tech stack.</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 flex justify-center gap-4">
                  <button className="bg-accent text-primary-dark font-bold px-8 py-3 rounded-lg hover:bg-accent/90 transition">
                    View Technical Scope
                  </button>
                  <button className="bg-white/10 text-white font-bold px-8 py-3 rounded-lg hover:bg-white/20 transition">
                    Book Discovery
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

const Lock = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);
