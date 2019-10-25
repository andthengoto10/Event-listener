let test = document.getElementById("test");
  
for(i=0; i<25; i++){
  test.innerHTML += '<div class="item"></div>'
}

// This handler will be executed every time the cursor
// is moved over a different div item
test.addEventListener("mouseover", function( event ) {   
  console.log(event.target.style)
  // highlight the mouseover target
  event.target.style.backgroundColor = "orange";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.backgroundColor = "lightblue";
  }, 500);
}, false);

