import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { LayoutDashboard, Users, Rocket, BookOpen } from "lucide-react";

const services = [
  {
    icon: LayoutDashboard,
    title: "AI Native Team Operating Models",
    description:
      "We design and implement delivery structures purpose-built for AI enabled environments embedding intelligence directly into how teams plan, execute, and improve.",
    features: [
      "AI Orchestrated Scrum",
      "Scaling Agile for AI Native Teams",
      "Human AI Collaboration Architecture",
    ],
  },
  {
    icon: Users,
    title: "Human AI collaboration Architecture",
    description:
      "Equip leaders with modern, AI enabled management practices  building psychological safety, fostering innovation, and developing servant leadership that drives measurable results in human AI environments",
    features: ["Executive Coaching", "Team Dynamics", "Change Management"],
  },
  {
    icon: Rocket,
    title: "Intelligence Retrofit for Digital Products",
    description:
      "Upgrade traditional products into AI-enabled platforms through MCP integration, real-time intelligence, and embedded conversational interfaces.",
    features: [
      "MCP Integration",
      "Embedded Conversational Interfaces",
      "Agentic Flows",
    ],
  },
  {
    icon: BookOpen,
    title: "AI Employability Accelerator",
    description:
      "Transform academic learning into practical workforce capability through hands on, applied training. We align student skills with the evolving demands of AI-native organizations",
    features: [
      "AI Assisted Full Stack Development",
      "AI Internship",
      "AI Employability Accelerator",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-background"
      data-testid="section-services"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span
            className="text-sm font-medium tracking-widest uppercase text-muted-foreground"
            data-testid="text-services-label"
          >
            What We Offer
          </span>
          <h2
            className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-foreground tracking-tight"
            data-testid="text-services-heading"
          >
            Services That Drive Results
          </h2>
          <p
            className="mt-4 text-muted-foreground text-lg leading-relaxed"
            data-testid="text-services-description"
          >
            From targeted capability building to enterprise transformation, we
            deliver measurable progress for your future advantage
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={cardVariants}>
                <Card
                  className="h-full hover-elevate transition-all duration-300 overflow-visible"
                  data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3
                      className="text-xl font-semibold text-foreground mb-3"
                      data-testid={`text-service-title-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <Badge
                          key={f}
                          variant="secondary"
                          className="no-default-active-elevate"
                        >
                          {f}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
