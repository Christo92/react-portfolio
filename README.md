# Portfotion ReactJS

This is my portfolio using various libraries for animations, routing, and styling. My journey is indicated on it.

You can access here: https://myporfoliodev.netlify.app/

## Technologies and Packages Used

React with `react-dom` (19.0.0)

`react-animations` (1.0.0): For adding easy-to-use CSS animations.

`react-burger-menu` (3.1.0): For managing a responsive burger menu.

`react-rotating-text` (1.4.1): For displaying dynamic rotating text.

`react-router-dom` (7.3.0): For page navigation.

`styled-components` (6.1.15): For component-based styling in JS.

SASS: For advanced styling management.

BEM Methodology: For a clear organization of CSS classes.

## Installation

Clone this repository:

```
git clone <repo-url>
cd <project-name>
```

Install dependencies:

```
npm install
```

Start the project in development mode:

```
npm run dev
```

## Project Structure

```
/src
  /assets       # Images and resources
  /components   # Reusable components
  /fonts        # fonts used
  /img
  /styles       # SCSS files organized using BEM
  /types
  App.js        # Main component
```

## Example of BEM Usage with SASS

```
.button {
  &__primary {
    background-color: blue;
    color: white;
  }

  &__secondary {
    background-color: gray;
    color: black;
  }
}
```
## Contact

For any questions, feel free to open an issue or contact me.
