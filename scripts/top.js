window.onscroll = function () {
    if (pageYOffset >= 200) {
        document.getElementById('top-button').style.visibility = "visible";
    } else {
 document.getElementById('top-button').style.visibility = "hidden";
    }
};