   const button = document.getElementById('button');
    const myList = document.getElementById('quality');

    // Event listener for button click
    document.getElementById('button').addEventListener('click', function (event) {

      // Select all required inputs inside the form
      const requiredInputs = this.querySelectorAll("input[required]");
      

    requiredInputs.forEach(input => {
        //convert input value to a number because javascript will always interpret it as a string.
        let num = Number(input.value); 
        // Stop form from submitting
        event.preventDefault(); 
        //reset each submit
        const values = {};
        // Assigns input to the values object with the input's type as the key
        values[input.type] = input.value;
        // Check if the input value is a number
        if (!isNaN(num) && num !== "") {
        console.log("It's a number");
        } else {
        console.log("Not a number");
        }
    });
    });
    
    document.querySelector("#quality").selectedOptions[0]
document.querySelector("#quality").selectedOptions[0].text
document.querySelector("#quality").selectedOptions[0].value