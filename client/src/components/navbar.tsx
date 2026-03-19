import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group"
            data-testid="link-logo"
          >
            <div className="w-16 h-16 text-primary transition-transform group-hover:scale-105">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="100%"
                viewBox="180 230 210 200"
                enableBackground="new 0 0 1024 672"
                xmlSpace="preserve"
                className="w-auto h-full"
              >
                <path
                  fill="currentColor"
                  opacity="1.000000"
                  stroke="none"
                  d="
M314.434692,364.435669 
        C303.734406,374.721436 293.297699,384.772522 282.835052,394.796478 
        C278.468872,398.979553 273.770599,399.936218 269.737976,397.557465 
        C265.803802,395.236816 264.761627,391.371704 266.532990,385.175751 
        C269.962616,373.179535 273.328430,361.162781 276.969940,349.230621 
        C278.202393,345.192139 276.871490,344.242401 273.076080,344.271423 
        C258.417511,344.383575 243.757538,344.316467 229.098083,344.306000 
        C227.433151,344.304810 225.746140,344.397705 224.108154,344.169098 
        C221.158768,343.757477 218.720657,342.429993 217.487473,339.521240 
        C216.181335,336.440399 217.478668,333.918640 219.558060,331.835388 
        C227.441895,323.936768 235.390793,316.102325 243.370255,308.300049 
        C260.755463,291.300812 278.189301,274.351257 295.569153,257.346497 
        C300.008301,253.003098 304.431030,251.967499 308.492310,254.545486 
        C312.332123,256.982910 313.087402,260.552460 311.069397,266.521606 
        C306.656830,279.573883 302.258820,292.631042 297.890259,305.581268 
        C299.834808,307.576630 301.949249,306.901581 303.829254,306.935760 
        C319.979462,307.229736 336.130890,307.466217 352.282745,307.649780 
        C355.222351,307.683197 357.934875,308.111603 360.054443,310.333679 
        C363.267883,313.702545 363.057800,317.961700 359.135712,321.751740 
        C346.321014,334.134888 333.408508,346.416870 320.526306,358.730103 
        C318.600220,360.571106 316.634979,362.371094 314.434692,364.435669 
M291.714874,343.349701 
        C289.275635,352.428009 286.836365,361.506317 284.397095,370.584595 
        C284.752930,370.835358 285.108765,371.086090 285.464630,371.336853 
        C303.403992,354.419647 321.343384,337.502472 339.282776,320.585266 
        C339.007782,319.805176 338.732758,319.025055 338.457764,318.244965 
        C322.831818,318.244965 307.205780,318.277191 291.579956,318.234039 
        C280.469299,318.203369 280.325409,317.950958 283.811951,307.339508 
        C286.732422,298.450989 289.640778,289.558502 292.554504,280.667755 
        C292.241058,280.506409 291.927612,280.345062 291.614166,280.183716 
        C273.955017,297.257202 256.295898,314.330719 238.101685,331.921570 
        C239.868286,332.430634 240.184906,332.600891 240.502090,332.601929 
        C253.825119,332.645447 267.148499,332.630707 280.471130,332.721375 
        C287.734497,332.770813 290.498047,335.257263 291.714874,343.349701 
z"
                />
              </svg>
            </div>
            <span
              className={`font-serif text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              AliraLabs
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                onClick={() => scrollTo(link.href)}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
                className={`text-sm font-medium ${
                  scrolled
                    ? "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Button>
            ))}
            <Button
              onClick={() => scrollTo("#contact")}
              data-testid="button-get-started"
              className="ml-3"
            >
              Get Started
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className={`md:hidden ${scrolled ? "" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  onClick={() => scrollTo(link.href)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  className="justify-start text-sm font-medium text-foreground"
                >
                  {link.label}
                </Button>
              ))}
              <Button
                onClick={() => scrollTo("#contact")}
                className="mt-2"
                data-testid="button-mobile-get-started"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
