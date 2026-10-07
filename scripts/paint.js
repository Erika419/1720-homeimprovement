    const button = document.getElementById('button');
    const myList = document.getElementById('quality');

    // Event listener for button click
    button.addEventListener('click', () => {
        function getValue() {
            let inputValue = document.querySelector('#quality').value;
            console.log(inputValue);
            alert("You entered: " + inputValue);
        }
    });
    
    document.querySelector("#quality").selectedOptions[0]
document.querySelector("#quality").selectedOptions[0].text
document.querySelector("#quality").selectedOptions[0].value