exports.incrementAndCall = (number, theFunction) => {
    number++;
    theFunction(number);
  };

  