# Day 34: Animated Text with Lines

Day 34 of the 100 Days of CSS Challenge features an animated text presentation with dynamic line elements. This project uses HTML, CSS, and SVG to create a sophisticated animation effect.

## Overview

- The animation displays text with an interesting stroke and fill animation, accompanied by horizontal lines that expand.
- SVG is used for the text, allowing for intricate animation details.
- The project showcases the power of CSS animations in creating engaging text presentations.

## HTML Structure

- The `container` div serves as the main stage.
- Inside the `container`, there is a `center` div that holds the `line` divs and the `text` SVG.
- The SVG `text` element contains paths (`a1`, `a2`, `a3`) for the animation.

## CSS Details

- `.container` sets up the primary stage with defined height, width, and background color.
- `.line` creates horizontal lines with an animation that expands their width.
- `.text` contains the styling for the SVG text, including stroke and fill properties.
- The `.a1`, `.a2`, `.a3` classes within `.text` are animated differently to create a layered text effect.

## Animation Mechanics

- The `line` animation gradually increases the width of the lines.
- The `fill` animation for `.a1`, `.a2`, and `.a3` uses `stroke-dasharray` and `stroke-dashoffset` to create a drawing effect on the text.

## How to Use

1. Open the `index.html` file in a web browser to view the animation.
2. Watch as the lines expand and the text appears to be drawn dynamically.

## Cloning the Project

You can clone and run the project using:

```bash
git clone https://github.com/Fredy002/100-Days-Of-CSS-Projects/tree/day_31-40/day_34
cd 100-Days-Of-CSS-Projects
open index.html
```

## Learning Outcomes

- Change the colors and stroke widths for different visual effects.
- Adjust the timing and easing of animations to create different dynamics.
- Experiment with different text or shapes in the SVG.

## Contact

- GitHub: [Fredy002](https://github.com/Fredy002)
- LinkedIn: [Fredy Antonio Almeyda Alania](https://www.linkedin.com/in/fredy-antonio-almeyda-alania/)

Feel free to explore the code to understand how the styling is achieved and maybe tweak some values to see how the design changes. Happy coding!
