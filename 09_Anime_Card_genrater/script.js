const genrateBtn = document.querySelector('#genrate')
const form = document.querySelector('#formPopup')
const submit = document.querySelector('#submit')
let cardArea = document.getElementById('cardsArea')
 const card = document.createElement('div')
       card.className="card"

genrateBtn.addEventListener('click', function(){
    form.style.display = 'flex';
})

submit.addEventListener('click', function(){
 
 
    const name = document.querySelector('#nameInput').value.trim()
    const city = document.querySelector('#cityInput').value.trim()
     const jobRole = document.querySelector('#roleInput').value.trim()
      const imgurl = document.querySelector('#imageInput').value.trim()
       const skillset = document.querySelector('#skillsSelect') 

       if(!name || !imgurl){
         alert('Name and Image URL are required!');
        return;
            
       }

       const selectedset = Array.from(skillset.selectedOptions).map(option => option.value)

       
       card.innerHTML = `<span class="badge">PRO</span>
      <div class="profile-img">
        <img src="${imgurl}" alt="profile-img">
      </div>
      <h2>${name}</h2>
      <h4>${city}</h4>
      <p>${jobRole}</p>
      <div class="buttons">
        <button class="message btn">Message</button>
        <button class="follow btn">Following</button>
      </div>
      <div class="skills">
        <p>SKILLS</p>
        <div class="tags">
          ${selectedset.map(skill => `<span>${skill}</span>`).join('')}
        </div>  
      </div>`

     cardArea.appendChild(card)
      form.style.display = 'none'

      document.querySelectorAll('.popup input').forEach(input => input.value ='');
      Array.from(skillset.options).forEach(option => option.selected = false);
})

form.addEventListener('click', (e)=>{
    if(e.target === form){
        form.style.display = 'none'
    }
})
