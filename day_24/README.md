# Day 24: Checkbox Animation

Day 24 showcases a creative and visually appealing checkbox animation labeled "finish" that integrates SVG and CSS animations.

## Overview

The animation includes:

- A `checkbox` input that triggers the animation.
- A `label` element styled as an interactive button.
- An SVG `circle` that animates a checkmark appearing within it.

## HTML Structure

- The main `container` div holds the interactive elements.
- The `checkbox` input remains hidden but is essential for the state change.
- The `label` is styled to look like a button and contains the text "finish" and an SVG image of a checkmark.
- The `circle` SVG draws the border and fills when the checkbox is checked.

## CSS Details

- The `.button` class applies the initial styling to the label, with hover effects to indicate interactivity.
- The `.circle` class sets the initial state of the SVG circle, with a `stroke-dasharray` and `stroke-dashoffset` to animate the drawing of the circle.
- The `@keyframes` animations define the sequence of changes when the checkbox is checked, including the button shrinking and the circle drawing and expanding.

## Instructions

To view the animation:

1. Open the `index.html` file in a web browser.
2. Click on the "finish" button to see the animation play.

## Cloning the Project

To clone and view the project locally, use the following commands:

```bash
git clone https://github.com/Fredy002/100-Days-Of-CSS-Projects/tree/day_21-30/day_24
cd 100-Days-Of-CSS-Projects/day_24
open index.html
```

## Learning Outcomes
You can adjust the animation by altering the @keyframes in the CSS file:

- Change the timing to make the animation faster or slower.
- Modify the transform properties to alter the scale and rotation effects.
- Update the color scheme to match your desired aesthetic.

## Contact

- GitHub: [Fredy002](https://github.com/Fredy002)
- LinkedIn: [Fredy Antonio Almeyda Alania](https://www.linkedin.com/in/fredy-antonio-almeyda-alania/)

Feel free to explore the code to understand how the styling is achieved and maybe tweak some values to see how the design changes. Happy coding!
