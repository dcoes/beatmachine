let _bpm=120;
let _resolution;

function playSound(audiofile){
    audiofile.play();
}

// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                playNote();

                alert("You clicked Submit!");


            } else {
                
                alert(`You clicked a button`);
            }

        });

        
    
    }

    function playNote() {
        var noteChecked = document.getElementById("note").checked;
        alert("note was requested");
      }

});

