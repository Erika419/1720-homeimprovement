import { parks } from "../data/parks.mjs";
//console.log(parks);

const destination = document.querySelector("#allparks");
parks.forEach((parks)=>{
    const parkcards = document.createElement("div");

    //park photo and name
    const parksection = document.createElement("section");
    const parkname = document.createElement("h2");
    const parkphoto = document.createElement("img");
    parkname.innerText = parks.name;
    parkphoto.src=`images/${parks.image}`;
    parkphoto.width = "600";
    parkphoto.height = "200";
    parkphoto.alt = parkcards.name;
    parkphoto.loading="lazy";

    parksection.appendChild(parkphoto);
    parksection.appendChild(parkname);

    //park description
    const parkdesc=document.createElement("p");
    parkdesc.innerHTML= parks.description;

    //park description
    const parkest=document.createElement("p");
    parkest.innerHTML = `<span>ESTABLISHED:</span> ${parks.established}`;

    //park size
    const parksize = document.createElement("p");
    parksize.innerHTML = `<span>PARK SIZE:</span> ${parks.size_sq_mi} sq miles`;

    //rating
    const parkrating = document.createElement("p");

switch (parks.rating) {
    case 5:
        parkrating.innerHTML = "<span>RATING:</span> &#9733; &#9733; &#9733; &#9733; &#9733;";
        break;
    case 4:
        parkrating.innerHTML = "<span>RATING:</span> &#9733; &#9733; &#9733; &#9733; &#9734;";
        break;
    case 3:
        parkrating.innerHTML = "<span>RATING:</span> &#9733; &#9733; &#9733; &#9734; &#9734;";
        break;
    case 2:
        parkrating.innerHTML = "<span>RATING:</span> &#9733; &#9733; &#9734; &#9734; &#9734;";
        break;
    case 1:
        parkrating.innerHTML = "<span>RATING:</span> &#9733; &#9734; &#9734; &#9734; &#9734;";
        break;

    default:
        parkrating.innerHTML = "<span>RATING:</span> Could not find a match";
};


    //park web link
    const parkurl = document.createElement("a");
    parkurl.innerText = "Learn More";
    parkurl.href= parks.url;
    parkurl.target= "_blank";
    
    
    //build each card
    parkcards.appendChild(parksection);
    parkcards.appendChild(parkdesc);
    parkcards.appendChild(parkest);
    parkcards.appendChild(parksize);
    parkcards.appendChild(parkrating);
    parkcards.appendChild(parkurl);

    destination.appendChild(parkcards);
    
});