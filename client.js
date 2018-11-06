$(document).ready(onReady);

function onReady(){
  $('#button').on('click', displayOutput);
}

function displayOutput(){
  $('#employeeList').empty();
  for(let worker of employeeArray ){
    $('#employeeList').append( 
      '<li>'
      + worker.name + ' '
      + worker.bonusPercentage + ' '
      + worker.totalCompensation + ' '
      + worker.totalBonus
      + '</li>'
    );
  }

}

class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 ); // this creates a new object
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout =  new Employee( 'Scout', '6243', '74750', 5 );
const robert =  new Employee( 'Robert', '26835', '66000', 1 );
const mayella =  new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ]; // this is an array of objects

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

let employeeArray = [ ];

for( let i = 0; i < employees.length; i++){
  employeeArray.push(processEmployee(employees[i]));
  console.log(employeeArray[i]);
}

// This function will process each employee 
function processEmployee(employee){
    let salary = parseInt(employee.annualSalary);
    let percentage = bonusPercentage(employee);
    let bonusAmt = salary * percentage / 100;
    return {
      name: employee.name,
      bonusPercentage: percentage,
      totalCompensation: salary + bonusAmt,
      totalBonus: Math.round(bonusAmt)
    }
    
}

// Will the bonus amount for each employee
function bonusPercentage(employee){
  let bonus;  
  if( employee.reviewRating <= 2){
      bonus = 0; 
    }else if( employee.reviewRating === 3 ){
      bonus = 4;
    }else if( employee.reviewRating === 4 ){
      bonus = 6;
    }else if( employee.reviewRating === 5 ){
      bonus = 10;
  }
  if(employee.employeeNumber.length === 4 ){
    bonus += 5;
  }
  if(employee.annualSalary > 65000){
    bonus -= 1;
  }
  if(bonus > 13){
    bonus = 13;
  }
  if(bonus < 0){
    bonus = 0;
  }
  return bonus; 
}
