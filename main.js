const closeBtn = document.getElementsByClassName('closeBtn');
const menuBtn = document.getElementById('hamburgerMenu');
const popupContainer = document.getElementById('popup-container');
const modalBackground = document.querySelector('modalBackgroundHidden');


/* Open */
function openNav() {
    document.getElementById("myNav").style.display = "block";
    
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }
  



menuBtn.addEventListener('click', () => {
    modalBackground.classList.remove("hidden");
})

closeBtn.addEventListener('click', () => {
    modalBackground.classList.add('hidden');
})



