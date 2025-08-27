const items = document.querySelectorAll('.item');  

items.forEach((question) => {
    // Har item ke andar ka button select karo
    const btn = question.querySelector('.question-btn');
    
    btn.addEventListener('click', () =>{
        // Sabhi items pe loop chalao
        items.forEach((currentItem)=>{
            // Agar current item (jispe click nahi hua) khula hai, to band kar do
            if(currentItem !== question){
                currentItem.classList.remove('show-text');
            }
        });
        
        // Clicked wale item pe show-text toggle karo (open/close)
        question.classList.toggle('show-text');
    });
});


---

📖 Documentation / Explanation

1. const items = document.querySelectorAll('.item');

document.querySelectorAll() → sabhi .item elements select karta hai (ye NodeList return karta hai).

Har .item ek Q&A block hai (question + answer).

Isko ek variable items me store kar liya.


👉 Ab tumhare paas ek list hai: [item1, item2, item3, ...].


---

2. items.forEach((question) => { ... })

forEach → har item pe ek loop chalayega.

Yahaan question ek variable hai jo current item (block) represent karta hai.

Eg: Pehle loop me question = item1

Dusre loop me question = item2, and so on.



👉 Matlab har block individually handle hoga.


---

3. const btn = question.querySelector('.question-btn');

Har item ke andar ek button hai (.question-btn).

question.querySelector() use karne se sirf usi item ka button milega.


❌ Agar hum document.querySelector('.question-btn') likhte, to wo hamesha sirf first button select karta.
✅ question.querySelector() har block ka apna button deta hai.


---

4. btn.addEventListener('click', () => { ... })

Har button pe click event listener lagaya.

Matlab jab bhi user us button pe click karega, andar ka function chalega.



---

5. items.forEach((currentItem)=>{ ... })

Jab ek button click hota hai, tab phir se sabhi items pe loop chalayenge.

Purpose: Pehle sabhi open blocks ko close karna.



---

6. if(currentItem !== question){ currentItem.classList.remove('show-text'); }

Agar currentItem (loop wala item) wo nahi hai jisme click hua (question), to uske upar se .show-text class hata do.

Matlab baaki sab blocks close kar do.



---

7. question.classList.toggle('show-text');

Jo item click hua uska answer toggle karo:

Agar closed hai → open ho jaye.

Agar open hai → close ho jaye.




---

⚡ Concept Clear Points

1. querySelector vs querySelectorAll

querySelector() → sirf first match return karta hai.

querySelectorAll() → sabhi matches (NodeList) return karta hai.


✅ Isliye humne upar document.querySelectorAll('.item') liya aur loop lagaya.


2. Selector inside element

question.querySelector('.question-btn') → har .item ke andar se uska button select kiya.

Isse har block independent ho gaya.



3. Accordion logic (ek time pe ek hi open)

Pehle sabhi items se .show-text class remove karte hain.

Fir clicked wale pe .show-text toggle kar dete hain.





---

⚡ Simple words me:

querySelectorAll('.item') → sab blocks pakad lo.

Har block ka button dhoondo → uspe click listener lagao.

Click hone pe → baaki sab band kar do, clicked wala toggle kar do