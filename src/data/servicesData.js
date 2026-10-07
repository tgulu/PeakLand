import DomesticCleaning from "../assets/frontDoor.webp";
import CommercialCleaning from "../assets/stairCase.webp";
import WindowCleaning from "../assets/windowClean.webp";
import BuildersCleaning from "../assets/kitchenClear.webp";
import LetCleaning from "../assets/sofaClean.webp";
import MoveOutCleaning from "../assets/kitchen.webp";

export const serviceCards = [
  {
    title: "Domestic Cleaning",
    description:
      "Routine or one-off home cleaning that keeps every room fresh, tidy, and spotless.",
    image: DomesticCleaning,
  },
  {
    title: "Commercial Cleaning",
    description:
      "Reliable cleaning for offices, shops, and shared business spaces with flexible scheduling.",
    image: CommercialCleaning,
  },
  {
    title: "Window Cleaning",
    description:
      "Professional interior and exterior window cleaning for a clear, streak-free finish.",
    image: WindowCleaning,
  },
  {
    title: "After Builders Cleaning",
    description:
      "Detailed post-renovation cleaning to remove dust and debris and leave your space ready to use.",
    image: BuildersCleaning,
  },
  {
    title: "Holiday Let Cleaning",
    description:
      "Fast turnaround cleans to keep holiday properties guest-ready between stays.",
    image: LetCleaning,
  },
  {
    title: "Move In and Move Out Cleaning",
    description:
      "Comprehensive end-of-tenancy and move-in cleans for a smooth handover.",
    image: MoveOutCleaning,
  },
];

export const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
