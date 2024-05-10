//import BrainHttp.js
import { BrainHttp } from "./api/BrainHttp.js"
const serverURL = `http://127.0.0.1:5000`;

//get GET button from frontend
let getButton = document.querySelector('#getButton');

getButton.addEventListener('click', function() {
    fetchEmployees();

});
let fetchEmployees = () => {
    let http = new BrainHttp(); //creating an instance of the class BrainHttp
    let url = `${serverURL}/employees`;
    http.get(url, (err, employees) => {
        if (err) throw err;
        console.log(employees)
        let tableRows = ""
        for (let employee of employees) {
            tableRows += `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.email}</td>
                          </tr>`
        }
        document.querySelector('#table-body').innerHTML = tableRows

    });
};


//get POST button from frontend
let postButton = document.querySelector('#')
postButton.addEventListener('click', function() {
    addEmployee();
});

//employee data
let employee = {
    name: 'jayjay',
    email: 'hjhh@gmail.com',
    age: 20
}

let addEmployee = () => {
        let http = new BrainHttp();
        let url = `${serverURL}/employees`;
        http.post(url, employee, (data) => {
            alert(JSON.stringify(data))
            fetchEmployees();
        })
    }
    //PUT button
let putButton = document.querySelector('')
putButton.addEventListener('click', function() {
    let empId = 'ereww'
    let employee = {
        name: 'jayjay',
        email: 'hjhh@gmail.com',
        age: 22
    }
    let url = `${serverURL}/employees/${empId}`
    let http = new BrainHttp;
    http.put(url, employee, (data) => {
        alert(JSON.stringify(data))
        fetchEmployees();

    })
})

//delete request
let deleteButton = document.querySelector('#.');
deleteButton.addEventListener('click', function() {
    let empId = 'ereww'
    let url = `${serverURL}/employees/${empId}`
    let http = new BrainHttp();
    http.delete(url, (data) => {
        alert(JSON.stringify(data))
        fetchEmployees();

    })

})