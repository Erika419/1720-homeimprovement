   const button = document.getElementById('button');
    const myList = document.getElementById('quality');
    const form = document.getElementById('myForm');
    const message = document.querySelector("#message");


    button.addEventListener('click', function (event) {

    //form from submitting
    event.preventDefault();

    // Gets user inputs
    const requiredInputs = form.querySelectorAll("input[required]");

    // Check if all required inputs are filled
    let complete = true;
    requiredInputs.forEach(input => {
        if (input.value === "") {
            complete = false;
        }
    });

    // Check the dropdown and do a window pop-up if form is not complete
    if (myList.value === "none") {
        complete = false;
    }
    if (!complete) {
        alert("Please complete the form.");
    } else {
          message.innerHTML = "<li>This is the list that appears after the calculations have been done</li>"
        

        // Convert the numbers after confirming they aren't empty
        const width = Number(document.querySelector('[name="width"]').value);
        const depth = Number(document.querySelector('[name="depth"]').value);
        const height = Number(document.querySelector('[name="height"]').value);

        // Get the dropdown value
        const quality = Number(myList.value);

        //perform calculations

        console.log("Width:", width);
        console.log("Depth:", depth);
        console.log("Height:", height);
        console.log("Paint quality:", quality);
    }
});



    document.querySelector("#quality").selectedOptions[0]
document.querySelector("#quality").selectedOptions[0].text
document.querySelector("#quality").selectedOptions[0].value