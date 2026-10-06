// Grab references to sign up form
const signup = document.querySelector("#signup");
const submitBtn = document.querySelector("#signup input[type=submit]");
submitBtn.addEventListener('click', createProfile);

//Grab references to the delete local storage
const display = document.querySelector("#display");
const details = document.querySelector("#display div");
const deleteBtn = document.querySelector("#display > button"); 
deleteBtn.addEventListener("click", deleteProfile);

//Check if local data storage already exists
const myaccount = localStorage.getItem("ly-Name");

if(myaccount === null){
    signup.classList.remove("hide");
    display.classList.add("hide");
} else{
    signup.classList.add("hide");
    signup.classList.remove("hide");

    //Display Values from Local Storage
    details.innerHTML = `
    <h3>Null Name</h3><p>${localStorage.getItem("ly-Name")}</p>
    <h3>Email Name</h3><p>${localStorage.getItem("ly-Email")}</p>
    <h3>Phone Number</h3><p>${localStorage.getItem("ly-Phone")}</p>
    `
}

//Funtion to create a new profile
function createProfile(){
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");

    if (name.value && email.value && phone.value){
    localStorage.setItem("ly-Name", name.value);
    localStorage.setItem("ly-Name", email.value);
    localStorage.setItem("ly-Name", phone.value);
    }

}

//Funtion to delete a new profile
function deleteProfile(){
    localStorage.removeItem("ly-Name");
    localStorage.removeItem("ly-Name");
    localStorage.removeItem("ly-Name");
    window.location.reload();
}
