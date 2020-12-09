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
  sass.innerHTML = '80%'
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
  node.innerHTML = '50%'
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
  bootstrap.innerHTML = '80%'
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
  git.innerHTML = '65%'
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
  wordpress.innerHTML = '75%'
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
  python.innerHTML = '65%'
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
// ----NPM END----
// ************************************


// Create New Element
let npm = document.createElement('p');
npm.className = 'npm-skills';
npm.id = 'npm-skills';
npm.setAttribute('title', 'NPM Proficiency');
npm.appendChild(document.createTextNode(''));
npm.style.setProperty('font-size', '16px')
document.getElementById('npmJS').appendChild(npm)


// Grab Old Element
const oldNPM = document.getElementById('npm');


// On Click function to add element
oldNPM.addEventListener('click', npmClick);
function npmClick(e) {
if (npm.innerHTML === '') {
  npm.innerHTML = '70%'
  } else {
  npm.innerHTML = ''
  }
}


// On click function to remove element By Element
const npmJS = document.getElementById('npmJS')
npm.addEventListener('click', removeNPM);
function removeNPM(e) {
    let newNPM = document.getElementById("npmJS");
    let npmNested = document.getElementById("npmJS").lastChild;   
}


// ************************************
// ----NPM END----
// ************************************



// ************************************
// ----Database START----
// ************************************

// Create New Element
let database = document.createElement('p');
database.className = 'database-skills';
database.id = 'database-skills';
database.setAttribute('title', 'Database Skills Proficiency');
database.appendChild(document.createTextNode(''));
database.style.setProperty('font-size', '16px')
document.getElementById('databaseJS').appendChild(database)


// Grab Old Element
const oldDatabase = document.getElementById('database');


// On Click function to add element
oldDatabase.addEventListener('click', databaseClick);
function databaseClick(e) {
if (database.innerHTML === '') {
  database.innerHTML = '65%'
  } else {
  database.innerHTML = ''
  }
}


// On click function to remove element By Element
const databaseJS = document.getElementById('databaseJS')
database.addEventListener('click', removeDatabase);
function removeDatabase(e) {
    let newDatabase = document.getElementById("databaseJS");
    let databaseNested = document.getElementById("databaseJS").lastChild;   
}


// ************************************
// ----Database END----
// ************************************



// ************************************
// ----Linux START----
// ************************************

// Create New Element
let linux = document.createElement('p');
linux.className = 'linux-skills';
linux.id = 'linux-skills';
linux.setAttribute('title', 'Linux Proficiency');
linux.appendChild(document.createTextNode(''));
linux.style.setProperty('font-size', '16px')
document.getElementById('linuxJS').appendChild(linux)


// Grab Old Element
const oldLinux = document.getElementById('linux');


// On Click function to add element
oldLinux.addEventListener('click', linuxClick);
function linuxClick(e) {
if (linux.innerHTML === '') {
  linux.innerHTML = '70%'
  } else {
  linux.innerHTML = ''
  }
}


// On click function to remove element By Element
const linuxJS = document.getElementById('linuxJS')
linux.addEventListener('click', removeLinux);
function removeLinux(e) {
    let newLinux = document.getElementById("linuxJS");
    let linuxNested = document.getElementById("linuxJS").lastChild;   
}


// ************************************
// ----Linux END----
// ************************************



// ************************************
// ----AWS START----
// ************************************


// Create New Element
let aws = document.createElement('p');
aws.className = 'aws-skills';
aws.id = 'aws-skills';
aws.setAttribute('title', 'AWS Proficiency');
aws.appendChild(document.createTextNode(''));
aws.style.setProperty('font-size', '16px')
document.getElementById('awsJS').appendChild(aws)


// Grab Old Element
const oldAws = document.getElementById('aws');


// On Click function to add element
oldAws.addEventListener('click', awsClick);
function awsClick(e) {
if (aws.innerHTML === '') {
  aws.innerHTML = '70%'
  } else {
  aws.innerHTML = ''
  }
}


// On click function to remove element By Element
const awsJS = document.getElementById('awsJS')
aws.addEventListener('click', removeAws);
function removeAws(e) {
    let newAws = document.getElementById("awsJS");
    let awsNested = document.getElementById("awsJS").lastChild;   
}


// ************************************
// ----AWS END----
// ************************************



// ************************************
// ----Azure START----
// ************************************

// Create New Element
let azure = document.createElement('p');
azure.className = 'azure-skills';
azure.id = 'azure-skills';
azure.setAttribute('title', 'WS & Azure Proficiency');
azure.appendChild(document.createTextNode(''));
azure.style.setProperty('font-size', '16px')
document.getElementById('azureJS').appendChild(azure)


// Grab Old Element
const oldAzure = document.getElementById('azure');


// On Click function to add element
oldAzure.addEventListener('click', azureClick);
function azureClick(e) {
if (azure.innerHTML === '') {
  azure.innerHTML = '75%'
  } else {
  azure.innerHTML = ''
  }
}


// On click function to remove element By Element
const azureJS = document.getElementById('azureJS')
azure.addEventListener('click', removeAzure);
function removeAzure(e) {
    let newAzure = document.getElementById("azureJS");
    let azureNested = document.getElementById("azureJS").lastChild;   
}


// ************************************
// ----Azure END----
// ************************************



// ************************************
// ----Docker START----
// ************************************

// Create New Element
let docker = document.createElement('p');
docker.className = 'docker-skills';
docker.id = 'docker-skills';
docker.setAttribute('title', 'Docker Proficiency');
docker.appendChild(document.createTextNode(''));
docker.style.setProperty('font-size', '16px')
document.getElementById('dockerJS').appendChild(docker)


// Grab Old Element
const oldDocker = document.getElementById('docker');


// On Click function to add element
oldDocker.addEventListener('click', dockerClick);
function dockerClick(e) {
if (docker.innerHTML === '') {
  docker.innerHTML = '65%'
  } else {
  docker.innerHTML = ''
  }
}


// On click function to remove element By Element
const dockerJS = document.getElementById('dockerJS')
docker.addEventListener('click', removeDocker);
function removeDocker(e) {
    let newDocker = document.getElementById("dockerJS");
    let dockerNested = document.getElementById("dockerJS").lastChild;   
}


// ************************************
// ----Docker END----
// ************************************



// ************************************
// ----Figma START----
// ************************************

// Create New Element
let figma = document.createElement('p');
figma.className = 'figma-skills';
figma.id = 'figma-skills';
figma.setAttribute('title', 'Figma Proficiency');
figma.appendChild(document.createTextNode(''));
figma.style.setProperty('font-size', '16px')
document.getElementById('figmaJS').appendChild(figma)


// Grab Old Element
const oldFigma = document.getElementById('figma');


// On Click function to add element
oldFigma.addEventListener('click', figmaClick);
function figmaClick(e) {
if (figma.innerHTML === '') {
  figma.innerHTML = '70%'
  } else {
  figma.innerHTML = ''
  }
}


// On click function to remove element By Element
const figmaJS = document.getElementById('figmaJS')
figma.addEventListener('click', removeFigma);
function removeFigma(e) {
    let newFigma = document.getElementById("figmaJS");
    let figmaNested = document.getElementById("figmaJS").lastChild;   
}


// ************************************
// ----Figma END----
// ************************************



// ************************************
// ----Networking START----
// ************************************

// Create New Element
let networking = document.createElement('p');
networking.className = 'networking-skills';
networking.id = 'networking-skills';
networking.setAttribute('title', 'Networking Proficiency');
networking.appendChild(document.createTextNode(''));
networking.style.setProperty('font-size', '16px')
document.getElementById('networkingJS').appendChild(networking)


// Grab Old Element
const oldNetworking = document.getElementById('networking');


// On Click function to add element
oldNetworking.addEventListener('click', networkingClick);
function networkingClick(e) {
if (networking.innerHTML === '') {
  networking.innerHTML = '80%'
  } else {
  networking.innerHTML = ''
  }
}


// On click function to remove element By Element
const networkingJS = document.getElementById('networkingJS')
networking.addEventListener('click', removeNetworking);
function removeNetworking(e) {
    let newNetworking = document.getElementById("networkingJS");
    let networkingNested = document.getElementById("networkingJS").lastChild;   
}


// ************************************
// ----Networking END----
// ************************************



// ************************************
// ----Security START----
// ************************************


// Create New Element
let security = document.createElement('p');
security.className = 'security-skills';
security.id = 'security-skills';
security.setAttribute('title', 'Security Proficiency');
security.appendChild(document.createTextNode(''));
security.style.setProperty('font-size', '16px')
document.getElementById('securityJS').appendChild(security)


// Grab Old Element
const oldSecurity = document.getElementById('security');


// On Click function to add element
oldSecurity.addEventListener('click', securityClick);
function securityClick(e) {
if (security.innerHTML === '') {
  security.innerHTML = '70%'
  } else {
  security.innerHTML = ''
  }
}


// On click function to remove element By Element
const securityJS = document.getElementById('securityJS')
security.addEventListener('click', removeSecurity);
function removeSecurity(e) {
    let newSecurity = document.getElementById("securityJS");
    let securityNested = document.getElementById("securityJS").lastChild;   
}


// ************************************
// ----Security END----
// ************************************