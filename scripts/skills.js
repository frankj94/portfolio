// ************************************
// ----HTML START----
// ************************************

// Create New Element
let html = document.createElement('p');
html.className = 'html-skills';
html.id = 'html-skills';
html.setAttribute('title', 'HTML5 Proficiency');
html.appendChild(document.createTextNode(''));
html.style.setProperty('font-size', '16px')
document.getElementById('htmlJS').appendChild(html)


// Grab Old Element
const oldHTML = document.getElementById('html');


// On Click function to add element
oldHTML.addEventListener('click', htmlClick);
function htmlClick(e) {
if (html.innerHTML === '') {
  html.innerHTML = '90%'
  } else {
  html.innerHTML = ''
  }
}


// On click function to remove element By Element
const htmlJS = document.getElementById('htmlJS')
html.addEventListener('click', removeHTML);
function removeHTML(e) {
    let newHTML = document.getElementById("htmlJS");
    let htmlNested = document.getElementById("htmlJS").lastChild;   
}

// ************************************
// ----HTML END----
// ************************************



// ************************************
// ----CSS START----
// ************************************

//Create New Element
let css = document.createElement('p');
css.className = 'css-skills';
css.id = 'css-skills';
css.setAttribute('title', 'CSS3 Proficiency');
css.appendChild(document.createTextNode(''));
css.style.setProperty('font-size', '16px')
document.getElementById('cssJS').appendChild(css)


// Grab Old Element
const oldCSS = document.getElementById('css');


// On Click function to add element
oldCSS.addEventListener('click', cssClick);
function cssClick(e) {
if (css.innerHTML === '') {
  css.innerHTML = '80%'
  } else {
  css.innerHTML = ''
  }
}


// On click function to remove element By Element
const cssJS = document.getElementById('cssJS')
css.addEventListener('click', removeCSS);
function removeCSS(e) {
    let newCSS = document.getElementById("cssJS");
    let cssNested = document.getElementById("cssJS").lastChild;   
}
// ************************************
// ----CSS END----
// ************************************



// ************************************
// ----SASS START----
// ************************************

//Create New Element
let sass = document.createElement('p');
sass.className = 'sass-skills';
sass.id = 'sass-skills';
sass.setAttribute('title', 'Sass Proficiency');
sass.appendChild(document.createTextNode(''));
sass.style.setProperty('font-size', '16px')
document.getElementById('sassJS').appendChild(sass)


// Grab Old Element
const oldSass = document.getElementById('sass');


// On Click function to add element
oldSass.addEventListener('click', sassClick);
function sassClick(e) {
if (sass.innerHTML === '') {
  sass.innerHTML = '85%'
  } else {
  sass.innerHTML = ''
  }
}


// On click function to remove element By Element
const sassJS = document.getElementById('sassJS')
sass.addEventListener('click', removeSass);
function removeSass(e) {
    let newSass = document.getElementById("sassJS");
    let sassNested = document.getElementById("sassJS").lastChild;   
}

// ************************************
// ----SASS END----
// ************************************



// ************************************
// ----JavaScript START----
// ************************************

//Create New Element
let javascript = document.createElement('p');
javascript.className = 'javascript-skills';
javascript.id = 'javascript-skills';
javascript.setAttribute('title', 'JavaScript Proficiency');
javascript.appendChild(document.createTextNode(''));
javascript.style.setProperty('font-size', '16px')
document.getElementById('javascriptJS').appendChild(javascript)


// Grab Old Element
const oldJs = document.getElementById('javascript');


// On Click function to add element
oldJs.addEventListener('click', jsClick);
function jsClick(e) {
if (javascript.innerHTML === '') {
  javascript.innerHTML = '60%'
  } else {
  javascript.innerHTML = ''
  }
}


// On click function to remove element By Element
const javascriptJS = document.getElementById('javascriptJS')
javascript.addEventListener('click', removeJs);
function removeJs(e) {
    let newJs = document.getElementById("javascriptJS");
    let jsNested = document.getElementById("javascriptJS").lastChild;   
}


// ************************************
// ----JavaScript END----
// ************************************



// ************************************
// ----Node START----
// ************************************

//Create New Element
let node = document.createElement('p');
node.className = 'node-skills';
node.id = 'node-skills';
node.setAttribute('title', 'Node Proficiency');
node.appendChild(document.createTextNode(''));
node.style.setProperty('font-size', '16px')
document.getElementById('nodeJS').appendChild(node)


// Grab Old Element
const oldNode = document.getElementById('node');


// On Click function to add element
oldNode.addEventListener('click', nodeClick);
function nodeClick(e) {
if (node.innerHTML === '') {
  node.innerHTML = '60%'
  } else {
  node.innerHTML = ''
  }
}


// On click function to remove element By Element
const nodeJS = document.getElementById('nodeJS')
node.addEventListener('click', removeNode);
function removeNode(e) {
    let newNode = document.getElementById("nodeJS");
    let nodeNested = document.getElementById("nodeJS").lastChild;   
}

// ************************************
// ----Node END----
// ************************************



// ************************************
// ----Bootsrap START----
// ************************************

// Create New Element
let bootstrap = document.createElement('p');
bootstrap.className = 'bootstrap-skills';
bootstrap.id = 'bootstrap-skills';
bootstrap.setAttribute('title', 'Bootstrap Proficiency');
bootstrap.appendChild(document.createTextNode(''));
bootstrap.style.setProperty('font-size', '16px')
document.getElementById('bootstrapJS').appendChild(bootstrap)


// Grab Old Element
const oldBootstrap = document.getElementById('bootstrap');


// On Click function to add element
oldBootstrap.addEventListener('click', bootstrapClick);
function bootstrapClick(e) {
if (bootstrap.innerHTML === '') {
  bootstrap.innerHTML = '90%'
  } else {
  bootstrap.innerHTML = ''
  }
}


// On click function to remove element By Element
const bootstrapJS = document.getElementById('bootstrapJS')
bootstrap.addEventListener('click', removeBootstrap);
function removeBootstrap(e) {
    let newBootstrap = document.getElementById("bootstrapJS");
    let BootstrapNested = document.getElementById("bootstrapJS").lastChild;   
}

// ************************************
// ----Bootstrap END----
// ************************************



// ************************************
// ----Git START----
// ************************************


// Create New Element
let git = document.createElement('p');
git.className = 'git-skills';
git.id = 'git-skills';
git.setAttribute('title', 'Git Proficiency');
git.appendChild(document.createTextNode(''));
git.style.setProperty('font-size', '16px')
document.getElementById('gitJS').appendChild(git)


// Grab Old Element
const oldGit = document.getElementById('git');


// On Click function to add element
oldGit.addEventListener('click', gitClick);
function gitClick(e) {
if (git.innerHTML === '') {
  git.innerHTML = '80%'
  } else {
  git.innerHTML = ''
  }
}


// On click function to remove element By Element
const gitJS = document.getElementById('gitJS')
git.addEventListener('click', removeGit);
function removeGit(e) {
    let newGit = document.getElementById("gitJS");
    let GitNested = document.getElementById("gitJS").lastChild;   
}


// ************************************
// ----Git END----
// ************************************



// ************************************
// ----Vue START----
// ************************************

// Create New Element
let vue = document.createElement('p');
vue.className = 'vue-skills';
vue.id = 'vue-skills';
vue.setAttribute('title', 'VueJS Proficiency');
vue.appendChild(document.createTextNode(''));
vue.style.setProperty('font-size', '16px')
document.getElementById('vueJS').appendChild(vue)


// Grab Old Element
const oldVue = document.getElementById('vue');


// On Click function to add element
oldVue.addEventListener('click', vueClick);
function vueClick(e) {
if (vue.innerHTML === '') {
  vue.innerHTML = '70%'
  } else {
  vue.innerHTML = ''
  }
}


// On click function to remove element By Element
const vueJS = document.getElementById('vueJS')
vue.addEventListener('click', removeVue);
function removeVue(e) {
    let newVue = document.getElementById("vueJS");
    let VueNested = document.getElementById("vueJS").lastChild;   
}


// ************************************
// ----Vue END----
// ************************************


// ************************************
// ----Wordpress START----
// ************************************

// Create New Element
let wordpress = document.createElement('p');
wordpress.className = 'wordpress-skills';
wordpress.id = 'wordpress-skills';
wordpress.setAttribute('title', 'Wordpress Proficiency');
wordpress.appendChild(document.createTextNode(''));
wordpress.style.setProperty('font-size', '16px')
document.getElementById('wordpressJS').appendChild(wordpress)


// Grab Old Element
const oldWordpress = document.getElementById('wordpress');


// On Click function to add element
oldWordpress.addEventListener('click', wordpressClick);
function wordpressClick(e) {
if (wordpress.innerHTML === '') {
  wordpress.innerHTML = '90%'
  } else {
  wordpress.innerHTML = ''
  }
}


// On click function to remove element By Element
const wordpressJS = document.getElementById('wordpressJS')
wordpress.addEventListener('click', removeWordpress);
function removeWordpress(e) {
    let newWordpress = document.getElementById("wordpressJS");
    let WordpressNested = document.getElementById("wordpressJS").lastChild;   
}


// ************************************
// ----Wordpress END ----
// ************************************


// ************************************
// ----Python START----
// ************************************


// Create New Element
let python = document.createElement('p');
python.className = 'python-skills';
python.id = 'python-skills';
python.setAttribute('title', 'Python Proficiency');
python.appendChild(document.createTextNode(''));
python.style.setProperty('font-size', '16px')
document.getElementById('pythonJS').appendChild(python)


// Grab Old Element
const oldPython = document.getElementById('python');


// On Click function to add element
oldPython.addEventListener('click', pythonClick);
function pythonClick(e) {
if (python.innerHTML === '') {
  python.innerHTML = '60%'
  } else {
  python.innerHTML = ''
  }
}


// On click function to remove element By Element
const pythonJS = document.getElementById('pythonJS')
python.addEventListener('click', removePython);
function removePython(e) {
    let newPython = document.getElementById("pythonJS");
    let pythonNested = document.getElementById("pythonJS").lastChild;   
}


// ************************************
// ----Python END----
// ************************************


// ************************************
// ----JavaScript END----
// ************************************



// ************************************
// ----Node START----
// ************************************


// ************************************
// ----JavaScript END----
// ************************************



// ************************************
// ----Node START----
// ************************************


// ************************************
// ----JavaScript END----
// ************************************



// ************************************
// ----Node START----
// ************************************


// ************************************
// ----JavaScript END----
// ************************************



// ************************************
// ----Node START----
// ************************************


// ************************************
// ----JavaScript END----
// ************************************



// ************************************
// ----Node START----
// ************************************