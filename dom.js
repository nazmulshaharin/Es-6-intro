/* document.getElementById('add-border').addEventListener('click', function(){
  const container = document.getElementById('friend-container');
  container.style.border = '4px solid red';
}) */
document.getElementById('add-border').addEventListener('click', function(){
  const container = document.getElementById('friend-container');
  container.style.border = '10px solid black';
  container.style.padding = '15px';
})

function addBackgroundColor(){
const friends = document.getElementsByClassName('friend');
for(const friend of friends){
  friend.style.background = 'Yellow';
}
}

document.getElementById('add-friend').addEventListener('click', function(){
 const container = document.getElementById('friend-container');
 const friendDiv = document.createElement('div');
 friendDiv.classList.add('friend');
 friendDiv.innerHTML = ` <h3 class="friend-name">New friend</h3>
 <p>Expedita iusto distinctio temporibus, architecto at accusantium reiciendis adipisci ratione mollitia ipsam atque corporis esse officia. Explicabo rerum dolorem deserunt ratione quae excepturi incidunt nobis eaque, voluptas dolor laboriosam harum!</p>`
 container.appendChild(friendDiv);
})
