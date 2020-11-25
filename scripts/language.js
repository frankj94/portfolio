let dataReload = document.querySelectorAll("[data-reload]")
let language = {
    en: {
        welcome: "Hey there"
    },
    fr: {
        welcome: "Salut"
    },
};

if (window.location.hash) {
    if (window.location.hash === "#fr")
    {
        welcoming.textContent = language.fr.welcome; 
        }
}

for (i = 0; i <= dataReload.lenght; i++) {
    dataReload[i].onclick = function () {
         setTimeout(function(){window.location.reload();},0);
    }
}