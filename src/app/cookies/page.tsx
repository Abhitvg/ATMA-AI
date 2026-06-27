import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function CookiesPolicy() {
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
                Cookies <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Policy</span>
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
                <h2>1. What Are Cookies</h2>
                <p>
                  As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or &apos;break&apos; certain elements of the sites functionality.
                </p>
                <h2>2. How We Use Cookies</h2>
                <p>
                  We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
                </p>
                <h2>3. Disabling Cookies</h2>
                <p>
                  You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.
                </p>
                <h2>4. The Cookies We Set</h2>
                <ul>
                  <li>
                    <strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.
                  </li>
                </ul>
                <h2>5. Third Party Cookies</h2>
                <p>
                  In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
                </p>
                <ul>
                  <li>
                    This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
