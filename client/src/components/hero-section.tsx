import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-testid="section-hero"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/hero-bg.png)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span
            className="inline-block mb-6 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-white/70 border border-white/20 rounded-full backdrop-blur-sm"
            data-testid="text-hero-tagline"
          >
            Agile &middot; Leadership &middot; Transformation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
          data-testid="text-hero-heading"
        >
          Accelerate Your Team's
          <br />
          <span className="text-blue-300">Growth & Innovation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/75 leading-relaxed"
          data-testid="text-hero-description"
        >
          Engineering the future of work by amplifying human capability with AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("#contact")}
            data-testid="button-hero-contact"
          >
            Start Your Journey
            <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo("#services")}
            data-testid="button-hero-services"
            className="text-white border-white/30 backdrop-blur-sm bg-white/5"
          >
            Explore Services
          </Button>
        </motion.div>
      </div>

      <button
        onClick={() => scrollTo("#services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 transition-colors animate-bounce"
        data-testid="button-scroll-down"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
