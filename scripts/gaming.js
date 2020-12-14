// ************************************
// ----Playstation START----
// ************************************

let playstation = document.createElement('p');
playstation.className = "playstation-text";
playstation.id = "playstation-text";
playstation.setAttribute('title', 'PSN Name');
playstation.appendChild(document.createTextNode(''));
playstation.style.setProperty('font-size', '1rem');

document.getElementById('playstation').appendChild(playstation)

const playstationOld = document.getElementById('playstation');

playstationOld.addEventListener('click', playstationFunction);

function playstationFunction(e) {
    if (playstation.innerHTML === '') {
  playstation.innerHTML = 'megasxl264'
  } else {
  playstation.innerHTML = ''
  }
}

// ************************************
// ----Xbox START----
// ************************************

let xbox = document.createElement('p');
xbox.className = "xbox-text";
xbox.id = "xbox-text";
xbox.setAttribute('title', 'Xbox Gamertag');
xbox.appendChild(document.createTextNode(''));
xbox.style.setProperty('font-size', '1rem');

document.getElementById('xbox').appendChild(xbox)

const xboxOld = document.getElementById('xbox');

xboxOld.addEventListener('click', xboxFunction);

function xboxFunction(e) {
    if (xbox.innerHTML === '') {
  xbox.innerHTML = 'freestyle460'
  } else {
  xbox.innerHTML = ''
  }
}



// ************************************
// ----Nintendo START----
// ************************************


let nintendo = document.createElement('p');
nintendo.className = "nintendo-text";
nintendo.id = "nintendo-text";
nintendo.setAttribute('title', 'Switch Friend Code');
nintendo.appendChild(document.createTextNode(''));
nintendo.style.setProperty('font-size', '1rem');

document.getElementById('nintendo').appendChild(nintendo)

const nintendoOld = document.getElementById('nintendo');

nintendoOld.addEventListener('click', nintendoFunction);

function nintendoFunction(e) {
    if (nintendo.innerHTML === '') {
  nintendo.innerHTML = '3821-4324-2912'
  } else {
  nintendo.innerHTML = ''
  }
}

// ************************************
// ----Steam START----
// ************************************


let steam = document.createElement('p');
steam.className = "steam-text";
steam.id = "steam-text";
steam.setAttribute('title', 'Steam Name');
steam.appendChild(document.createTextNode(''));
steam.style.setProperty('font-size', '1rem');

document.getElementById('steam').appendChild(steam)

const steamOld = document.getElementById('steam');

steamOld.addEventListener('click', steamFunction);

function steamFunction(e) {
    if (steam.innerHTML === '') {
  steam.innerHTML = 'megasxl264'
  } else {
  steam.innerHTML = ''
  }
}