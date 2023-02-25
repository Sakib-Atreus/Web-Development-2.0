const randomUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = bideshini => {
    const bideshiniUser = document.getElementById('name');
    bideshiniUser.innerHTML = bideshini.results[0].name.title + ' ' + bideshini.results[0].name.first + ' ' + bideshini.results[0].name.last;
    console.log(bideshini.results[0].name.title + ' ' + bideshini.results[0].name.first + ' ' + bideshini.results[0].name.last)
    
    const bideshiniGender = document.getElementById('gender');
    bideshiniGender.innerHTML = bideshini.results[0].gender;
    console.log(bideshini.results[0].gender);
}

randomUser();