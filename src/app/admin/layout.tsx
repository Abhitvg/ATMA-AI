import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-primary-dark text-foreground flex flex-col">
      <Navbar />
      <div className="pt-24 pb-8 border-b border-white/10 bg-primary-deeper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold font-heading text-primary-light">ATMA CRM & Admin</h1>
              <p className="text-muted mt-1">Protected Workspace</p>
            </div>
            
            <nav className="flex flex-wrap gap-2">
              <Link href="/admin" className="px-4 py-2 bg-surface hover:bg-accent/10 rounded-lg text-sm font-medium transition-colors border border-white/10 hover:border-accent/30 text-white">
                Dashboard
              </Link>
              <Link href="/admin/leads" className="px-4 py-2 bg-surface hover:bg-accent/10 rounded-lg text-sm font-medium transition-colors border border-white/10 hover:border-accent/30 text-white">
                Leads
              </Link>
              <Link href="/admin/assets" className="px-4 py-2 bg-surface hover:bg-accent/10 rounded-lg text-sm font-medium transition-colors border border-white/10 hover:border-accent/30 text-white">
                Assets
              </Link>
              <Link href="/admin/documents" className="px-4 py-2 bg-surface hover:bg-accent/10 rounded-lg text-sm font-medium transition-colors border border-white/10 hover:border-accent/30 text-white">
                Documents
              </Link>
            </nav>
          </div>
        </div>
      </div>
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
