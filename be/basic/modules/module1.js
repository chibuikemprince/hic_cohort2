class Students {
  constructor(name, department, faculty, school, yearOfGraduation) {
    this.name = name;
    this.department = department;
    this.faculty = faculty;
    this.school = school;
    this.yearOfGraduation = yearOfGraduation;
    this.status = "active";
  }

  getDetails() {
    return `${this.name} is a student of ${this.school} in the ${this.faculty} faculty`;
  }

  logStudent() {
    console.log(this.getDetails());
  }

  setName(name) {
    if (name.length == "3") {
      this.name = name;
    }
  }

  setSchool(schoolname) {
    if (
      schoolname != "Obafemi Awolowo University" &&
      schoolname != "Lagos State University"
    ) {
      throw new Error("Invalid School");
    } else {
      this.school = schoolname;
    }
  }
}

class PostGraduate extends Students {
  changeDept(dept) {
    this.department = dept;
  }
}

module.exports = { Students, PostGraduate };
