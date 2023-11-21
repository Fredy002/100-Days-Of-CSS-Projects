# Day 35: Circular Loader Animation

On Day 35 of the 100 Days of CSS Challenge, we explore a circular loader animation, showcasing the use of SVG and CSS animations to create a dynamic loading indicator.

## Overview

- This project presents a circular loader animation, commonly used as a loading or progress indicator.
- SVG is used to create the circular shapes, and CSS animations bring the loader to life.
- The loader combines rotation and stroke-dasharray manipulations to create a compelling visual effect.

## HTML Structure

- A single `container` div holds the entire loader.
- Inside the `container`, an SVG element defines the circular loader with two circles: `.bg` and `.loader`.

## CSS Details

- `.container` sets the size and positions the loader centrally with a background color.
- `.bg` and `.loader` are both circles with different stroke properties.
- `.bg` serves as a static background circle.
- `.loader` is the animated circle, with distinct stroke properties and animations applied.

## Animation Mechanics

- `@keyframes line` animates the `stroke-dashoffset` of the loader, creating a sense of progress being filled.
- `@keyframes spin` rotates the loader, enhancing the dynamic feel.
- `transform-origin: 50% 50%` ensures the rotation occurs centrally.

## How to Use

1. Embed the HTML and CSS in your project to include the loader.
2. Customize the color and size as needed to match your design.
3. Use this loader as a visual indicator for loading processes or as a stylistic element.

## Cloning the Project

You can clone and run the project using:

```bash
git clone https://github.com/Fredy002/100-Days-Of-CSS-Projects/tree/day_31-40/day_35
cd 100-Days-Of-CSS-Projects
open index.html
```

## Learning Outcomes

- Adjust the speed of the animations for different effects.
- Change the colors to match your branding or design theme.
- Experiment with different shapes or multiple loaders for more complex designs.

## Contact

- GitHub: [Fredy002](https://github.com/Fredy002)
- LinkedIn: [Fredy Antonio Almeyda Alania](https://www.linkedin.com/in/fredy-antonio-almeyda-alania/)

Feel free to explore the code to understand how the styling is achieved and maybe tweak some values to see how the design changes. Happy coding!
