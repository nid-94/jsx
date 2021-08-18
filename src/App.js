import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImage from "./imageinSrc.png";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{border:'solid black 1px',maxWidth:'100vw'}}>
        <br />
        <h1 className="title red">Arfaoui Nidhal</h1>
        <p>this is in source image</p>
        <img src={myImage} alt="image in source" />

        <br />
        <p>this is in public image</p>
        <img src="/imageInPublic.png" alt="image in public"  />

        

      </div>

  <video width="320" height="240" controls />

  <source src="myVideo.mp4" type="video/mp4" />

  
        
      </header>
    </div>
  );
}

export default App;
