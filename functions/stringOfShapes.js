function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }

  console.log(makeLine(5));

  function makeSquare(size){
    let square =""
    for (let i = 0; i < size; i++) { 
      square += makeLine(size)+`\n`;    
    }
    return square.slice(0,-1);
  }
  console.log(makeSquare(5));

  function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0,-1);
  }
  console.log(makeRectangle(5, 3));

  function makeDownwardStairs(height){
    let downStairs = '';
    for (let i = 0; i < height; i++) {
      downStairs += (makeLine(i+1) + '\n');
    }
    return downStairs.slice(0,-1);
  }
  console.log(makeDownwardStairs(5));

  function makeSpaceLine(numSpaces, numChars){
    let numSpace ="";
    let output = ""
    for (let i = 0; i <= numSpaces; i++) {
     numSpace += " ";
    }
    
    output = numSpace + makeLine(numChars) + numSpace;
    
  return output.slice(0,-1);

  }
  console.log(makeSpaceLine(3, 5));

  function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }
  console.log(makeIsoscelesTriangle(5));

  function makeDiamond(height){
    let diamond = '';
    for (let i = 0; i < height; i++) {
      diamond += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');      
    }
    for (let i = height; i >= 0 ; i--) {
      diamond += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');      
    }
    
    return diamond;
  }
  console.log(makeDiamond(5));