   const button = document.getElementById('button');
    const myList = document.getElementById('quality');
    const form = document.getElementById('myForm');
    const message = document.querySelector("#message");
    const height = document.getElementById('height');
    const width = document.getElementById('width');
    const depth = document.getElementById('depth');


    button.addEventListener('click', function (event) {

    // Convert the input numbers after confirming they aren't empty


    // Get the dropdown value
    const quality = Number(myList.value);

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
    // if it is complete, then it will calculate the square feet/yards of paint or carpet
    } else {

         //calculates the square feet of paint 
         function paint(area, walls){
            // amount of flatPaint needed is for the ceiling (area)
            area = Number(document.getElementById('width').value) * Number(document.getElementById('depth').value);
            const flatPaint = Math.ceil(area/quality);
            //semi-gloss is only for the walls (area*4)
            walls = area * 4;
            const semiGloss = Math.ceil(walls/quality);
            //amount of primer needed is for the walls and ceiling (area*4)+(area)
            const primer =  Math.ceil((walls + area) / quality)
             message.innerHTML = `
             <li>You need ${flatPaint} gallons of flat paint.</li>
             <li>You need ${semiGloss} gallons of semi-gloss paint.</li>
             <li>You need ${primer} gallons of primer.</li>`
            
         }

        //calculates the square feet of carpet and the amount of tack strip
        function carpet(){

        //gets user input using the name attribute and converts it to a number
        const width = Number(document.querySelector('[name="width"]').value);
        const depth = Number(document.querySelector('[name="depth"]').value);
        const height = Number(document.querySelector('[name="height"]').value);

            const strip = Number(document.getElementById('width').value *2) + Number(document.getElementById('depth').value *2);
            const area = Number(document.getElementById('width').value) * Number(document.getElementById('depth').value);
            const squareYards = Math.ceil(area/9);
             message.innerHTML = `
             <li>You need ${squareYards} square yards of carpet.</li>
             <li>You need ${strip} square feet of tack strip.</li>`
        }
    }
         
        
        



       

    });



    document.querySelector("#quality").selectedOptions[0]
document.querySelector("#quality").selectedOptions[0].text
document.querySelector("#quality").selectedOptions[0].value