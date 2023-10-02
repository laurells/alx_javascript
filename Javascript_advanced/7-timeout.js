// Function to simulate asynchronous execution
function simulateAsyncExecution() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 0);
    });
  }
  
  async function execute() {
    console.log("Start of the execution queue");
  
    // Execute asynchronously with a function using setTimeOut
    await simulateAsyncExecution();
    console.log("Final code block to be executed using setTimeout (with delay of 0)");
  
    // Using a for loop to iterate
    for (let i = 1; i <= 100; i++) {
      console.log(i);
    }
  
    console.log("End of the loop printing");
  }
  
  // Start the execution
  execute();
  