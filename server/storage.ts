import {
  type InsertContact,
  type Contact,
  type InsertTestimonial,
  type Testimonial,
  contactInquiries,
  testimonials,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  getTestimonialCount(): Promise<number>;
}

export class DatabaseStorage implements IStorage {
  async createContact(contact: InsertContact): Promise<Contact> {
    const [result] = await db.insert(contactInquiries).values(contact).returning();
    return result;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return db.select().from(testimonials);
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const [result] = await db.insert(testimonials).values(testimonial).returning();
    return result;
  }

  async getTestimonialCount(): Promise<number> {
    const result = await db.select().from(testimonials);
    return result.length;
  }
}

export const storage = new DatabaseStorage();
