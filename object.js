var id = 1;
var studentID= 1;
var teacherID = 1;
function Teacher(firstName,lastName,subject) {
    this.teacherID = teacherID++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
}

function Student(firstName,lastName,grade) {
    this.studentID = studentID++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.sectionList =[];
    this.addSection = function(Section) {
        this.sectionList.push(Section);
    }
}

function Section(name,count) {
    this.id = id++;
    this.name = name;
    this.count = count;
    this.teacher = "";
    this.studentList = [];
    this.addStudent = function(Student){
        this.studentList.push(Student);
    }
}
