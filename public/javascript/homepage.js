
document.getElementById("submit-zip").addEventListener('click', CheckText);



function CheckText(){
    var ZipUser   = document.getElementById("zip-input");
    var textValue = document.getElementById("zip-input").value;
    var maxlength = ZipUser.getAttribute('maxlength');
       
        if (textValue === "" || textValue === " " || textValue === "  " || textValue === "   " || textValue === "    " || textValue === "     ")
        { 
         InputNull(event);
        }
        if (isNaN(textValue))
        {
         InputText(event);
        }
        else if (textValue.length < maxlength && textValue !== "" && textValue !== " " && textValue !== "  " && textValue !== "   " && textValue !== "    " && textValue !== "     ")
        {
        InsuffCharacters(event);
        }
}


// Get the modal based on the message being delivered for the zip code critera
var modal1 = document.getElementById("modal-1");
var modal2 = document.getElementById("modal-2");
var modal3 = document.getElementById("modal-3");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];

// Functions that appear based on the

function InputNull(event) {
    modal1.style.display = "block";
    event.preventDefault();
  }

  function InputText (event) {
    modal2.style.display = "block";
    event.preventDefault();
  }

  function InsuffCharacters(event) {
    modal3.style.display = "block";
    event.preventDefault();
  }


// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";  
}

span2.onclick=function(){
  modal2.style.display = "none";
}

span3.onclick=function(){
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
  }
}

