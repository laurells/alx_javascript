let privateScore = 0;
let name = null;

function changeScoreBy(points) {
  privateScore += points;
}

const studentHogwarts = {
  setName: function (newName) {
    name = newName;
  },
  rewardStudent: function () {
    changeScoreBy(1);
  },
  penalizeStudent: function () {
    changeScoreBy(-1);
  },
  getScore: function () {
    return `${name}: ${privateScore}`;
  },
};

studentHogwarts.setName("Harry");
studentHogwarts.rewardStudent();
studentHogwarts.rewardStudent();
studentHogwarts.rewardStudent();
studentHogwarts.rewardStudent();
console.log(studentHogwarts.getScore());

studentHogwarts.setName("Draco");
studentHogwarts.rewardStudent();
studentHogwarts.penalizeStudent();
studentHogwarts.penalizeStudent();
studentHogwarts.penalizeStudent();
console.log(studentHogwarts.getScore());
