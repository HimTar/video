import Player from "react-player";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Singapore Event Testing</h1>
      <Player style={{outline:"none"}}
        url="https://eefileupload.s3.us-east-2.amazonaws.com/sample_video.mp4"
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default App;
