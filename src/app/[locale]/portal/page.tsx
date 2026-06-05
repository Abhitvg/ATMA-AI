"use client";

import { useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut, 
  onAuthStateChanged,
  User
} from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lock, LogOut, FileText, Activity } from "lucide-react";
import Image from "next/image";

export default function Portal() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [documents, setDocuments] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        fetchUserDocuments(currentUser.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchUserDocuments = async (uid: string) => {
    try {
      const q = query(collection(db, "client_documents"), where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDocuments(docs);
    } catch (err) {
      console.error("Error fetching docs", err);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError("Invalid email or password.");
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      setError("Failed to sign in with Google.");
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-primary-dark flex items-center justify-center text-accent">Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-primary-dark bg-noise">
        {!user ? (
          // Login Screen
          <div className="max-w-md mx-auto px-4 relative z-10">
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-blue-500" />
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-3xl font-bold font-heading text-primary-light mb-2">Client Portal</h1>
              <p className="text-muted text-sm mb-8">Access your project updates, invoices, and private research papers.</p>
              
              {error && <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg">{error}</div>}
              
              <form onSubmit={handleLogin} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">Email Address</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-primary-light focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50"
                    placeholder="client@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">Password</label>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-primary-light focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <button type="submit" className="w-full bg-accent text-primary-dark font-bold py-3 rounded-lg hover:bg-white transition-colors">
                  Sign In
                </button>
              </form>

              <div className="mt-6 flex items-center gap-4">
                <div className="h-px bg-border flex-1" />
                <span className="text-xs text-muted uppercase">OR</span>
                <div className="h-px bg-border flex-1" />
              </div>

              <button 
                onClick={handleGoogleLogin}
                className="mt-6 w-full flex items-center justify-center gap-2 bg-surface border border-border text-primary-light font-medium py-3 rounded-lg hover:border-accent/50 hover:text-accent transition-colors"
              >
                <Image src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width={20} height={20} />
                Sign in with Google
              </button>
            </div>
          </div>
        ) : (
          // Dashboard Screen
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-border pb-6">
              <div>
                <h1 className="text-3xl font-bold font-heading text-primary-light">Welcome back</h1>
                <p className="text-muted mt-1">{user.email}</p>
              </div>
              <button 
                onClick={() => signOut(auth)}
                className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border text-muted hover:text-red-400 hover:border-red-400/30 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-center gap-3 text-accent mb-4">
                  <Activity className="w-5 h-5" />
                  <h3 className="font-semibold">Project Status</h3>
                </div>
                <p className="text-2xl font-bold text-primary-light">On Track</p>
                <p className="text-sm text-muted mt-2">Next milestone delivery in 4 days.</p>
              </div>
              {/* Add more metric cards if needed */}
            </div>

            <h2 className="text-xl font-bold font-heading text-primary-light mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-accent" />
              Your Documents
            </h2>
            
            {documents.length > 0 ? (
              <div className="grid gap-4">
                {documents.map((doc) => (
                  <div key={doc.id} className="glass-card p-4 rounded-xl flex justify-between items-center hover:border-accent/30 transition-colors cursor-pointer">
                    <div>
                      <p className="font-semibold text-primary-light">{doc.title}</p>
                      <p className="text-xs text-muted mt-1">{doc.date} • {doc.type}</p>
                    </div>
                    <button className="text-sm text-accent hover:underline">Download</button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center border border-dashed border-border rounded-2xl bg-surface/50">
                <p className="text-muted">No documents available yet.</p>
              </div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
