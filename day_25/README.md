# Day 25: Interactive Map Card

Day 25 features an interactive card animation linked to a map marker, ideal for business locations or points of interest.

## Overview

This project presents an engaging way to display business information on a map. Clicking the map marker reveals a detailed information card.

## HTML Structure

- The `container` holds all components.
- The `map` div includes an SVG map path.
- The `location` div with an SVG icon represents the map marker.
- The `shadow` div adds a floating shadow effect to the marker.
- The `card` div contains business information and action links.

## CSS Details

- The `.map` class applies a blue background and SVG styling.
- `.location` is styled as a clickable map marker with a floating animation.
- `.shadow` creates a subtle shadow under the marker, emphasizing its floating effect.
- The `.card` class styles the information card with a hidden state initially.
- Transition and transform properties are used for smooth animation effects.

## JavaScript Functionality

- Event listeners on the `.location` and `.actions` elements toggle classes to activate or deactivate animations.

## Instructions

To interact with the animation:

1. Open the `index.html` file in a browser.
2. Click the map marker (`location` element) to reveal the information card.
3. Click the action links on the card to toggle its visibility.


## Cloning the Project

To clone and view the project locally, use the following commands:

```bash
git clone https://github.com/Fredy002/100-Days-Of-CSS-Projects/tree/day_21-30/day_25
cd 100-Days-Of-CSS-Projects/day_25
open index.html
```

## Learning Outcomes

- Modify the SVG path in the .map div to represent different locations.
- Adjust the CSS keyframe animations for different motion effects.
- Change the content of the .card div to display different information.
- Experiment with color schemes and font styles to match specific branding.

## Contact

- GitHub: [Fredy002](https://github.com/Fredy002)
- LinkedIn: [Fredy Antonio Almeyda Alania](https://www.linkedin.com/in/fredy-antonio-almeyda-alania/)

Feel free to explore the code to understand how the styling is achieved and maybe tweak some values to see how the design changes. Happy coding!
