window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
      "#ffe0e9",
      "#ffc2d4",
      "#ff9ebb",
      "#ff7aa2",
      "#e05780",
      "#b9375e",
    ];

    

    //lets get going with the sound herr
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);

        });
    });

 //create a function that make bubbles  
 const createBubbles = index => {
   const bubble = document.createElement("div");
   visual.appendChild(bubble);
   bubble.style.backgroundColor = colors[index];
   bubble.style.animation = "jump 1s ease";
   bubble.addEventListener('animationend', function(){
       visual.removeChild(this);
   });
 };
});


