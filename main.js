// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal")
modal.className = "hidden"



  const hearts = document.querySelectorAll(".like-glyph")
  
  hearts.forEach(heart => {
    heart.addEventListener("click", addLike)
  })
 // heart.addEventListener("click", addLike)

  function addLike(e){
    // const servResponse = mimicServerCall("url").then()
    // console.log(servResponse)
    mimicServerCall()
    .then(() =>
    {
      if(e.target.innerHTML === EMPTY_HEART){
        e.target.textContent = FULL_HEART
        e.target.className = "activated-heart"
      } else {
        e.target.textContent = EMPTY_HEART
        e.target.className = ""
      }
    })
    .catch((err) => {
      modal.className = "";
      modal.childNodes[1].textContent =  err;
      setTimeout(() => modal.className = "hidden", 3000);
    })
   
  }



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
