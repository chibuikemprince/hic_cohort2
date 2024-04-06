const Module = require("./module1");

const student1 = new Module.Students(
  "Mary",
  "Computer Science",
  "Sciences",
  "Lagos State University",
  "2018"
);

const student2 = new Module.PostGraduate(
  "Abdul",
  "Computer Science",
  "Sciences",
  "Lagos State University",
  "2018"
);

console.log({
  student1,
  student2,
});
