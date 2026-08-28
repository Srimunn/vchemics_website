import { FlaskConical, Droplets, Layers, Wrench, PaintBucket, type LucideIcon } from "lucide-react";

export const categoryIcons: Record<string, LucideIcon> = {
  admixtures: FlaskConical,
  waterproofing: Droplets,
  grouts: Layers,
  "repair-micro-concrete": Wrench,
  coatings: PaintBucket,
};

export function getCategoryIcon(cat: string): LucideIcon {
  const key = cat.toLowerCase().replace(/\s+/g, "-");
  if (key.includes("admixture")) return categoryIcons["admixtures"];
  if (key.includes("waterproof") || key.includes("pu-injection"))
    return categoryIcons["waterproofing"];
  if (key.includes("grout")) return categoryIcons["grouts"];
  if (key.includes("repair") || key.includes("micro"))
    return categoryIcons["repair-micro-concrete"];
  if (key.includes("coating")) return categoryIcons["coatings"];
  return categoryIcons[key] ?? FlaskConical;
}
