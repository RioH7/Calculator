let currentTheme = 1;
let result = document.getElementById('result');
let equation = [];

//Allows changing between all 3 themes
const changeTheme = () => {
    switch(currentTheme) {
        case 1:
            currentTheme++;
            document.getElementsByTagName("link")[1].setAttribute("href", "style2.css");
            break;
        case 2:
            currentTheme++;
            document.getElementsByTagName("link")[1].setAttribute("href", "style3.css");
            break;
        case 3:
            currentTheme = 1;
            document.getElementsByTagName("link")[1].setAttribute("href", "style1.css");
            break;
    }
};

function takeInput(e){
    let lastElement = equation[equation.length - 1];
    //Showing answer when = is pressed
    if(e.target.value === "=") {
        result.innerHTML = eval(equation.join(' '));
        equation = [`${eval(equation.join(' '))}`];
        console.log(equation);
    }
    
    //Adding math operators to equation
    if(e.target.classList.contains("symbol")) {
        if(Number.isNaN(Number(lastElement))) {
            equation.pop();
        }
        equation.push(e.target.value);
    }
    //reset equation array and on screen answer
    if(e.target.value === "reset") {
        equation = [];
        result.innerHTML = "0";
    }
    
    //DELETE FUNCTION
    if(e.target.value === "del") {
        //take number away if last entry was number
        if(!Number.isNaN(Number(lastElement))) {
            let x = lastElement.substring(0, lastElement.length - 1);
            equation.pop();
            equation.push(`${x}`);
        } else {
            //take away last entry if symbol
            equation.pop();
        }
        if(equation.length !== 0)
            result.innerHTML = equation[equation.length - 1];
    }
    
    //Adds numbers to equation and changes on screen answer to latest number
    if(e.target.classList.contains("numberBtn")) {
        if(!Number.isNaN(Number(lastElement))) {
            let x = lastElement;
            equation.pop();
            equation.push(x + e.target.value);
        } else {
            equation.push(e.target.value);
        }
        result.innerHTML = equation[equation.length - 1];
    }
}

document.getElementById('keys').addEventListener('click', takeInput, false);
