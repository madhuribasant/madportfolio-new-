import { gsap } from "gsap";

export const loaderAnimation = () => {
  const tl1 = gsap.timeline();

  gsap.set("#loader .reveal .child ", {
    y: 0,
  });

  gsap.set("#hero .reveal:nth-child(2) .child span:nth-child(1)", {
    y: 0,
  });

  tl1
    .from("#loader .reveal .child span", {
      x: 100,
      stagger: 0.5,
      ease: "power3.inOut",
      duration: 0.8,
    })

    .to("#loader div:nth-child(1)", {
      ease: "power3.inOut",
      duration: 2,
      delay: 1,
      height: 0,
    })

    .to("#loader div:nth-child(2)", {
      ease: "power3.inOut",
      duration: 0.5,
      delay: -2,
      height: "100%",
      ease: "power3.inOut",
    })
    .to("#main", {
      ease: "power3.inOut",
      duration: 1.2,
      stagger: 0.5,
      height: "100%",
      ease: "power3.inOut",
    })
    .to("#hero .reveal-heading .child", {
      y: 0,
      duration: 1.5,
      delay: 1,
      stagger: 0.5,
      ease: "power3.inOut",
    })
    .from("#hero .reveal-heading:nth-child(2) .child span:nth-child(1)", {
      x: -600,
      duration: 1.5,
      ease: "power3.inOut",

    });

};
