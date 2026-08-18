
const card=document.getElementById('card');
const body=document.body;
function openCard(){card.classList.add('open');body.classList.add('opened');}
function closeCard(){card.classList.remove('open');body.classList.remove('opened');setTimeout(openCard,5000);}
setTimeout(openCard,5000);
card.addEventListener('click',openCard);
document.getElementById('back').addEventListener('click',closeCard);
