const alerts = {
    "en": {
        "contact": "Add me on Discord! :) \n Louis#7723 \n ------- \n E-Mail: \n louisrost.schule@gmail.com"
    },
    "de": {
        "contact": "Sende mir eine Freundschaftsanfrage! :) \n Louis#7723 \n ------- \n E-Mail: \n louisrost.schule@gmail.com"
    }
}
const buttons = document.querySelectorAll('.round-button');
let currentLanguage = localStorage.getItem("currentLanguage") || "en"; // || "en" ist dafür, wenn nichts drin steht oder ein fehler beim laden auftritt.
updateContent(currentLanguage); // hier wird dann die geschpeicherte sprache geladen (aus dem gespeichertem cookie)
console.log(currentLanguage);


buttons.forEach(button => {
    button.addEventListener('click', event => {
        const buttonText = event.target.id;
        if (buttonText === 'about-button') {
            // Code to handle the 'Home' button click
        } else if (buttonText === 'language-switch') {
            // Code to handle the 'About' button click
        } else if (buttonText === 'contact-button') {
            window.location.href='https://www.youtube.com/watch?v=xvFZjo5PgG0'
        }
    });
});

window.onload = function() {
    if(!localStorage.getItem("cookiePopupShown")){
        document.getElementById("cookie-popup").style.display = "block"; // This website uses Cookies.... COOKIES SIND KACKE
      }
      
  };
  document.getElementById("cookie-popup-ok-button").addEventListener("click", function(){
    localStorage.setItem("cookiePopupShown", true);
    document.getElementById("cookie-popup").style.display = "none";
  });


let aboutButton = document.getElementById("home-button");
aboutButton.addEventListener("click", function(){
    window.location.href = "index.html";
});

function updateContent(language) {
    currentLanguage = language; // SEHR WICHTIG FÜR DEN ALERT OBEN!!!!!
    localStorage.setItem("currentLanguage", language); // Ist sozusagen ein Cookie, der speichert, welche sprache gewählt wurde

    // Load translations from JSON file
    fetch('https://api.npoint.io/a7d9053c972d766856a5')

        .then(response => response.json())
        .then(data => {
            // Get translations for chosen language
            const translations = data[language];

            // Update text on website
            document.querySelector('#home-button').innerText = translations.home; /* Damit der Home button nach sprache verändert wird geht so weiter für die nächsten abschnitte... */
            document.querySelector('#contact-button').innerText = translations.contact; /* ^^ */
            document.querySelector('#language-switch').innerText = translations.lang; /* ^^ */

            document.querySelector('#about-title').innerText = translations.about;
            document.querySelector('#info').innerText = translations.info; /* ^^ */
            
        });
}

let languageSwitch = document.getElementById("language-switch");
languageSwitch.addEventListener("click", function(){
    // toggle the language
    if (languageSwitch.innerText === "Deutsch") {
        languageSwitch.innerText = "Loading...";
        updateContent("en");
    } else {
        
        languageSwitch.innerText = "Lädt...";
        updateContent("de");
    }
});
