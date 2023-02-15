// Where to add
const fList = document.getElementById('list');
console.log(fList);
// What to be added
const li = document.createElement('li');
li.innerText = 'Strawberry';
// Add the child
fList.appendChild(li);



// where to add
const mainContainer = document.getElementById('main-content');
// What to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani'
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Borhani'
ul.appendChild(li2);

section.appendChild(ul);
mainContainer.appendChild(section);

// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Sendo-Genji</li>
</ul>
`

mainContainer.appendChild(sectionDress);