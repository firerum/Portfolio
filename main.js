// Clear the fixed mainlinks from the screen if the anchor tag is clicked
function exitFixedLink() {
   const ul = document.querySelector("ul");
   const checkbox = document.querySelector("input");

   ul.addEventListener("click", (e) => {
      if(e.target.tagName.toLowerCase() == "a") {
         checkbox.checked = false;
      }
   });
}


/* Slider function */
function sliders() {
   const slides = document.querySelectorAll(".slide");
   const nextBtn = document.querySelector("#next");
   const prevBtn = document.querySelector("#prev");
   const interval = 5000;
   let imageInterval;

   function nextImage() {
      // Get current image
      const currentImage = document.querySelector(".current");
      // Remove current class
      currentImage.classList.remove("current");
      // Add current to the next Image to make it visible
      if(currentImage.nextElementSibling) {
         currentImage.nextElementSibling.classList.add("current");
         // Add current back to the first image if there are no more images
      } else {
         slides[0].classList.add("current");
      }
   }

   function previousImage() {
      // Get current image
      const currentImage = document.querySelector(".current");
      // Remove current class
      currentImage.classList.remove("current");
      // Add current to the next Image to make it visible
      if(currentImage.previousElementSibling) {
         currentImage.previousElementSibling.classList.add("current");
         // Add current back to the last image if there are no more images
      } else {
         slides[slides.length - 1].classList.add("current");
      }
   }

   nextBtn.addEventListener("click", e => {
      nextImage();
      clearInterval(imageInterval);
      imageInterval = setInterval(nextImage, interval);
   });

   prevBtn.addEventListener("click", e => {
      previousImage();
      clearInterval(imageInterval);
      imageInterval = setInterval(nextImage, interval);
   });

   // Auto slide
   imageInterval = setInterval(nextImage, interval);
}

 
// The contact form processor
function contactFormHandler() {
   // get the form element
   const form = document.getElementById("contact-form");

   function processForm(e) {
      // prevent the browser from redirectiing the user to another page
      e.preventDefault();
      
      // put the form values into an object
      const rawObject = { 
         lastname: document.querySelector("#lastname").value,
         firstname: document.querySelector("#firstname").value,
         email: document.querySelector("#email").value,
         message: document.querySelector("#message").value
      };

      // assign the raw object to the contact object for the server
      const contactObject = rawObject;

      // endpoint
      const URL = "http://localhost:3002/contact-form";

      // submit the form to this endpoint;
      fetch(URL, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(contactObject)
      })
      .then(res => res.json())
      .then(data => {
         console.log(data);
      })
      .catch(err => {
         console.log(err.message, err.name);
      });
   }

   form.addEventListener("submit", processForm);
} 

/* function autoHideScroll() {
   // initial position of the header, which is 0,0
   let prevScrollpos = window.pageYOffset;

   function handleScroll() {
      let currentScrollPos = window.pageYOffset;
      const nav = document.querySelector(".comp-logo");

      if (prevScrollpos >= currentScrollPos) {
         nav.classList.remove("visible");
      } else {
         nav.classList.add("visible");
      }

      prevScrollpos = currentScrollPos;
      console.log(`prev: ${prevScrollpos} current ${currentScrollPos}`);
   }

   window.addEventListener("scroll", handleScroll);
} */


   

// call the functions
exitFixedLink();
sliders();
contactFormHandler();

const theme = document.getElementById("themer");
function themeChanger(e) {
      const body = document.querySelector(".comp-logo");
     
         body.style.backgroundColor = "#eaeaeb";
   }

   theme.addEventListener("click", themeChanger);