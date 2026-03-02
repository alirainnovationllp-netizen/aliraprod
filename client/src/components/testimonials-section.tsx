import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import type { Testimonial } from "@shared/schema";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function TestimonialSkeleton() {
  return (
    <Card className="h-full">
      <CardContent className="p-8">
        <Skeleton className="w-8 h-8 rounded-full mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4 mb-6" />
        <div className="flex items-center gap-3 mt-6">
          <Skeleton className="w-10 h-10 rounded-full" />
          <div>
            <Skeleton className="h-4 w-24 mb-1" />
            <Skeleton className="h-3 w-32" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-background"
      data-testid="section-testimonials"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Case Studies
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            See how organizations across the globe have transformed their teams
            and accelerated growth with AliraLabs.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <TestimonialSkeleton key={i} />
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials?.map((t) => (
              <motion.div key={t.id} variants={cardVariants}>
                <Card
                  className="h-full"
                  data-testid={`card-testimonial-${t.id}`}
                >
                  <CardContent className="p-8 flex flex-col h-full">
                    <div>
                      <div>
                        <div className="mt-4 text-muted-foreground text-lg leading-relaxed">
                          "{t.company}"
                        </div>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-primary/20 mb-4 flex-shrink-0" />
                    <p className="text-foreground leading-relaxed flex-1">
                      "{t.quote}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
