import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <section className="pt-32 pb-20 relative bg-primary-dark bg-noise shadow-[inset_0_0_120px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-[30%] right-[5%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[150px] animate-pulse-glow" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <h1 className="text-5xl md:text-6xl font-bold font-heading text-primary-light mb-6 leading-tight">
                Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Service</span>
              </h1>
              <p className="text-xl text-muted leading-relaxed">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-a:text-accent hover:prose-a:text-accent/80">
                <h2>1. Agreement to Terms</h2>
                <p>
                  By accessing our website at atma-ai.co.in, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                </p>
                <h2>2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on ATMA Consultancy Services&apos; website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul>
                  <li>modify or copy the materials;</li>
                  <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                  <li>attempt to decompile or reverse engineer any software contained on ATMA Consultancy Services&apos; website;</li>
                  <li>remove any copyright or other proprietary notations from the materials; or</li>
                  <li>transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
                </ul>
                <h2>3. Disclaimer</h2>
                <p>
                  The materials on ATMA Consultancy Services&apos; website are provided on an &apos;as is&apos; basis. ATMA Consultancy Services makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <h2>4. Limitations</h2>
                <p>
                  In no event shall ATMA Consultancy Services or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ATMA Consultancy Services&apos; website, even if ATMA Consultancy Services or a ATMA Consultancy Services authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
                <h2>5. Revisions and Errata</h2>
                <p>
                  The materials appearing on ATMA Consultancy Services&apos; website could include technical, typographical, or photographic errors. ATMA Consultancy Services does not warrant that any of the materials on its website are accurate, complete or current. ATMA Consultancy Services may make changes to the materials contained on its website at any time without notice. However ATMA Consultancy Services does not make any commitment to update the materials.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
