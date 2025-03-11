
gsap.fromTo(
  ".main-headline>p",
  {
    x: 500,
    scale: 1,
    opacity: 0,
  },
  {
    duration: 2.5,
    x: 0,
    scale: 1,
    opacity: 1,
    ease: "power3.out",
  }
);

gsap.fromTo(
  ".hero>img",
  {
    x: -500,
    scale: 1,
    opacity: 0,
  },
  {
    duration: 2.5,
    x: 0,
    scale: 1,
    opacity: 1,
    ease: "power3.out",
  }
);

gsap.fromTo(".advantages-card", 
    { 
        x: -200,                // Start from the left
        y: -50,                 // Start slightly up for the fade-down effect
        rotationY: -180,        // Start flipped
        opacity: 0              // Start completely transparent
    }, 
    { 
        duration: 2.5,            // Duration of the animation
        x: 0,                   // Move to the original horizontal position
        y: 0,                   // Move to the original vertical position
        rotationY: 0,           // Unflip the element
        opacity: 1,             // Fade in
        ease: "power3.out"      // Easing function for smoothness
    }
);

gsap.fromTo(".clean-first", 
    { 
        x: 500,                 // Start from the right
        opacity: 0              // Start completely transparent
    }, 
    { 
        duration: 2.5,            // Duration of the animation
        x: 0,                   // Move to the original position
        opacity: 1,             // Fade in
        ease: "power3.out"      // Easing function for smoothness
    }
);




