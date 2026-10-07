

    // Event listener for button click
    document.getElementById('myForm').addEventListener('click', function () {

      // Select all required inputs inside the form
      const requiredInputs = this.querySelectorAll("input[required]");
      const values = {};

    requiredInputs.forEach(input => {
        // Trim to avoid spaces-only values
        const value = input.value.trim();
        // Assigns input to the values object with the input's name as the key
        values[input.name] = value;
      alert("Required field values:", values);
    });
    });
    
    document.querySelector("#quality").selectedOptions[0]
document.querySelector("#quality").selectedOptions[0].text
document.querySelector("#quality").selectedOptions[0].value