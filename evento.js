 const btS = document.getElementById('switch');

 btS.addEventListener('click', ()=>{
     document.body.classList.toggle('dark');
     btS.classList.toggle('active')
 })