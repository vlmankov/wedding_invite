const cover=document.getElementById('coverView');
const inside=document.getElementById('insideView');
const back=document.getElementById('backBtn');
let opened=false;

function openInvite(){
 if(opened) return;
 opened=true;
 cover.classList.remove('active');
 inside.classList.add('active');
}

function closeInvite(){
 opened=false;
 inside.classList.remove('active');
 cover.classList.add('active');
}

document.getElementById('coverImage').addEventListener('click', openInvite);
back.addEventListener('click', closeInvite);
setTimeout(openInvite,5000);
