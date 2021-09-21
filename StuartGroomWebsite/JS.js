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

