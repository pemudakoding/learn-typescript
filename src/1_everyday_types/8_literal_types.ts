/** represent as string */
let changingString = "Hello World";
changingString = "Halo dunia";

/** represent as value coz const would not replaceable */
const constString = 'Hello World';

function printText(s: string, alignment: "left" | "right" | "center") {
  // ....
}

printText("Hello, world", "left");

// code below will code error coz the alignment value scoped by literal types
// printText("G'day, mate", "centre");

interface Options {
  width: number
}

function configure(x: Options | "auto") {
  // ....
}


configure({width: 25});
configure("auto");

// code below will code error coz the alignment value scoped by literal types
// configure("automatic")