var crimes = 0;

var contactButtons = document.getElementsByClassName("contact-button");
for (let button of contactButtons) {
    button.addEventListener("click", addToCrime);
}

function addToCrime() {
    crimes += 1;
    console.log("amount of curly crimes committed today: " + crimes);
}

var tunaPic = document.getElementsByClassName("tuna-image");
var evidenceButton = document.getElementsByClassName("evidence-button");
for (let button of evidenceButton) {
    button.addEventListener("click", showPic);
}

function showPic() {
    console.log(tunaPic[0])
}