import React from 'react';
import './App.css';

function linkFunc(){
  //change the link of "can you find the right link"
  document.getElementById("link").href = "https://www.funimada.com/assets/images/cards/big/congrats-4.gif"
}

var i = 0;
function move() {
  if (i === 0) {
    //move the progress bar 
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 1);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width +"%";
      }
    }
  }
}

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.getElementById("progBar").style.display = "flex  ";
    document.getElementById("text").style.display = "none";
    move(); 
  }else{
    setTimeout(() => {
      console.log(document.readyState);
      document.getElementById("progBar").style.display = "none";
      document.getElementById("text").style.display = "flex";
    }, 400);
  }
}

function App() {
  return (      
    <div className="App">

      <div class="progress" id="progBar">
        <div class="bar" id="myBar"></div>
      </div>

      <div className = "App-header" id="text">

        <a id="croissantpic" href="https://www.youtube.com/watch?v=5C0QU5xrAi4" target="blank">
          <img src="https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com%2F29554206-b272-467e-88c6-6ad05efdadba%2Forig.jpg&quality=85&mode=auto&format=jpg&v=4&w=1200&h=720"
            alt="croissant" height="100" border="2px blue"></img>
        </a>
        
        <h2>
        Welcome to my website! 
        </h2>

        <div className = "App-link"> 
          <a 
            id="link"
            href="https://reactjs.org"
            target="blank"
          > 
          can you find the right link
          </a>  

          <button
            title = "are you sure?" 
            onClick = {linkFunc} 
          > 
            ?
          </button>
        </div>
      </div>
    </div>
    
  );
}
export default App;