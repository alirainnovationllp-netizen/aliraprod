import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Services: [
    { label: "AI Native Team Operating Models", href: "#services" },
    { label: "Human AI collaboration Architecture", href: "#services" },
    { label: "Intelligence Retrofit for Digital Products", href: "#services" },
    { label: "AI Employability Accelerator", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Case Studies", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
};

export function FooterSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="bg-foreground dark:bg-card py-16"
      data-testid="section-footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  A
                </span>
              </div>
              <span
                className="font-serif text-xl font-bold text-white dark:text-foreground"
                data-testid="text-footer-logo"
              >
                AliraLabs
              </span>
            </div>
            <p
              className="text-white/60 dark:text-muted-foreground text-sm leading-relaxed max-w-xs"
              data-testid="text-footer-description"
            >
              Empowering organizations to achieve excellence through agile
              transformation, leadership development, and innovative learning
              solutions.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-white dark:text-foreground font-semibold text-sm mb-4"
                data-testid={`text-footer-category-${category.toLowerCase()}`}
              >
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Button
                      variant="ghost"
                      onClick={() => scrollTo(link.href)}
                      className="text-white/60 dark:text-muted-foreground justify-start px-0 h-auto py-1"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10 bg-white/10 dark:bg-border" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-white/40 dark:text-muted-foreground text-sm"
            data-testid="text-footer-copyright"
          >
            &copy; {new Date().getFullYear()} AliraLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-white/40 dark:text-muted-foreground text-sm h-auto py-1 px-2"
              data-testid="link-privacy"
            >
              Privacy Policy
            </Button>
            <Button
              variant="ghost"
              className="text-white/40 dark:text-muted-foreground text-sm h-auto py-1 px-2"
              data-testid="link-terms"
            >
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
