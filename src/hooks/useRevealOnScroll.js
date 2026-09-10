import { useInView } from "react-intersection-observer";

export function useRevealOnScroll() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return {
    ref,
    className: `transition-all duration-700 ease-out ${
      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`,
  };
}
