// Create a function that generates a classroom with student seats
function createClassRoom(numberOfStudents) {
    const students = [];
  
    for (let i = 0; i < numberOfStudents; i++) {
      students.push(() => i + 1);
    }
  
    return students;
  }
  
  // Create a classroom closure with 10 students
  const classRoom = createClassRoom(10);
  
  // Execute
  console.log(classRoom[0]());
  console.log(classRoom[3]());
  console.log(classRoom[9]());
  