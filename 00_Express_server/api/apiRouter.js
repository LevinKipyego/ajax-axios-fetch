const express = require('express');
const router = express.Router()

//employee data
let employees = [{
        'id': 'rtyajkh',
        'name': 'john doe',
        'email': '@example.com',
        'age': 20,

    },
    {
        'id': 'asdfjkl',
        'name': 'jane doe',
        'email': 'er@example.com',
        'age': 20,

    }
];
//GET - eMPLOYEE
router.get('/employees', (request, response) => {
    console.log(`GET Request Received at Server .. ${new Date().toLocaleDateString()}`);
    response.json(employees);


});

//ID generetor
let getID = () => {
    return '-' + Math.random().toString(36).substring(2, 9);
};

//POST request
router.post('/employees', (request, response) => {
    let employee = {
        id: getID(),
        name: request.body.name, //tapping the name from the form
        email: request.body.email, // tapping the email from rthe form
        age: request.body.age //tapping the age from the form
    };
    employees.push(employee);
    console.log(`POST Request Received at Server .. ${new Date().toLocaleDateString()}`);
    response.json({ msg: `POST request success` })

});

//PUT request from user to update data in the database
router.put('/employees/:id', (request, response) => {
    let empId = request.params.id; //acquiring an id of a person to update
    let updateEmployee = {
        id: empId, //id entered by user
        name: request.body.name, //tapping the name from the form
        email: request.body.email,
        age: request.body.age
    };
    //finding id where id selected by user === id in the database
    let existingEmployee = employees.find((employee) => {
        return employee.id === empId
    });

    //updating the employee by replacing existingEmployee with updateEmployee
    employees.splice(employees.indexOf(existingEmployee), 1, updateEmployee)

    console.log(`PUT Request Received at Server .. ${new Date().toLocaleDateString()}`);
    response.json({ msg: `PUT request success` })
});

//DELETE request
router.delete('/employees/:id', (request, response) => {
    let empId = request.params.id;

    employees = employees.filter((employee) => {
        return employee.id !== empId
    });
    console.log(`DELETE Request Received at Server .. ${new Date().toLocaleDateString()}`);
    response.json({ msg: `DELETE request success` })
});

module.exports = router;