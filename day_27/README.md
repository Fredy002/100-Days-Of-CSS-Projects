# Day 27: To-Do List with Checkbox Animation

Day 27 presents an animated to-do list, where each task is marked with an interactive checkbox that reveals a checkmark upon completion.

## Overview

This project demonstrates:

- A visually appealing to-do list with a dynamic date display.
- Custom-styled checkboxes that reveal a checkmark when checked.
- Use of JavaScript to dynamically display the current date.

## HTML Structure

- The main `container` div holds a `list` div.
- The `list` contains a `head` section with a `title` and a dynamically updated `date`.
- A list of tasks is presented within an unordered list `<ul>`, each with a custom checkbox and label.

## CSS Details

- `.container` and `.list` classes define the size, background, and styling of the to-do list.
- `.head`, `.title`, and `.date` style the header of the list.
- Custom checkbox styles are achieved with `.button` and `.checkmark` classes.
- The `input:checked` selector is used to change styles when a task is marked as completed.

## JavaScript Functionality

- Event listener waits for the DOM to be loaded before executing.
- The current date is fetched, formatted, and displayed in the `.date` element.

## Instructions

To use the to-do list:

1. Open the `index.html` file in a web browser.
2. Click on the circular button next to a task to mark it as completed.

## Cloning the Project

To clone and view the project locally, use the following commands:

```bash
git clone https://github.com/Fredy002/100-Days-Of-CSS-Projects/tree/day_21-30/day_27
cd 100-Days-Of-CSS-Projects/day_27
open index.html
```

## Learning Outcomes

- Adding more tasks or modifying existing ones.
- Changing the color scheme and styling in the CSS file.
- Expanding the JavaScript to include more dynamic features like adding new tasks.

## Contact

- GitHub: [Fredy002](https://github.com/Fredy002)
- LinkedIn: [Fredy Antonio Almeyda Alania](https://www.linkedin.com/in/fredy-antonio-almeyda-alania/)

Feel free to explore the code to understand how the styling is achieved and maybe tweak some values to see how the design changes. Happy coding!
