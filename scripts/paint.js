

    // Event listener for button click
    document.getElementById('myForm').addEventListener('click', function () {

      // Select all required inputs inside the form
      const requiredInputs = this.querySelectorAll("input[required]");
      const values = {};

    requiredInputs.forEach(input => {

        // Assigns input to the values object with the input's type as the key
        values[input.type] = input.value;
      console.log(`Value: ${values[input.type]}`);
    });
    });
    
    document.querySelector("#quality").selectedOptions[0]
document.querySelector("#quality").selectedOptions[0].text
document.querySelector("#quality").selectedOptions[0].value