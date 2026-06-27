import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function PrivacyPolicy() {
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
                Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Policy</span>
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
                <h2>1. Introduction</h2>
                <p>
                  At ATMA Consultancy Services, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                </p>
                <h2>2. The Data We Collect About You</h2>
                <p>
                  We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul>
                  <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                  <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                  <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
                </ul>
                <h2>3. How We Use Your Personal Data</h2>
                <p>
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul>
                  <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                  <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                  <li>Where we need to comply with a legal or regulatory obligation.</li>
                </ul>
                <h2>4. Data Security</h2>
                <p>
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.
                </p>
                <h2>5. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy, please contact us at: <a href="mailto:ceo@atma-ai.co.in">ceo@atma-ai.co.in</a>.
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
