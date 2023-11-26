# Day 39: Animated Menu Icon

Day 39 of the 100 Days of CSS Challenge presents an animated menu icon that transforms into a close button, showcasing the power of CSS animations and JavaScript to enhance user interface interactivity.

![day_39](https://github.com/Fredy002/100-Days-Of-CSS-Projects/assets/104151778/6d454ce9-6579-49d1-aafc-02fce1abd7b7)

## Overview

- The project features a menu icon that animates into a close (X) button when clicked.
- JavaScript is used to toggle the animation state.
- Ideal for mobile-friendly or responsive web designs where menu space is limited.

## HTML Structure

- The `.container` class encapsulates the entire menu structure.
- `.menu-icon` contains two divs, `.line-top` and `.line-bottom`, which form the menu icon.
- The `.menu` div contains an unordered list (`<ul>`) representing the menu items.

## CSS Details

- The `.container` class sets the position, size, and styling of the menu area.
- `.menu-icon` class styles the menu icon, including its hover and active states.
- The animations for the lines (`line-top-close`, `line-bottom-close`, `line-top-open`, `line-bottom-open`) are defined to create the transformation effect.

## JavaScript Functionality

- The script toggles the `active` and `paused` classes on the `.menu-icon` and `.menu` on click, activating the CSS animations.
- Event listeners are added to the spans to toggle the menu's appearance.

## How to Use

1. Integrate the provided HTML, CSS, and JavaScript into your web project.
2. Customize the menu items and styling as per your design needs.
3. Use this animated icon for compact and mobile-responsive navigation menus.


## Cloning the Project

You can clone and run the project using:

```bash
git clone https://github.com/Fredy002/100-Days-Of-CSS-Projects/tree/day_31-40/day_39
cd 100-Days-Of-CSS-Projects
open index.html
```

## Learning Outcomes

- Experiment with different colors, sizes, and animation durations.
- Add more interactive elements like hover effects on menu items.
- Implement accessibility features for better usability.

## Contact

- GitHub: [Fredy002](https://github.com/Fredy002)
- LinkedIn: [Fredy Antonio Almeyda Alania](https://www.linkedin.com/in/fredy-antonio-almeyda-alania/)

Feel free to explore the code to understand how the styling is achieved and maybe tweak some values to see how the design changes. Happy coding!
