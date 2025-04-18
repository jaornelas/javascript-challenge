// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
const employeesArray = [];
let addMore = true;

//while loop to collect information
  while (addMore) {
    let firstName = prompt("Enter employee's first name:");
    let lastName = prompt("Enter employee's last name:");
    let salary = parseFloat(prompt("Enter the employee salary amount:"));


    //assigning values to variables inside an object
    let employee = {
        firstName: firstName,
        lastName: lastName, 
        salary: salary
    }

    //pushing the variables into an array 
    employeesArray.push(employee);

    //prompt to break the loop
    addMore = confirm("Do you want to add another employee?");

  }
  return employeesArray;

};


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary

let totalSalary = 0;

//Display nothing if no input
if (employeesArray.length === 0) {
  console.log("No employees to calculate average salary.");
  return; 
}

for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
}


totalSalary = employeesArray.reduce((acc, employee) => acc + (isNaN(employee.salary) ? 0 : employee.salary), 0);
const averageSalary = totalSalary / employeesArray.length;

// Rounding to two decimal places
const averageSalaryWithTwoDecimals = averageSalary.toFixed(2);

console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalaryWithTwoDecimals}`);



// let averageSalary = totalSalary / employeesArray.length;
// //console.log(`the calculated average salary is ${averageSalary}`);  //displays calculated averageSalary no format. defaults to whole integer if given integer

// console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary.toFixed(2)}`);
// console.log(typeof averageSalary);

};



// Select a random employee
  // TODO: Select and display a random employee
const getRandomEmployee = function (employeesArray) {
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
    console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
  };

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector('#employee-table');
  
    // Clear the employee table
    employeeTable.innerHTML = '';
  
    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
      const currentEmployee = employeesArray[i];
  
      const newTableRow = document.createElement('tr');
  
      const firstNameCell = document.createElement('td');
      firstNameCell.textContent = currentEmployee.firstName;
      newTableRow.append(firstNameCell);
  
      const lastNameCell = document.createElement('td');
      lastNameCell.textContent = currentEmployee.lastName;
      newTableRow.append(lastNameCell);
  
      const salaryCell = document.createElement('td');
      // Format the salary as currency
      salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
  
      newTableRow.append(salaryCell);
  
      employeeTable.append(newTableRow);
    }
  };
  
  const trackEmployeeData = function () {
    const employees = collectEmployees();
  
    console.table(employees);
  
    displayAverageSalary(employees);
  
    console.log('==============================');
  
    getRandomEmployee(employees);
  
    employees.sort(function (a, b) {
      if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 1;
      }
    });
  
    displayEmployees(employees);
  };
  
  // Add event listener to 'Add Employees' button
  addEmployeesBtn.addEventListener('click', trackEmployeeData);
  
