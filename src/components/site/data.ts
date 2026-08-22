import admixturesImg from "@/assets/product-admixtures.jpg";
import groutsImg from "@/assets/product-grouts.jpg";
import waterproofingImg from "@/assets/product-waterproofing.jpg";
import microConcreteImg from "@/assets/product-microconcrete.jpg";

export const products = [
  {
    title: "Concrete Admixtures",
    image: admixturesImg,
    alt: "Liquid concrete admixture being dosed into a fresh cement mix",
    description:
      "Superplasticisers, retarders and accelerators that cut water demand while driving early strength gain.",
  },
  {
    title: "Non-shrink Grouts",
    image: groutsImg,
    alt: "Non-shrink grout placed beneath a steel machine base plate on an industrial foundation",
    description:
      "Cementitious, epoxy, PMMA and polyurethane grouts for base plates, anchors and precast joints.",
  },
  {
    title: "Waterproofing Solutions",
    image: waterproofingImg,
    alt: "Applicator rolling a liquid waterproofing membrane across a concrete rooftop",
    description:
      "Crystalline, acrylic and PU membrane systems for basements, terraces, tanks and wet areas.",
  },
  {
    title: "Micro Concrete",
    image: microConcreteImg,
    alt: "Micro concrete repair mortar applied to a damaged reinforced concrete column",
    description:
      "Flowable, shrinkage-compensated repair concrete for structural rehabilitation and jacketing.",
  },
] as const;

export const admixtureUses = [
  "Pumped Concrete",
  "High Fluidity Concrete",
  "High Strength Concrete",
  "Ready-Mixed Concrete",
  "Long Distance Transport Concrete",
] as const;

export const industries = [
  "Concrete",
  "Civil Engineering",
  "Industrial Manufacturing",
  "Flooring",
  "Restoration and Renovation",
  "Mining and Tunneling",
  "Power and Energy",
  "Building and Construction",
] as const;

export const stats = [
  { value: 2, label: "Years of Expertise" },
  { value: 10, label: "Challenging Projects" },
  { value: 40, label: "Amazing Products" },
  { value: 50, label: "Happy Customers" },
] as const;
