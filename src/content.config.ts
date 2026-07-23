import { defineCollection, z } from "astro:content";

const segmentSchema = z.object({
  from: z.string(),
  to: z.string(),
  distance: z.string(),
  driveTime: z.string()
});

const itinerary = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    day: z.number(),
    date: z.string(),
    route: z.string(),
    distance: z.string(),
    driveTime: z.string(),
    accommodation: z.string(),
    region: z.string(),
    mapUrl: z.string().url(),
    icon: z.string(),
    tags: z.array(z.string()).default([]),
    learningRefs: z.array(z.string()).default([]),
    highlights: z.array(z.string()),
    risks: z.array(z.string()),
    backup: z.array(z.string()),
    planNotes: z.array(z.string()).default([]),
    checklist: z.array(z.string()),
    segments: z.array(segmentSchema)
  })
});

export const collections = { itinerary };
