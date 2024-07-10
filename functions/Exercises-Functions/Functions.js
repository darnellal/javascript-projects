// Rectangle
function makeLine(size) {
    let line = "";
    for (let i = 0; i < size; i++) {
        line += "#";
    }
    return line;
}

//console.log(makeLine(5));

// Square 
function makeSquare(size) {
    let square = "";
    for (let i = 0; i < size; i++) {
        square += makeLine(size);
        if (i === size - 1) {
            break
        } else {
            square += "\n";
    }
}
    return square;
}

//console.log(makeSquare(5));

//Rectangle
function makeRectangle(width, height) {
    let rectangle = "";
    for (let i = 0; i < height; i++) {
        rectangle += makeLine(width);
        if (i === height - 1) {
            break
        } else {
            rectangle += "\n";
        }
    }

    return rectangle;
}

// console.log(makeRectangle(5, 3));

// Make Stairs
function makeDownwardStairs(height) {
    let stairs = "";
    for (let i = 0; i < height; i++) {
        stairs += makeLine(i + 1);
        stairs += "\n";
    }

    return stairs.slice(0, -1);
}

// console.log(makeDownwardStairs(5));

// Make Space Line
function makeSpaceLine(numSpaces, numChars) {
    spaceLine = "";
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += " ";
    }
    spaceLine += makeLine(numChars);
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += " ";
    }

    return spaceLine;
}

// console.log(makeSpaceLine(3, 5));

// Make Isosceles Triangle
function makeIsoscelesTriangle(height) {
    let isoscelesTriangle = "";
    for (let i = 0; i < height; i ++) {
        isoscelesTriangle += makeSpaceLine(height - i - 1, i * 2 + 1);
        isoscelesTriangle += "\n"
    }

    return isoscelesTriangle.slice(0, -1);
}

// console.log(makeIsoscelesTriangle(5));

// Make Diamonds
function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

function makeDiamond(height) {
    let diamond = "";
    diamond += makeIsoscelesTriangle(height);
    diamond += "\n";
    diamond += reverse(makeIsoscelesTriangle(height));

    return diamond;
}

console.log(makeDiamond(5));