$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "flex";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
let myCloseFunctionX = function() {
  console.log("myclosef");
  document.getElementById("myDropdownMenuResp").style.transform = "scaleY(0)";
  document.getElementById("myDropdownMenuResp").style.height = "220px";
  document.getElementById("myDropdownMenuResp").style.transition = "height 0.7s, transform 0.3s 0.5s";
}
function openFunction() {
  document.getElementById("myDropdownMenuResp").style.transform = "scaleY(1)";
  document.getElementById("myDropdownMenuResp").style.height = "100vh";
  document.getElementById("myDropdownMenuResp").style.transition = "transform 0.3s, height 0.7s 0.2s";
}

document.getElementById("closeBtnResp").onclick = function() {
  myCloseFunctionX();
}

///////////////////////////////////////////////////////////////////////////

// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("button").on('click', function(event) {
//     console.log("hhh");
//     document.getElementById("myDropdownMenuResp").style.transform = "scaleY(0)";
//     document.getElementById("myDropdownMenuResp").style.height = "150px";
//     document.getElementById("myDropdownMenuResp").style.transition = "all 0.8s";
//
//   });
// });


// $( "button" )
//   .mouseup(function() {
//     myCloseFunctionX()
//   })


//
// function x1() {
//   console.log("test");
//   myCloseFunctionX()
// }

// document.getElementById('closeBtnResp2').addEventListener("mouseout", function() {
//   myCloseFunctionX()
// })


// document.getElementById('myDropdownMenuResp').addEventListener('click', function(e){
//   console.log(e);
//   let xx = document.getElementById("myDropdownMenuResp")
//   if (e.target === document.getElementById('closeBtnResp')){
//     console.log("yourBunnyWrote");
//     document.getElementById("myDropdownMenuResp").style.transform = "scaleY(0)";
//     document.getElementById("myDropdownMenuResp").style.height = "150px";
//     document.getElementById("myDropdownMenuResp").style.transition = "all 0.8s";
//     console.log('nah');
//     function closeFunction() {
//     xx.style.transform = "scaleY(0)";
//     xx.style.height = "150px";
//     xx.style.transition = "all 0.8s";
//   }
//   } else {
//     myCloseFunctionX();
//
//   }
// });
