var employees = [];
function Employee(name, jobtitle, salary, stat) {
 this.name = name,  
 this.jobtitle = jobtitle, 
 this.salary = salary,
  this.stat = stat || "Full Time",
  this.printEmployeeForm = function(){
    console.log(this.name, this.jobtitle,this.salary,this.stat);
}; 
}
var sam1= new Employee("sami", "manager", 3000, 'part-time');
var sam2= new Employee("Rami","drive",1000);
var sam3= new Employee("Dami","translator",2000,"part time");


sam1.printEmployeeForm();
sam2.printEmployeeForm();
sam3.printEmployeeForm();

 employees.push(sam1,sam2,sam3);
 console.log(employees);

