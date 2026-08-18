const cover=document.getElementById('cover');
const inside=document.getElementById('inside');
const back=document.getElementById('backBtn');
function openInvite(){cover.classList.remove('active');inside.classList.add('active');back.style.display='block';}
setTimeout(openInvite,5000);
cover.addEventListener('click',openInvite);
back.addEventListener('click',()=>{inside.classList.remove('active');cover.classList.add('active');back.style.display='none';});