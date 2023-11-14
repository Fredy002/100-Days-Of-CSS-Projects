# Day 26: Interactive Cards with JavaScript

Day 26 features an interactive card layout where each card reveals a motivational message upon clicking the 'ok' button.

![day_26](https://github.com/Fredy002/100-Days-Of-CSS-Projects/assets/104151778/234d6f99-c7af-43d6-a1bd-b0b3417fc686)

## Overview

This project showcases:

- A set of three cards, each containing a unique message and design.
- A JavaScript-driven interaction that toggles the visibility of these cards.
- Animated transitions between active and inactive states of the cards.

## HTML Structure

- The main `container` div holds three `card` divs.
- Each `card` contains a `number-bg`, `number`, `text` section, and a `button`.
- The `text` section includes a `headline` span and a paragraph `<p>`.

## CSS Details

- `.card` class positions and styles the cards with a fade-in and fade-out animation.
- `.number-bg` and `.number` style the decorative number elements on each card.
- `.text` and `.headline` control the layout and styling of the card's text content.
- `.button` styles the interactive button on each card with hover effects.

## JavaScript Functionality

- Variables `cardOne`, `cardTwo`, and `cardThree` refer to the respective cards.
- Each button has an event listener for the 'click' event.
- Clicking a button toggles the `active` and `inactive` classes of the respective cards, triggering the CSS animations.

## Instructions

To interact with the cards:

1. Open the `index.html` file in a web browser.
2. Click the 'ok' button on each card to toggle between the cards and read the messages.

## Cloning the Project

To clone and view the project locally, use the following commands:

```bash
git clone https://github.com/Fredy002/100-Days-Of-CSS-Projects/tree/day_21-30/day_26
cd 100-Days-Of-CSS-Projects/day_26
open index.html
```

## Learning Outcomes

- Modifying the text content in each card for different messages.
- Changing the colors and styles in the CSS file for a new look.
- Adjusting the animations or adding more cards for extended interaction.


## Contact

- GitHub: [Fredy002](https://github.com/Fredy002)
- LinkedIn: [Fredy Antonio Almeyda Alania](https://www.linkedin.com/in/fredy-antonio-almeyda-alania/)

Feel free to explore the code to understand how the styling is achieved and maybe tweak some values to see how the design changes. Happy coding!
