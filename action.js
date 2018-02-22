function listTeachers(){
    var html = "<table border'2'>";
    for(var i = 0; i < allTeachers.length; i++){
        html+="<tr>";
        html+="<td>" + allTeachers[i].firstName + "</td>";
        html+="<td>" + allTeachers[i].lastName + "</td>";
        html+="<td>" + allTeachers[i].subject + "</td>";
        html+="</tr>";
    }
    html+="</table>";
    document.getElementById("listTeachers").innerHTML = html;
}

function listStudents(){
    var html = "<table border'2'>";
    for(var i = 0; i < allStudents.length; i++){
        html+="<tr>";
        html+="<td>" + allStudents[i].firstName + "</td>";
        html+="<td>" + allStudents[i].lastName + "</td>";
        html+="<td>" + allStudents[i].grade + "</td>";
        html+="</tr>";
    }
    html+="</table>";
    document.getElementById("listStudents").innerHTML = html;
}

function listSections(){
    var html = "<table border'2'>";
    for(var i = 0; i < allSections.length; i++){
        html+="<tr>";
        html+="<td>" + allSections[i].name + "</td>";
        html+="<td><a href='#' id='listKids' onclick='twoTable(" + allSections[i].id + ")'>" + allSections[i].count + "</a></td>";
        html+="</tr>";
    }
    html+="</table>";
    document.getElementById("listSections").innerHTML = html;
}

function addTeacher() {
    var firstName = document.getElementById("teacherFirstName").value;
    var lastName = document.getElementById("teacherLastName").value;
    var subject = document.getElementById("teacherSubject").value;
    allTeachers.push(new Teacher(firstName, lastName, subject));


}

function addStudent() {
    var firstName = document.getElementById("studentFirstName").value;
    var lastName = document.getElementById("studentLastName").value;
    var grade = document.getElementById("studentGrade").value;
    allStudents.push(new Student(firstName, lastName, grade));
}



function addSection() {
    var name = document.getElementById("sectionName").value;
    var count = document.getElementById("sectionCount").value;
    allSections.push(new Section(name, count));
    buildSectionList();
}

function TeacherId(teacherID){
    for(var i=0; i < allTeachers.length; i++){
        if(allTeachers[i].teacherID === parseInt(teacherID)){
            return allTeachers[i];
        }
    }
}

function StudentId(studentID){
    for(var i=0; i < allStudents.length; i++){
        if(allStudents[i].studentID === parseInt(studentID)){
            return allStudents[i];
        }
    }
}

function SectionId(sectionID){
    for(var i=0; i < allSections.length; i++){
        if(allSections[i].id === parseInt(sectionID)){
            return allSections[i];
        }
    }
}

function addStudentToSection() {
    var studentD = parseInt(document.getElementById("StudentDropDown").value);
    var sectionD = parseInt(document.getElementById("SectionDropDown").value);
    console.log(studentD);
    var stO = StudentId(studentD);
    var seO = SectionId(sectionD);
    stO.addSection(seO);
    seO.addStudent(stO);
    console.log(stO.sectionList);
    seO.count = (parseInt(seO.count) + 1).toString();
    console.log(seO.count);
}

function dropDownsForStudentToSections(){
    var selectBoxStudents = "<select id='StudentDropDown'>";
    var selectBoxSections = "<select id='SectionDropDown'>";
    for(var i =0; i < allStudents.length;i++){
        selectBoxStudents += "<option value='" + allStudents[i].studentID + "'>" + allStudents[i].firstName + "</option>";
    }
    for(var a =0; a < allSections.length;a++){
        selectBoxSections += "<option value='" + allSections[a].id + "'>" + allSections[a].name + "</option>";
    }
    selectBoxStudents += "</select>";
    document.getElementById("selectStudent").innerHTML = selectBoxStudents;
    selectBoxSections += "</select>";
    document.getElementById("selectSection").innerHTML = selectBoxSections;
}


function twoTable() {
    var studentD = parseInt(document.getElementById("StudentDropDown").value);
    var sectionD = parseInt(document.getElementById("SectionDropDown").value);
    console.log(studentD);
    var stO = StudentId(studentD);
    var seO = SectionId(sectionD);
    var table = "<table>";
    for(var i = 0; i< seO.studentList.length; i++){
        table += "<tr><td>" + seO.studentList[i].firstName + seO.studentList[i].lastName + seO.studentList[i].studentID +"</td>";
    }
    table += "</tr></table>";
    document.getElementById("newTable").innerHTML = table;
}






























