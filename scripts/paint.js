    const button = document.getElementById('button');
    const myList = document.getElementById('quality');

    // Event listener for button click
    button.addEventListener('click', () => {
        // Toggle visibility
        if (document.querySelector("#button").style.display === 'none') {
            document.querySelector("#quality").style.display = 'block';
        }
    });
    
    document.querySelector("#quality").selectedOptions[0]
document.querySelector("#quality").selectedOptions[0].text
document.querySelector("#quality").selectedOptions[0].value