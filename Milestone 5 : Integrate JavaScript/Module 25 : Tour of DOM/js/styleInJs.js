const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.padding = '5px';
    section.style.textAlign = 'center';
    section.style.margin = '5px'; 
}
const ulList = document.querySelectorAll('li');
for(const txt of ulList){
    txt.style.textDecoration = 'none';
}

const placesContainer = document.getElementById('fruits-title');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');