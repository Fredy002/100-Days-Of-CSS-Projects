# Day 38: Interactive Logo Animation

In Day 38 of the 100 Days of CSS Challenge, we explore an interactive logo animation featuring a toggle effect. This example demonstrates how a simple checkbox input can be used to create a visually appealing animation for logos or icons on web interfaces.

![day_38](https://github.com/Fredy002/100-Days-Of-CSS-Projects/assets/104151778/b035c14c-d128-44d3-82df-1682393f2029)

## Overview

- The project uses a checkbox input to toggle between two states of a logo.
- The logo transitions between two colors (white and purple) with a scaling effect.
- This technique is ideal for interactive elements like toggles, switches, or buttons in web design.

## HTML Structure

- The `.container` class wraps the entire structure.
- A `checkbox` input is used to control the animation.
- Two `div` elements with classes `.logo white` and `.logo purple` represent the two states of the logo.

## CSS Details

- The `.container` class sets the position, size, and appearance of the toggle area.
- `.logo` class positions the logo centrally within the container.
- `.white` and `.purple` classes define the initial fill color and transition effects for the logo.

## Animation Mechanics

- The `input:checked ~ .check .white` and `input:checked ~ .check .purple` selectors trigger the transformation when the checkbox is toggled.
- CSS `transform` property is used to scale the logo, creating the toggle effect.
- Transition effects are applied for a smooth transformation between states.

## How to Use

1. Implement the provided HTML and CSS in your project.
2. Customize the logo and colors according to your branding.
3. Use this animation for interactive elements in web interfaces, such as settings toggles or theme switches.

## Cloning the Project

You can clone and run the project using:

```bash
git clone https://github.com/Fredy002/100-Days-Of-CSS-Projects/tree/day_31-40/day_36
cd 100-Days-Of-CSS-Projects
open index.html
```

## Learning Outcomes

- Experiment with different colors and shapes for the logo.
- Adjust the scaling factor for a more subtle or dramatic effect.
- Implement additional animations or effects for hover states.

## Contact

- GitHub: [Fredy002](https://github.com/Fredy002)
- LinkedIn: [Fredy Antonio Almeyda Alania](https://www.linkedin.com/in/fredy-antonio-almeyda-alania/)

Feel free to explore the code to understand how the styling is achieved and maybe tweak some values to see how the design changes. Happy coding!
