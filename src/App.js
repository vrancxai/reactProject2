import "./App.css";
import LightDarkMode from "./components/light-dark-mode";
import QRCodeGenerator from "./components/qr-code";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
     

     
      { <StarRating noOfStars={10}/>}

      {<QRCodeGenerator/> }

      {<LightDarkMode/> }

     
    </div>
  );
}

export default App;
