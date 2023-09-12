exports.executeXTimes = (x, theFunction) => {
    for (let i = 0; i < x; i++) {
      theFunction();
    }
  };

  