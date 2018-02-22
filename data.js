var allStudents = [];
var allTeachers = [];
var allSections = [];

allStudents.push(new Student("Amanda","Van Sickle",11));
allStudents.push(new Student("Roni","Weissman",11));
allStudents.push(new Student("Alex","Denny",9));
allStudents.push(new Student("Alisia","Fazio",11));
allStudents.push(new Student("Maylis","Laverne",10));

allTeachers.push(new Teacher("Matt","Albinson","Computer Science"));
allTeachers.push(new Teacher("Dan","Plonsey","Math"));
allTeachers.push(new Teacher("Jeniffer","Wray","French 7/8"));
allTeachers.push(new Teacher("Kimberly","D'Adamo","Studio Art"));
allTeachers.push(new Teacher("Karl","Kaku","Lang & LIT"));

allSections.push(new Section("Math Studies",25));
allSections.push(new Section("Computer Science",33));
allSections.push(new Section("French 7/8",32));
allSections.push(new Section("Lang & LIT",28));
allSections.push(new Section("Studio Art",30));

var allItems = [allStudents,allTeachers,allSections];
