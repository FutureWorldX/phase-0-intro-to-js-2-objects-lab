// Write your solution in this file!

//creating the Javascript Object called Employee:
const employee = {};

// updateEmployeeWithKeyAndValue(employee, key, value)
// returns an employee with the original key value pairs and the new key value pair
function updateEmployeeWithKeyAndValue(employee, key, value){
    
    const objEmployee = {
        employeeName: "",
        streetAddress: ""
    }; 
    // this is a basic and empty JS Object called objEmployee, with keys of employeeName and streetAddress
    //use the key: value notation to give Properties to an Object, also known as JSON

    const updatedEmployee = {...employee, streetAddress: value}; 
    //using the 'spread' operator. also known as the ellipses <...> to add to the original array/object
    //key value will be handled in the unit tests with the predefined key of - name: "Sam"
    Object.assign({key: value}, updatedEmployee); //first parameter is source, second is target; this statement adds/assigns new key vaue pairs

    //return, or giving the output of the updated Employee Object
    return updatedEmployee;
}

// destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
// updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    
    //update employee['name'] directly, without using the 'spread' operator [also known as the ellipses <...>] that was for cloning arrays or objects
    employee[key] = value; 
    //there is no need to use Object.assign() again like for the non-destructive update function above
    //otherwise Object.assign() returns a new object that was the result of merging the properties of the first argument with the properties of the subsequent arguments. 

    //return, or giving the output of the updated Employee Object
    return employee;
}

// deleteFromEmployeeByKey(employee, key)
// does not modify the original employee (it is non-destructive)
// deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
function deleteFromEmployeeByKey(employee, key){
    //using the 'spread' operator to be non-destructive, when using the ellipses <...>; like for cloning arrays
    const desUpdatedEmployee = {...employee}; 

    //delete the desUpdatedEmployeeobject with the given key
    delete desUpdatedEmployee[key];
    
    //return, or giving the output of the updated Employee Object
    return desUpdatedEmployee;
}

// destructivelyDeleteFromEmployeeByKey(employee, key)
// returns employee without the deleted key/value pair
// modifies the original employee
function destructivelyDeleteFromEmployeeByKey(employee, key){
    //selecting the main employee object as a parameter in the code statement, there is no need to clone the original object
    //delete the employee with the given key
    delete employee[key];
    
    //return, or giving the output of the updated Employee Object
    return employee;
}