import  { BrainHttp } from " ./api/BrainHttp.js"
let serverUrl =`http://127.0.0.1:9000/api`


let getButton = document.querySelector('#')
getButton.addEventListener('click', function() {
    fetchEmployees()
})

let fetchEmployees = () => {
    let url = `${serverUrl}/employees`
    BrainHttp.get(url).then( ( data ) =>{
        //console.log(data)
        let employees = data
        let employeeRow = ''
        for (let employee of employees){
            employeeRow += `<tr>
                                <td>${employee.id}</td>
                                <td>${employee.id}</td>
                                <td>${employee.id}</td>
                                <td>${employee.id}</td>
            
                            </tr>`
        }

        document.querySelector('#').innerHTML = employeeRow

    }).catch( ( err ) => {
        console.log(err)

    })
}