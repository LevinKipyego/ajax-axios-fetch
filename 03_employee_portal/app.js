import { BrainHttp } from "./api/BrainHttp.js"
const serverURL = `http://127.0.0.1:9000/api`;

//DOMContentLoaded
window.addEventListener('DOMContentLoaded', function() {
    fetchEmployees();
});


//get 
let fetchEmployees = () => {
    let http = new BrainHttp;
    let url = `${serverURL}/employees`;
    http.get(url, (err, employees) => {
        if (err) throw err;

        let tableRows = "";
        for (let employee of employees) {
            tableRows += `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.email}</td>
                            <td>${employee.age}</td>
                            <td>
                                <button class="update-button" id="update">UPDATE</button>
                                <button class="delete-button" id="delete">DELETE</button>
                            </td>
                          </tr>`
        }
        document.querySelector('#table-body').innerHTML = tableRows
    });


}

//POST
let getForm = document.querySelector('#form-post');
getForm.addEventListener('submit', function(e) {
    e.preventDefault() //preventing auto submission of forms
        //$("#exampleModal").modal('hide'); //close the modal
        //$('#exampleModal').fadeOut();
    let employee = {
        name: document.querySelector('#add-name').value,
        email: document.querySelector('#add-email').value,
        age: document.querySelector('#add-age').value

    };

    let url = `${serverURL}/employees`;
    let http = new BrainHttp;


    http.post(url, employee, (data) => {
        //alert(JSON.stringify(data));
        console.log(data)
        fetchEmployees();
        clearFormFields();

    })

    let clearFormFields = () => {
        document.querySelector('#add-name').value = "";
        document.querySelector('#add-email').value = "";
        document.querySelector('#add-age').value = "";

    }
});

//UPDATE AND DELETE
//Click on entire table body

//finding selected id after clicking on an element(update or delete button) on the table
let entireTable = document.querySelector('#table-body')
entireTable.addEventListener('click', function(e){
    let targetElement = e.target
    //console.log(targetElement)

    //click delete button
    if (targetElement.classList.contains('delete-button')){
        //console.log('you have clicked delete')
       let  empId = targetElement.parentElement.parentElement.firstElementChild.innerHTML
       //console.log(empId)
       let url = `${serverURL}/employees/${empId}`
       let http = new BrainHttp

       http.delete(url, (data) => {
        console.log(data)
        fetchEmployees();
       })
    }


     //click update  button
    if (targetElement.classList.contains('update-button')){
        //console.log('you have clicked delete')
       let  empId = targetElement.parentElement.parentElement.firstElementChild.innerHTML
       
       let url = `${serverURL}/employees`
       let http = new BrainHttp

       http.get(url, (err, employees) => {
        if (err) throw err
        let selectedEmployee = employees.find( (employee) => {
            
            return employee.id === empId.trim()

        })
        
        populateUpdateModal(selectedEmployee)

       })
      
    }
})

//
let populateUpdateModal = (selectedEmployee) => {
    document.querySelector('#update-id').value = selectedEmployee.id
    document.querySelector('#update-name').value = selectedEmployee.name
    document.querySelector('#update-email').value = selectedEmployee.email
    document.querySelector('#update-age').value = selectedEmployee.age
    $("#update-modal").modal('show')


}

//UPDATE
let getUpdateForm = document.querySelector('#form-update')
getUpdateForm.addEventListener('submit', function(e){
    e.preventDefault()

    let employeeId = document.querySelector('#update-id').value.trim()
    let employee = {
        id:document.querySelector('#update-id').value,
        name: document.querySelector('#update-name').value,
        email: document.querySelector('#update-email').value,
        age: document.querySelector('#update-age').value

    };

    let url = `${serverURL}/employees/${employeeId}`
    let http = new BrainHttp
    http.put(url, employee, (data) => {
        console.log(data)
        fetchEmployees()
    })

})