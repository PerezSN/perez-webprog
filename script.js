class Student{
    constructor(name){
        this.name = name;
        this.isPresent = null;
    }
}

const input = document.getElementById("studentName");
const addBtn = document.getElementById("addStudent");
const list = document.getElementById("studentList");

addBtn.addEventListener("click", addStudent);

function addStudent(){

    const name = input.value.trim();

    if(name === ""){
        alert("Please enter a student name.");
        return;
    }

    const student = new Student(name);

    console.log(student);

    const li = document.createElement("li");
    const nameSpan = document.createElement("span");

    nameSpan.textContent = student.name;

    const presentBtn = document.createElement("button");
    presentBtn.textContent = "Mark Present";
    presentBtn.className = "present";

    const absentBtn = document.createElement("button");
    absentBtn.textContent = "Mark Absent";
    absentBtn.className = "absent";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove";

    const buttonGroup = document.createElement("div");
    buttonGroup.appendChild(presentBtn);
    buttonGroup.appendChild(absentBtn);
    buttonGroup.appendChild(removeBtn);

    li.appendChild(nameSpan);
    li.appendChild(buttonGroup);
    list.appendChild(li);

    presentBtn.onclick = function(){
        student.isPresent = true;
        nameSpan.textContent = student.name + " (Present)";
        li.classList.remove("absent-status");
        li.classList.add("present-status");
    }

    absentBtn.onclick = function(){
        student.isPresent = false;
        nameSpan.textContent = student.name + " (Absent)";
        li.classList.remove("present-status");
        li.classList.add("absent-status");
    }

    removeBtn.onclick = function(){
        list.removeChild(li);
    }

    input.value = "";
}