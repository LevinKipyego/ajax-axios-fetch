let textButton = document.querySelector('#text-btn');
textButton.addEventListener('click', function() {
    // Create an AJAX request
    let xhr = new XMLHttpRequest();

    // Prepare the request
    xhr.open('GET', 'data/message.txt', true);

    // Send the request
    xhr.send();

    // Process the request
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText;
            //console.log(data)
            displayTextData(data);
        }
    };

    // Display data
    let displayTextData = (data) => {
        let htmlTemplate = `<p>${data}</p>`; // Use backticks (`) for template string
        document.querySelector('#text-message').innerHTML = htmlTemplate;
    };
});



//json data
var jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click', function() {

    //create xmlhttprequest
    var xhr = new XMLHttpRequest();

    //prepare
    xhr.open('GET', 'data/mobile.json', true);

    //send for processing
    xhr.send();

    //processing
    xhr.onload = () => {
        if (xhr.status === 200) {
            var data = xhr.responseText
            var mobile = JSON.parse(data)
                // console.log(data)
            displayJsonData(mobile) //arrow function call ( (x) => {.....})

        }

    }
});

//display Json data
var displayJsonData = (x) => { //assigning displayJsonData variable to an arrow function that assins htmlTemplate to data fetched from data/mobile.json
    var htmlTemplate = `<ul>
                        <li>ID:${x.id}</li>
                        <li>NAME:${x.name}</li>
                        <li>AGE:${x.Age}</li>
                        <li>HEIGHT:${x.Height}</li>
                        </ul>`

    document.querySelector('#json-data').innerHTML = htmlTemplate

}


//create a new server (Node Js)
//custom API with ajax
//Build an application