const closeBtn = document.getElementsByClassName('closeBtn');
const menuBtn = document.getElementById('hamburgerMenu');
const popupContainer = document.getElementById('popupContainer');
const modalBackground = document.querySelector('modalBackgroundHidden');




/* Open */
function openNav() {
    document.getElementById("myNav").style.display = "block";
    
  }

  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }
  
  

/* Transparent background */ 
menuBtn.addEventListener('click', () => {
    modalBackgroundHidden.classList.remove("hidden");
})

closeBtn.addEventListener('click', () => {
    modalBackgroundHidden.classList.add('hidden');
})

