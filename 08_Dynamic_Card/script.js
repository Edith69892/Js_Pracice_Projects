const Cards = document.getElementById('cardsArea');
const btn = document.querySelector('#addBtn');

btn.addEventListener('click', () => {
   const newCard = createCard(
        'Dynamic Card Title', 'Edith',
        1234567, '31:06', 2,'https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw')
    Cards.innerHTML += newCard;
    
})

function createCard(title, authorName, views, duration, monthOld,thumbnail) {
let viewStr ;
if (views >= 1000000) {
    viewStr = (views / 1000000).toFixed(1) + 'M';
} else if (views >= 1000) {
    viewStr = (views / 1000).toFixed(1) + 'K';
}
else {
    viewStr = views.toString();
}

console.log(typeof viewStr);

    let html =` <div class="card">
         <div class="image">
                <img src="${thumbnail}"
                    alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text-content">
                <h2 class="title">${title}</h2>
                <div class="text">
                    <span id="author">${authorName}</span>
                    <p><span id="views">${viewStr}</span>Views</p>
                    <p><span id="publish"> ${monthOld}</span>Months ago</p>
                </div>
      </div>`;

   return html;
}