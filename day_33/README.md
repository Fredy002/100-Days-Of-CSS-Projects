# Day 33: Animated Sun and Clouds

Day 33 of the 100 Days of CSS Challenge brings an animated scene featuring a sun and clouds. This project utilizes HTML, CSS, and SVG elements to create a dynamic and visually appealing animation.

![day_33](https://github.com/Fredy002/100-Days-Of-CSS-Projects/assets/104151778/f9f7b5cd-a1d4-475e-bf6d-76cb5a30d1cd)

## Overview

- The animation includes a sun and clouds moving across the screen, depicting a simple day scene.
- SVG elements are used to create the clouds, offering scalability and flexibility in design.
- The project is an excellent example of using CSS animations to bring static elements to life.

## HTML Structure

- The main `container` div acts as the stage for the animation.
- The `sun` div represents the sun.
- Three SVG elements represent different sizes of clouds (`cloud-big`, `cloud-medium`, and `cloud-small`).

## CSS Details

- `.container` sets up the stage with specific height, width, and background color.
- `.sun` is styled to look like the sun, using a circular shape and yellow color.
- Each cloud class is positioned absolutely within the container and styled with fill color.
- Keyframe animations (`sun` and `cloud`) are created to move the sun and clouds across the container.

## Animation Mechanics

- The `sun` animation smoothly translates the sun horizontally across the container.
- The `cloud` animation moves each cloud in a similar horizontal manner, but at different starting points and sizes for variety.

## How to Use

1. Open the `index.html` file in a web browser to view the animation.
2. The sun and clouds will move across the screen in an infinite loop.

## Cloning the Project

You can clone and run the project using:

```bash
git clone https://github.com/Fredy002/100-Days-Of-CSS-Projects/tree/day_31-40/day_32
cd 100-Days-Of-CSS-Projects
open index.html
```

## Learning Outcomes

- Change the path and speed of the sun and clouds for different animation effects.
- Experiment with different shapes or additional elements like stars or birds.
- Modify the background color to represent different times of day.

## Contact

- GitHub: [Fredy002](https://github.com/Fredy002)
- LinkedIn: [Fredy Antonio Almeyda Alania](https://www.linkedin.com/in/fredy-antonio-almeyda-alania/)

Feel free to explore the code to understand how the styling is achieved and maybe tweak some values to see how the design changes. Happy coding!
