// Import the prompt-sync dependency

const prompt = require('prompt-sync')();

// Get combine or deconstruct input from the user

const colors = prompt("Would you like to: 1 - COMBINE or 2 - DECONSTRUCT colors");

// Const statements

const color1 = prompt("Choose your first color, 1 - Red, 2 - Blue, 3 - Yellow");

const color2 = prompt("Choose your second color, 1 - Red, 2 - Blue, 3 - Yellow");

const decon = prompt("Choose the color you would like to deconstruct: 1 - Purple, 2 - Orange, or 3 - Green.");


// Combine

if (Number(colors) === 1) {
    console.log(color1); 
}

if (Number(colors) === 2) {
    console.log(decon);
}

//Combine color

if (Number(color1) === 1 || Number(color1) === 2 || Number(color1) === 3 ) {
    console.log(color2);
} else if (Number(color1) > 3 || Number(color1) < 1) {
    console.log("ERROR");
}

if (Number(color1) === 1 && Number(color2) === 1) {
    console.log("Your new color is more Red");
} else if (Number(color1) === 1 && Number(color2) === 2) {
    console.log("Your new color is Purple");
} else if (Number(color1) === 1 && Number(color1) === 3) {
    console.log("Your new color is Orange");
} else if (Number(color1) === 2 && Number(color2) === 1) {
    console.log("Your new color is Purple");
} else if (Number(color1) === 2 && Number(color2) === 2) {
    console.log("Your new color is More Blue");
} else if (Number(color1) === 2 && Number(color2) === 3) {
    console.log("Your new color is Green");
} else if (Number(color1) === 3 && Number(color2) === 1) {
    console.log("Your new color is Orange");
} else if (Number(color1) === 3 && Number(color2) === 2) {
    console.log("Your new color is Green");
} else if (Number(color1) === 3 && Number(color2) === 3) {
    console.log("Your new color is More Yellow");
} else if (Number(color1) > 3 || Number(color2) < 1) {
    console.log("ERROR");
}

// Deconstruct code

if (Number(decon) === 1) {
    console.log("Your deconstructed colors are BLUE and RED.");
} else if (Number(decon) === 2)  {
    console.log("Your deconstructed colors are YELLOW and RED.");
} else if (Number(decon) === 3) {
    console.log("Your deconstructed colors are BLUE and YELLOW.");
} else if (Number(decon) > 3  || Number(decon) < 1) {
    console.log("Error");
} 
