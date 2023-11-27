# Day 40: Interactive Image Gallery

On Day 40 of the 100 Days of CSS Challenge, we explore an interactive image gallery that uses CSS animations and JavaScript to create engaging user experiences.

## Overview

- This project features a grid of images that expand when clicked, showcasing a simple yet effective technique for interactive galleries.
- It's perfect for portfolios, photo galleries, or any web application where visual content is a focus.

## HTML Structure

- The `.container` class wraps the entire gallery.
- Inside, the `.pics` div contains multiple `.pic` divs, each with an `<img>` tag for individual images.

## CSS Details

- The `.container` sets the position, size, and general styling for the gallery.
- `.pic` defines the individual image containers, including their animations.
- Two keyframes (`imageCheckSmall` and `imageCheckBig`) control the scaling of images on interaction.
- Each `.pic` has a unique `transform-origin` property for varied animation effects.

## JavaScript Functionality

- A script listens for click events on each image, toggling the `active` class to trigger the CSS animation.

## How to Use

1. Incorporate the HTML, CSS, and JavaScript into your project.
2. Replace image sources with your desired images.
3. Customize dimensions and animation properties as needed.

## Cloning the Project

You can clone and run the project using:

```bash
git clone https://github.com/Fredy002/100-Days-Of-CSS-Projects/tree/day_31-40/day_40
cd 100-Days-Of-CSS-Projects
open index.html
```

## Learning Outcomes

- Experiment with different grid layouts or image sizes for varied effects.
- Modify animation durations and easing for different interactive feels.
- Consider adding captions or overlay text for additional information on images.

## Contact

- GitHub: [Fredy002](https://github.com/Fredy002)
- LinkedIn: [Fredy Antonio Almeyda Alania](https://www.linkedin.com/in/fredy-antonio-almeyda-alania/)

Feel free to explore the code to understand how the styling is achieved and maybe tweak some values to see how the design changes. Happy coding!
