import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const EMAIL = "alirainnovationllp@gmail.com";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-card"
      data-testid="section-contact"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              Get In Touch
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Ready to Transform Your Organization?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Tell us about your goals and challenges. Our team will craft a
              tailored approach that fits your needs, timeline, and budget.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">
                    Email Us
                  </div>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">
                    Call Us
                  </div>
                  <div className="text-muted-foreground text-sm">
                    +91 (974) 073-9533
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">
                    Visit Us
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Bangalore, India
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <Mail className="w-16 h-16 text-primary/30 mb-6" />
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
              Let's Start a Conversation
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
              Drop us an email with your goals and challenges, and we'll get back to you within 24 hours.
            </p>
            <Button
              size="lg"
              asChild
              data-testid="button-submit-contact"
            >
              <a href={`mailto:${EMAIL}?subject=Inquiry from AliraLabs Website`}>
                Send Us an Email
                <Send className="ml-1 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
