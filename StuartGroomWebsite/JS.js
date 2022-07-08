function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var themeIcon = document.getElementById('themeIcon');
  
    var dmSideText = document.getElementById('dmSideText');
  
    if(themeIcon.classList.contains("fa-sun")){
        
      themeIcon.classList.remove("fa-sun")
      
      themeIcon.classList.add("fa-moon")
        
      
     dmSideText.innerText="Dark Mode";
      
  
    }
    else{
        
      themeIcon.classList.remove("fa-moon")
      
      themeIcon.classList.add("fa-sun")
      
      dmSideText.innerText="Light Mode";
      
      
     
      
    }


  }

const btns = document.querySelectorAll(".modal-open");
const close_btns = document.querySelectorAll(".modal-close");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
    const target = btn.dataset.target;
    btn.addEventListener("click", () => {
        document.querySelector(target).classList.add("active");
        overlay.classList.add("active");
    })
})

close_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.remove("active");
        overlay.classList.remove("active");
    })
})

window.onclick = (e) => {
    if (e.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
}




