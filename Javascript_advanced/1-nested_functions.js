/*
  Create a variable outside the function.
  Create nested functions using closures.
*/

let globalVariable = "welcome";

function outer() {
  alert(globalVariable);
  
  let course = "Holberton";
  
  function inner() {
    let exclamation = "!";
    
    alert(globalVariable + " " + course);
    
    function inception() {
      alert(globalVariable + " " + course + exclamation);
    }
    
    inception();
  }
  
  inner();
}

outer();
