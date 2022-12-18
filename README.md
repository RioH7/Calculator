# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). 

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference

### Screenshot
./images/theme-1.png

### Links

- Solution URL: https://github.com/RioH7/Calculator
- Live Site URL: https://rioh7.github.io/

## My process

### Built with

- Semantic HTML5 markup
- CSS
- JS


### What I learned
Creating a toggle slider in HTML controlled by Javacript. I took a different approach with making a span controlled by text-align to move it across the slider.

```html
<button type="radio" id="theme" onclick="changeTheme()"><span id="toggle">0</span></button>
```

```js
let currentTheme = 1;
const changeTheme = () => {
    switch(currentTheme) {
        case 1:
            currentTheme++;
            document.getElementsByTagName("link")[1].setAttribute("href", "style2.css");
            break;
        ...
    }
};
```

### Continued development

In future projects, I would like to continue using more JavaScript and potentailly use other frameworks or an API to make the project more complex. I would also like to try developing using TDD to try a completely different approach to development.

### Useful resources

- [Frontend Mentor](https://www.frontendmentor.io/home) - Providing the idea for the project in their challenges section.

## Author

- Website - [Rio Humphreys](https://github.com/RioH7)
