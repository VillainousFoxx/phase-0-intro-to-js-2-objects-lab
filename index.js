// Write your solution in this file//

const employee = {
    name: "vfox",
    streetAddress: "123 Broad",
};

 function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};

    newEmployee.name = "Sam";
    newEmployee.streetAddress = "11 Broadway";

    return newEmployee;

 }

 function destructivelyUpdateEmployeeWithKeyAndValue(employee,streetAddress,value){
    employee.streetAddress = "12 Broadway";
    return employee
 }

function deleteFromEmployeeByKey(employee,key){
    const newEmployee = {...employee};
    delete newEmployee.name;

    return newEmployee;
    
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
     delete employee.name;
     return employee;
}

