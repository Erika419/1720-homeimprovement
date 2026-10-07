

    // Event listener for button click
    document.getElementById('myForm').addEventListener('click', function (event) {

      // Select all required inputs inside the form
      const requiredInputs = this.querySelectorAll("input[required]");
      

    requiredInputs.forEach(input => {
        // Stop form from submitting
        event.preventDefault(); 
        //reset each submit
        const values = {};
        // Assigns input to the values object with the input's type as the key
        values[input.type] = input.value;
        // Only log when all are filled
        if (allFilled) {
        console.clear(); // Optional: clears old logs
        console.log("Final required field values:", values);
        alert(JSON.stringify(values, null, 1));
      }
    });
    });
    
    document.querySelector("#quality").selectedOptions[0]
document.querySelector("#quality").selectedOptions[0].text
document.querySelector("#quality").selectedOptions[0].value