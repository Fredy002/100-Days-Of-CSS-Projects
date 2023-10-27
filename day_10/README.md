# Day 10: 100 Days of CSS Projects

Welcome to Day 10 of the 100 Days of CSS Challenge! Today's project showcases a sleek digital watch interface that displays the date, time, heart rate, and energy expended. The central theme of the project is a pulsating heart icon surrounded by a rotating progress spinner.

![day_10](https://github.com/Fredy002/100-Days-Of-CSS-Projects/assets/104151778/9d04e171-d582-4a0e-9ccc-8f38c24ac2d6)

## Project Structure

This project comprises three main files:

- `index.html` for the HTML structure.
- `style.css` for styling.
- `script.js` for JavaScript logic to manage the date and time updates.

### HTML Structure

The HTML structure is contained within a main `container` div. Inside the container, there's a `circule` div representing the watch face which includes the date, time, heart rate, and energy expended. The heart rate is symbolized by a heart icon, and the spinner is implemented using an SVG element.

### CSS Styling

The CSS file contains styles for positioning, coloring, and animating the different elements on the watch face. Some key highlights include:

- Using CSS custom properties for managing color scheme and other reusable values.
- Utilizing `position: absolute` and `position: relative` for precise positioning.
- Implementing a keyframe animation for the pulsating heart icon and the rotating spinner.

### JavaScript Logic

The JavaScript logic is primarily focused on managing the date and time updates. It defines a function `updateDateTime` that updates the date and time every minute using the `setInterval` method.

## Usage

1. Clone or download the repository to your local machine.
2. Navigate to the project directory.
3. Open the `index.html` file in your web browser to view the project.

```bash
git clone https://github.com/Fredy002/100-Days-Of-CSS-Projects/tree/day_10
cd 100-Days-Of-CSS-Projects/day_10
open index.html
```

## Learning Outcomes

- Understanding the use of CSS positioning and custom properties.
- Implementing CSS transform and animation properties for creating animations.
- Utilizing JavaScript to manage date and time updates.
- Integrating external icon libraries using the link element.

## Contact

- GitHub: [Fredy002](https://github.com/Fredy002)
- LinkedIn: [Fredy Antonio Almeyda Alania](https://www.linkedin.com/in/fredy-antonio-almeyda-alania/)

Feel free to explore the code to understand how the styling is achieved and maybe tweak some values to see how the design changes. Happy coding!
