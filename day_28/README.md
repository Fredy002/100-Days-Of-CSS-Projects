# Day 28: Animated Bell Icon with Expanding Lines

Day 28 showcases a creatively animated bell icon with expanding lines, a project demonstrating the power of CSS animations and SVG elements.

![day_28](https://github.com/Fredy002/100-Days-Of-CSS-Projects/assets/104151778/a2c6bc43-02dd-4172-b317-ba676e431595)

## Overview

This project illustrates:

- An animated bell icon using SVG and CSS.
- Expanding lines surrounding the bell, creating a dynamic visual effect.
- The use of keyframes to control the animation flow and timing.

## HTML Structure

- The `container` div wraps around a `frame` div.
- Inside the `frame`, there are multiple SVG elements: one for the bell and others for the lines.
- Each line SVG has a class like `line-1`, `line-2`, etc., used for individual animations.

## CSS Details

- The `.container` class defines the size, background, and central alignment of the animation.
- The `.bell` class is animated using the `shake` keyframes, creating a bell ringing effect.
- Each line SVG has its unique keyframe animation, such as `line-1`, `line-2`, etc., for a synchronized expanding effect.
- The `@keyframes` rule defines the behavior of the animations, controlling the scaling and opacity of the lines.

## Animation Explanation

- The bell icon uses a shaking animation to mimic the ringing of a bell.
- Each line expands outward from the bell, fading and scaling to create a dynamic effect.
- The staggered start of line animations creates a ripple effect around the bell.

## How to Use

To view the animation:

1. Open the `index.html` file in a web browser.
2. Observe the animated bell and the expanding lines around it.

## Cloning the Project

To clone and view the project locally, use the following commands:

```bash
git clone https://github.com/Fredy002/100-Days-Of-CSS-Projects/tree/day_21-30/day_27
cd 100-Days-Of-CSS-Projects/day_27
open index.html
```

## Learning Outcomes

- Changing the color scheme and stroke properties of the SVG elements.
- Experimenting with different animation timings or effects.
- Incorporating the animation into a larger web project or interface.

## Contact

- GitHub: [Fredy002](https://github.com/Fredy002)
- LinkedIn: [Fredy Antonio Almeyda Alania](https://www.linkedin.com/in/fredy-antonio-almeyda-alania/)

Feel free to explore the code to understand how the styling is achieved and maybe tweak some values to see how the design changes. Happy coding!
