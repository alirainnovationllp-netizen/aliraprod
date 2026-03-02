import { motion } from "framer-motion";
import { Target, Award, TrendingUp, Globe } from "lucide-react";

const stats = [
  { icon: Target, value: "200+", label: "Teams Transformed" },
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: TrendingUp, value: "95%", label: "Client Satisfaction" },
  { icon: TrendingUp, value: "10x", label: "Productivity Boost" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 relative overflow-hidden"
      data-testid="section-about"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.04] dark:opacity-[0.06]"
        style={{ backgroundImage: "url(/images/about-bg.png)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-card/90 via-card/95 to-card/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              About AliraLabs
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Your Partner in Organizational Excellence
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Sustainable advantage in the AI era will not come from tools
              alone. It will come from organizations that redesign how humans
              and intelligent systems work together at scale, every day, across
              the enterprise.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Alira Labs helps organizations transition from experimenting with
              artificial intelligence to operating as truly AI native
              enterprises. We combine strategic insight, operating model design,
              and hands-on execution to embed intelligence directly into how
              work gets done across teams, products, and decision systems. Our
              focus is not technology adoption alone. We redesign how
              organizations plan, build, deliver, and improve in environments
              where human capability is augmented by intelligent systems.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="flex items-start gap-3"
                    data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-md overflow-hidden">
              <img
                src="/images/about-bg.png"
                alt="AliraLabs team collaboration"
                className="w-full h-auto object-cover rounded-md"
                data-testid="img-about"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-md" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-md -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-md -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
