document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend  of friends){
        friend.style.backgroundColor = 'lightblue';
    }
});

document.getElementById('centering').addEventListener('click', function(){
    const thirdFriend = document.getElementById('make-center');
    thirdFriend.style.textAlign  =  'center';
    thirdFriend.style.backgroundColor = 'yellow';
});

document.getElementById('add-friend').addEventListener('click', function(){
    const friendContainer = document.getElementById('friends');
    const newFriend = document.createElement('div');
    newFriend.classList.add('friend');
    newFriend.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>Something new added</p>
    `
    friendContainer.appendChild(newFriend);
})