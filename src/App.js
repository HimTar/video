import Player from "react-player";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Singapore Event Testing</h1>
      <Player
        url="https://youtu.be/Vs5j0CLPHlI"
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default App;
