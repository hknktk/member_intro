{
      const targetElement = document.querySelectorAll(".card");
      document.addEventListener("scroll", function(){
      for (let i = 0; i<targetElement.length; i++){
      const getElementDistance =targetElement[i].
      getBoundingClientRect().top + targetElement[i].clientHeight * .8
         if(window.innerHeight > getElementDistance){
         targetElement[i].classList.add("show");
          }
        }
      });
}
