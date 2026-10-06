const holiday = document.querySelector("#holiday");
const moreBtn = document.querySelector("#moreBtn");
const details = document.querySelector("#details");

moreBtn.addEventListener("click", () => {
    switch (holiday.value.toLowerCase().trim()){
        case "christmas":
        details.innerHTML = 
        "Christmas (Dec 25.): Celebrates the birth of Jesus Christ. Traditions include gift-giving, decorations, and family time.";
        break;

        case "newyear":
        case "new year":
        case "new years":
        details.innerHTML = 
        "New Years (Jan 1.): Celebrates the start of the new year.";
        break;

        case "independence day":
        case "4th of july":
        details.innerHTML = 
        "Independence Day (July 4): Celebrates America's independence from Britain.";
        break;

        
        case "thanksgiving":
        details.innerHTML = 
        "Thanksgiving (Nov 4): Celebrates America's independence from Britain."  ;   
       break;

        case "halloween":
        details.innerHTML = 
        "Halloween (Oct 31): Known for costumes, trick-or-treating, and spooky costumes.";
        break;       

        default:
        details.innerHTML= `Sorry, I don't have any details about <strong>${holiday.value}</strong>`
    }
})