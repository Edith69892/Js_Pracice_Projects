// const item = document.querySelectorAll('.item');

// item.forEach((question) => {
//     const btn = question.querySelector('.question-btn');
    
//     btn.addEventListener('click', (btn) =>{
//         item.forEach((currentItem)=>{
//             if( currentItem !== question){
//                 currentItem.classList.remove('show-text');
//             }
// })      
// // console.log(question);

//     question.classList.toggle('show-text')
//     })
// })

// second method

const btns = document.querySelectorAll('.question-btn')

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const item = e.currentTarget.closest('.item');

        item.classList.toggle('show-text')
    });
})
