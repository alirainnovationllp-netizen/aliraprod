import { storage } from "./storage";

const seedTestimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechVault Inc.",
    quote: "AliraLabs transformed how our engineering teams collaborate. Within six months, our delivery velocity increased by 40% and team satisfaction scores hit an all-time high. Their approach is practical, not theoretical.",
    avatarInitials: "SC",
  },
  {
    name: "Marcus Rivera",
    role: "Director of Operations",
    company: "Meridian Health",
    quote: "The leadership program was a game-changer for our middle management. Our leaders now facilitate rather than dictate, and the impact on retention has been remarkable. Truly world-class coaching.",
    avatarInitials: "MR",
  },
  {
    name: "Anika Patel",
    role: "Chief Digital Officer",
    company: "NovaBridge Financial",
    quote: "Navigating digital transformation felt overwhelming until we partnered with AliraLabs. They helped us build a clear roadmap, align stakeholders, and execute with confidence. The results speak for themselves.",
    avatarInitials: "AP",
  },
];

export async function seedDatabase() {
  const count = await storage.getTestimonialCount();
  if (count === 0) {
    for (const testimonial of seedTestimonials) {
      await storage.createTestimonial(testimonial);
    }
    console.log("Seeded testimonials data");
  }
}
