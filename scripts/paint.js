   const button = document.getElementById('button');
    const myList = document.getElementById('quality');
    const form = document.getElementById('myForm');
    const message = document.querySelector("#message");
    const height = document.getElementById('height');
    const width = document.getElementById('width');
    const depth = document.getElementById('depth');


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
        //calculates the square feet of carpet and the amount of tack strip
        function carpet(area, strip, squareYards){
            strip = Number(document.getElementById('width').value *2) + Number(document.getElementById('depth').value *2);
            area = Number(document.getElementById('width').value) * Number(document.getElementById('depth').value);
            squareYards = Math.ceil(area/9);
             message.innerHTML = `
             <li>You need ${squareYards} square yards of carpet.</li>
             <li>You need ${strip} square feet of tack strip.</li>`
        }
         
        console.log(carpet());
        

        // Convert the numbers after confirming they aren't empty
        const width = Number(document.querySelector('[name="width"]').value);
        const depth = Number(document.querySelector('[name="depth"]').value);
        const height = Number(document.querySelector('[name="height"]').value);

        // Get the dropdown value
        const quality = Number(myList.value);

       

    }
});



    document.querySelector("#quality").selectedOptions[0]
document.querySelector("#quality").selectedOptions[0].text
document.querySelector("#quality").selectedOptions[0].value