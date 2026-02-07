import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Rocket,
  BookOpen,
} from "lucide-react";

const services = [
  {
    icon: LayoutDashboard,
    title: "Agile Training",
    description:
      "Master Scrum, Kanban, and SAFe methodologies with immersive workshops tailored to your team's maturity level. From fundamentals to advanced scaling frameworks.",
    features: ["Scrum & Kanban Workshops", "SAFe Implementation", "Agile Coaching Certification"],
  },
  {
    icon: Users,
    title: "Leadership Development",
    description:
      "Equip leaders with modern management practices. Build psychological safety, foster innovation, and develop servant leadership skills that drive results.",
    features: ["Executive Coaching", "Team Dynamics", "Change Management"],
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description:
      "Navigate your organization's digital journey with confidence. We align technology, process, and culture to unlock sustainable competitive advantage.",
    features: ["Transformation Roadmaps", "Process Optimization", "Culture Alignment"],
  },
  {
    icon: BookOpen,
    title: "Learning Products",
    description:
      "Access our curated library of courses, toolkits, and frameworks designed for self-paced learning. Scale knowledge across your entire organization.",
    features: ["Online Courses", "Assessment Tools", "Resource Libraries"],
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
    <section id="services" className="py-24 lg:py-32 bg-background" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground" data-testid="text-services-label">
            What We Offer
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-foreground tracking-tight" data-testid="text-services-heading">
            Services That Drive Results
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed" data-testid="text-services-description">
            From hands-on workshops to enterprise-wide transformation programs,
            we meet you where you are and take you where you want to be.
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
                <Card className="h-full hover-elevate transition-all duration-300 overflow-visible" data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3" data-testid={`text-service-title-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <Badge key={f} variant="secondary" className="no-default-active-elevate">
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
