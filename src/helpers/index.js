import gsap from "gsap";

export const hoverEnter = (logo, text, color) => {
  if (logo) {
    gsap.to(logo, {
      fill: color,
      duration: 0.5,
      ease: "power2.easeOut"
    });
  }
  if (text) {
    gsap.to(text, {
      autoAlpha: 1,
      duration: 0.5,
      ease: "power2.easeOut"
    });
  }
};

export const hoverLeave = (logo, text, color) => {
  if (logo) {
    gsap.to(logo, {
      fill: color,
      duration: 0.5,
      ease: "power2.easeOut"
    });
  }
  if (text) {
    gsap.to(text, {
      autoAlpha: 0,
      duration: 0.5,
      ease: "power2.easeOut"
    });
  }
};

export const scrollTo = (hashtag, timeout = 1) => {
  setTimeout(() => {
    //to prevent execution when pass was switched before timer ended
    if (location.pathname !== "/") return;
    location.href = hashtag;
  }, timeout);
};
