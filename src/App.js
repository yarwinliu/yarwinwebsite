import React from 'react';
import './App.css';

function testFunc(){
  //console.log("test");
  //document.getElementById('picture').innerHTML = ""
  document.getElementById("link").href = "https://www.funimada.com/assets/images/cards/big/congrats-4.gif"

}

function App() {
  return (
    <div className="App">
      <div className = "App-header">

        <a id="picture" href="https://www.youtube.com/watch?v=5C0QU5xrAi4" target="blank">
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
            onClick = {testFunc} 
          > 
            ?
          </button>
        </div>
      </div>
    </div>
    
  );
}
export default App;
