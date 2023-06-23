var input, heading;

function setup(){
  createCanvas(300, 200);

  input = createInput();
  input.position(5, 60);

  heading = createElement("h3", "Bla bla bla");
  heading.position(5, 20);

  textAlign(CENTER);
  textSize(50);

}

function draw(){

  const value = input.value();
  
  switch (value) {
    case 'a': console.log("O caractere digitado é uma vogal");
              break;
    case "e": console.log("Essa letra é uma vogal");
              break;
    case "i": console.log("Essa letra é uma vogal");
              break;  
    case "o": console.log("Essa letra é uma vogal");
              break;
    case "u": console.log("Essa letra é uma vogal");
              break;    
    default:
           break;
  }

}

  



  


