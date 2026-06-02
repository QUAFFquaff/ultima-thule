import type { CollectionEntry } from "astro:content";

export function toDay(entry: CollectionEntry<"itinerary">) {
  return {
    slug: entry.id.replace(/\.md$/, ""),
    ...entry.data
  };
}

export function sortDays(entries: CollectionEntry<"itinerary">[]) {
  return entries.map(toDay).sort((a, b) => a.day - b.day);
}
